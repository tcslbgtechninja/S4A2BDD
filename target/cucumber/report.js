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
  "duration": 8751627657,
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
  "duration": 275791432,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLoginFeature.homepage_is_displayed()"
});
formatter.result({
  "duration": 1173524784,
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
  "duration": 937853050,
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
  "duration": 236704779,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLoginFeature.login_is_failed()"
});
formatter.result({
  "duration": 250156763,
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
  "duration": 955886806,
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
  "duration": 191652043,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionLoginFeature.login_is_failed()"
});
formatter.result({
  "duration": 293377923,
  "status": "passed"
});
});