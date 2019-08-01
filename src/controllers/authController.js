let getLoginRegister = (req, res) => {
    return res.render("auth/master");
};

let getLogout = (req, res) => {
    //
}

module.exports = {
    getLoginRegister: getLoginRegister,
    getLogout: getLogout

};
