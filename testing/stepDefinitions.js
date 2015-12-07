// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {

    this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });

    this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
        browser.get(url);
        next();
    });

    this.Then(/^it should still do normal tests$/, function(next) {
        expect(true).to.equal(true);
        next();
    });

    this.Then(/^it should expose the correct global variables$/, function(next) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        next();
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
    	browser.getTitle().then(function(title) {
    		console.log(title);
    	});
        expect(browser.getTitle()).to.eventually.equal(text);//.and.notify(next);
        next();
    });

    this.When(/^I click Sign In link$/, function(next) {
    	element(by.id('sign_in')).getText().then(function(text) {
    		console.log(text);
    	});
    	var signIn = element(by.id('sign_in'));
    	signIn.click();
    	next();
    });

    this.Then(/^I should see the registration form$/, function(next) {
    	var regForm = element(by.css('.registration'));
    	expect(regForm).to.exist;
    	next();
    });

this.When(/^I enter username "([^"]*)"$/, function(text, next) {
	console.log(text);
	var usernameField = element(by.css('.form-input')).element(by.tagName("username"));
	// browser.pause();
	usernameField.sendKeys(text);
	next();
});

this.When(/^I enter password "([^"]*)"$/, function(text, next) {
	var passwordField = element(by.css('.form-input')).element(by.tagName("password"));
	passwordField.sendKeys(text);
	next();
});

this.When(/^I submit username and password$/, function(next) {
	var unpwFormSubmit = element(by.buttonText("Submit"));
	unpwFormSubmit.click();
	next();
});

this.Then(/^I should see "([^"]*)" logged in$/, function (text, next) {
	var loggedInUser = element(by.css("dropdown-btn ng-binding"));
	expect(loggedInUser.getText()).to.eventually.equal(text)
	next();
});

};