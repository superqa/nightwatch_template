module.exports = {
  "Superqa homepage" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible("body", 1000)
      .assert.containsText(".menuContainer", "About")
      .assert.containsText(".menuContainer", "Courses")
      .assert.containsText(".menuContainer", "Staff")
      .assert.containsText(".menuContainer", "Login")
      .assert.containsText(".menuContainer", "Register")
      .assert.containsText(".menuContainer", "Apply")
      .end();
  },

  "Superqa Login Test" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible("body", 1000)
      .click(".login")
      .pause(1000)
      .assert.elementPresent(".login-title")
      .assert.elementPresent("form")
      .assert.elementPresent("input[name=email]")
      .assert.elementPresent("input[name=password]")
      .assert.elementPresent("input[value=Login")
      .assert.containsText(".loginForm","Login")
      .click(".login")
      .pause(1000)
      .end();
  },

  "Superqa Registration Test" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible("body", 1000)
      .click(".register")
      .pause(1000)
      .setValue("input[type=email]", "test1@test.com")
      .setValue("input[name=fullname]", "Sam Weldemariam")
      .setValue("form input:nth-child(3)", "password")
      .setValue("input[name=confirmPassword]", "password")
      .click("input[value=Register]")
      .pause(1000)
      .verify.containsText("body", "User already exists.")
      .click(".login")
      .pause(1000)
      .setValue("input[name=email]", "test1@test.com")
      .setValue("input[type=password]", "password")
      .click("input[value=Login]")
      .verify.containsText(".menuContainer", "Accounts")
      .end()
  },

  "Account test" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible("body", 1000)
      .click(".login")
      .pause(1000)
      .setValue("input[name=email]", "test1@test.com")
      .setValue("input[type=password]", "password")
      .click("input[value=Login]")
      .click(".accounts-tab")
      .pause(1000)
      .click(".newAccountButton")
      .setValue("input[name=cohort]", "Cheese Class")
      .setValue("input[name=startDate]", "02/28/2016")
      .setValue("input[name=endDate]", "03/25/2016")
      .setValue("input[name=amount]", "2000")
      .click(".addAccount")
      .assert.containsText(".top", "Cheese Class")
      .assert.containsText(".rightSideBar", "Cheese Class")
      .jqueryClick(".rightSideBar .cohortMenu li:first .removeAccount")
      .acceptAlert()
      .pause(1000)
      .end()
  }
};
