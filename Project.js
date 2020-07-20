const po = require('./pageobjects');
// const { Driver } = require('selenium-webdriver/chrome');

    po.functions.open();
    po.functions.assertContact();
    po.functions.fillContactPopup();
    po.functions.fillContact();
    po.functions.socialLinks();