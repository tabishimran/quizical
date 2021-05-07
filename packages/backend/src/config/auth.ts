const authConfig = {
    cookie:{
        password: process.env.quizical_cookie_password,
        name:'sid',
        isSecure:true
    },
    validateFunc: async(request,session) =>{
        return {valid:true,credentials:{}};
    }
}

module.exports = authConfig;