const User = require('../models/user');

const authConfig = {
    cookie:{
        password: process.env.quizical_cookie_password,
        name:'sid',
        isSecure:true
    },
    validateFunc: async(request,session) =>{
        const uri = session.sid.id;
        const user = await User.findOne({'uri':uri});
        if(user) return {valid:true};
        else return {valid:false}
    }
}

module.exports = authConfig;