let a=function()
{
let firstnumber=element(by.model('first'));
let secondnumber=element(by.model('second'));
let buttonaction=element(by.css('[ng-click="doAddition()"]'));

this.get=function(url)
{
browser.get(url);
};

this.firstnumberaction=function(FNo)
{
firstnumber.sendKeys(FNo);
};

this.secondnumberaction=function(SNo)
{
secondnumber.sendKeys(SNo);
};

this.buttonclick=function()
{
 buttonaction.click();
};

this.verifyResult=function(result)
{
    let a1=element(by.cssContainingText('.ng-binding',result));
    expect(a1.getText()).toEqual(result);
};
};
module.exports=new a();
