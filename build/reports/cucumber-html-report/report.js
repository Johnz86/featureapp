$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/register_user.feature");
formatter.feature({
  "line": 1,
  "name": "Register user",
  "description": "As a user\r\nI want to be able to register user\r\nSo that I get access to protected sections of the site",
  "id": "register-user",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUserFeature.notLoggedIn()"
});
formatter.result({
  "duration": 133930669,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User registers with valid data",
  "description": "",
  "id": "register-user;user-registers-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I sign up with valid user data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see a successful user registration message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUserFeature.I_sign_up_with_valid_user_data()"
});
formatter.result({
  "duration": 79645,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserFeature.I_should_see_a_successful_user_registration_message()"
});
formatter.result({
  "duration": 24632,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUserFeature.notLoggedIn()"
});
formatter.result({
  "duration": 33254,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User registers with invalid email",
  "description": "",
  "id": "register-user;user-registers-with-invalid-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I sign up with an invalid email",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see an invalid email message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUserFeature.I_sign_up_with_an_invalid_email()"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserFeature.I_should_see_an_invalid_email_message()"
});
formatter.result({
  "duration": 27506,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUserFeature.notLoggedIn()"
});
formatter.result({
  "duration": 43928,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User registers without password",
  "description": "",
  "id": "register-user;user-registers-without-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I sign up without a password",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see a missing password message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUserFeature.I_sign_up_without_a_password()"
});
formatter.result({
  "duration": 29970,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserFeature.I_should_see_a_missing_password_message()"
});
formatter.result({
  "duration": 21758,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUserFeature.notLoggedIn()"
});
formatter.result({
  "duration": 44748,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User registers without password confirmation",
  "description": "",
  "id": "register-user;user-registers-without-password-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I sign up without a password confirmation",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see a missing password confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUserFeature.I_sign_up_without_a_password_confirmation()"
});
formatter.result({
  "duration": 30380,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserFeature.I_should_see_a_missing_password_confirmation_message()"
});
formatter.result({
  "duration": 32022,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUserFeature.notLoggedIn()"
});
formatter.result({
  "duration": 45160,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User registers with mismatched password and confirmation",
  "description": "",
  "id": "register-user;user-registers-with-mismatched-password-and-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I sign up with a mismatched password confirmation",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see a mismatched password message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUserFeature.I_sign_up_with_a_mismatched_password_confirmation()"
});
formatter.result({
  "duration": 45570,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserFeature.I_should_see_a_mismatched_password_message()"
});
formatter.result({
  "duration": 27095,
  "status": "passed"
});
});