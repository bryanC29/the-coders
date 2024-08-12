module.exports.userVerification = (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    res.status(200).json({
        'message': 'user success',
        'username': `${username}`,
        'password': `${password}`
    })
}

module.exports.certificateVerification = (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({
        'message': 'certificate success',
        'username': `${username}`,
        'password': `${password}`
    })
}