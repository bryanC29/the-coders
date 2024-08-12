const mongoose = require('mongoose');

const dbconn = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log(`Connected to ${mongoose.connection.host}`);
        })
    }
    catch(e) {
        console.log(e);
        process.exit(1);
    }
}

module.exports = dbconn;