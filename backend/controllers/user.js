const Users = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.login = (req, res) => {
    const { username, password } = req.body;

    res.status(200).json({
        'message': 'login success',
        'username': `${username}`,
        'password': `${password}`
    })
}

module.exports.register = async (req, res) => {
    const { name, username, password, contact } = req.body;
    try{
        if (
            [name, name, password, password, contact].some(
                (field) => field?.trim() === ""
            )
        ) {
            res.status(400).json({ message: "All Fields are Required" });
        }
    
        const existingUser = await Users.findOne({username});

        if(existingUser) return res.status(400).json({ message: "User Already Exists!" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new Users({
            name,
            username,
            password: hashedPassword,
            contact,
        });

        await newUser.save();

        const createdUser = await Users.findById(newUser._id)?.select({
            name: 1,
            username: 1,
        })

        const token = jwt.sign(
            {
                id: newUser._id,
                name: newUser.name,
                username: newUser.username,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "5d",
            }
        );
        res.setHeader("Authorization", `Bearer ${token}`);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 5 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            'message': 'signup success',
            createdUser,
        })

    }
    catch(e) {
        console.log(e);
    }
}