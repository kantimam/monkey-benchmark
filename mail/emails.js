const HOST=process.env.HOST;


const emailConfirmMail=function(targetmail, uID){
    return {
        subject: "confirm email",
        text: `follow this link to confirm your mail ${HOST}/api/confirm/${uID}/${targetmail}`,
        html: `<b>follow this link to confirm your mail <a href=${HOST}/api/confirm/${uID}/${targetmail}>${HOST}/api/confirm/${uID}/${targetmail}</a></b>`
    };
}

const resetPasswordMail=function(targetmail, uID){
    return {
        subject: "reset password",
        text: `follow this link to reset your password ${HOST}/account/createnewpassword/${uID}/${targetmail}`,
        html: `<b>follow this link to reset your password <a href=${HOST}/account/createnewpassword/${uID}/${targetmail}>create new password</a></b>`
    };
}



module.exports={
    emailConfirmMail,
    resetPasswordMail
}