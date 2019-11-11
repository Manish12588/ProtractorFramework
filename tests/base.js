let baseClass = function () {

    this.get = function (URL) {
        browser.get(URL);
    };

};

module.exports = new baseClass();