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
  }

};
