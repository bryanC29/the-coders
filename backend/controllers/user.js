module.exports.login = (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({
        'message': 'login success',
        'username': `${username}`,
        'password': `${password}`
    })
}

module.exports.register = (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({
        'message': 'signup success',
        'username': `${username}`,
        'password': `${password}`
    })
}