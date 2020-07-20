/* Initiliaze */
var webdriver = require('selenium-webdriver');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
var driver = new webdriver.Builder().forBrowser('chrome').build();

var po = {

    functions: {
        open: function open() {
            driver.get('https://automation.herolo.co.il/');
            driver.manage().window().maximize();
        },
        assertContact: async function assert() {
            try {
                await driver.findElement(webdriver.By.xpath(`//span[contains(text(), "איך אפשר לעזור?")]`));
            }
            catch {
                console.error("Contact element is not visible");
                process.abort();
            }
        },
        fillContactPopup: function fillContactPopup() {
            driver.findElement(webdriver.By.name('name')).sendKeys('Bodek');
            driver.findElement(webdriver.By.name('email')).sendKeys('bodek@testing.com');
            driver.findElement(webdriver.By.name('phone')).sendKeys('0587787478');
            // driver.findElement(webdriver.By.xpath('//button//span[contains(text(), "שליחה")]')).click();
        },
        fillContact: function fillContact() {
            driver.findElement(webdriver.By.id('name')).sendKeys('bodek');
            driver.findElement(webdriver.By.id('company')).sendKeys('testers');
            driver.findElement(webdriver.By.id('email')).sendKeys('bodek@testing.com');
            driver.findElement(webdriver.By.id('telephone')).sendKeys('0587787478');
            // driver.findElement(webdriver.By.xpath('//span[contains(text(), "דברו איתנו")]')).click();
        },
        browseProjects: function browseProjects() {
            try{
            driver.findElement(webdriver.By.xpath('//img[@alt="Right arrow"]')).click();
            }
            catch {
                console.error("The browse arrow element was not found")
            }
        },
        socialLinks: async function socialLinks() {
            // driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//a[@href="https://herolo.co.il/?lang=he"]')));
            try {
            driver.findElement(webdriver.By.xpath('//a[@href="https://herolo.co.il/?lang=he"]')).click();
            }
            catch {
                console.error("website link element not found");
            }
            var windows = await driver.getWindowHandle();
            await console.log(windows);
            driver.switchTo().window(windows);
            try {
                driver.findElement(webdriver.By.xpath('//span[contains(text(), "EN")]')).click();
                // driver.wait(webdriver.until.urlIs('https://herolo.co.il/?lang=he"]'));
                // console.log("done?");
            }
            catch {
                await console.log("the website url does not match");
                
            }
        }    
        }
    }

module.exports = po;