module.exports.startTest = (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({
        'message': 'test start success',
        'username': `${username}`,
        'password': `${password}`
    })
}

module.exports.submitTest = (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({
        'message': 'test success',
        'username': `${username}`,
        'password': `${password}`
    })
}