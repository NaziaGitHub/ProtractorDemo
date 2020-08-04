
let p=require('../pages/Locators');

describe('This is the main scenario',function()
{
it('This is first test',function()
{
//browser.get('http://juliemr.github.io/protractor-demo');

p.get('http://juliemr.github.io/protractor-demo');

browser.sleep(5000)

//element(by.model('first')).sendKeys('23')

p.firstnumberaction('23');

//element(by.model('second')).sendKeys('24')

p.secondnumberaction('90');

//element(by.css('[ng-click="doAddition()"]')).click()

p.buttonclick();

//let a=element(by.cssContainingText('.ng-binding','47'))

//expect(a.getText()).toEqual('47')

p.verifyResult('113');

browser.sleep(5000)

});

});

