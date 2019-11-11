let HomePage = function () {

    let output = element(by.xpath("//h1[@class='ng-scope']"));

    this.verifyTextOnHomePage = function (result) {
        expect(output.getText()).toEqual(result);
        output.getText().then(console.log);

    };


};
module.exports = new HomePage();