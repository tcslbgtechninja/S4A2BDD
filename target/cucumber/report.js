$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Valid Login",
  "description": "",
  "id": "login;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "entered valid username as ajaykkdasari@gmail.com and password as Waterf@11",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLoginFeature.application_is_open()"
});
formatter.result({
  "duration": 1944008193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajaykkdasari@gmail.com",
      "offset": 26
    },
    {
      "val": "Waterf@11",
      "offset": 65
    }
  ],
  "location": "StepDefinitionLoginFeature.entered_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 522028671,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLoginFeature.homepage_is_displayed()"
});
formatter.result({
  "duration": 1040287709,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Invalid login with incorrect username",
  "description": "",
  "id": "login;invalid-login-with-incorrect-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "entered incorrect username as ajaydasari@gmail.com and correct password as Waterf@11",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "login is failed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLoginFeature.application_is_open()"
});
formatter.result({
  "duration": 1080678294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajaydasari@gmail.com",
      "offset": 30
    },
    {
      "val": "Waterf@11",
      "offset": 75
    }
  ],
  "location": "StepDefinitionLoginFeature.entered_incorrect_username_and_correct_password(String,String)"
});
formatter.result({
  "duration": 296696910,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLoginFeature.login_is_failed()"
});
formatter.result({
  "duration": 273647769,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Invalid login with incorrect password",
  "description": "",
  "id": "login;invalid-login-with-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "entered correct username as ajaykkdasari@gmail.com and incorrect password as Water@11",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "login is failed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionLoginFeature.application_is_open()"
});
formatter.result({
  "duration": 567474105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajaykkdasari@gmail.com",
      "offset": 28
    },
    {
      "val": "Water@11",
      "offset": 77
    }
  ],
  "location": "StepDefinitionLoginFeature.entered_correct_username_and_incorrect_password(String,String)"
});
formatter.result({
  "duration": 220669241,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLoginFeature.login_is_failed()"
});
formatter.result({
  "duration": 312080977,
  "status": "passed"
});
});