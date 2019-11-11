let loginPage = function () {

    let userName_textbox = element(by.model('Auth.user.name'));
    let password_textbox = element(by.model('Auth.user.password'));
    let secondUserName_textbox = element(by.model('model[options.key]'));
    let loginButton = element(by.css('[ng-click="Auth.login()"]'));

    this.enterUserName = function (username) {
        userName_textbox.sendKeys(username);
    };

    this.enterPassword = function (password) {
        password_textbox.sendKeys(password);
    };

    this.enterSecondUserName = function (username2) {
        secondUserName_textbox.sendKeys(username2);
    };

    this.clickLoginButton = function () {
        loginButton.click();
    };


};

module.exports = new loginPage();