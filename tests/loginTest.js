let Base = require('./base');
let Login = require('../pages/login');
let Home = require('../pages/home');


describe('Login into application', function () {

    it('Successful Login', function () {

        Base.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        Login.enterUserName('angular');
        Login.enterPassword('password');
        Login.enterSecondUserName('angular');
        Login.clickLoginButton();
        Home.verifyTextOnHomePage('Home');      
        browser.sleep(2000);

    });

    it('Successful Login with verifyTextFail', function () {

        Base.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        Login.enterUserName('angular');
        Login.enterPassword('password');
        Login.enterSecondUserName('angular');
        Login.clickLoginButton();
        Home.verifyTextOnHomePage('HOME');      
        browser.sleep(2000);

    });

});
