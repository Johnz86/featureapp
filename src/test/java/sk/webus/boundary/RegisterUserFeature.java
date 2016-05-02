package sk.webus.boundary;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by jakubcik.jan on 27. 4. 2016.
 */
public class RegisterUserFeature {

    @Given("I am not logged in")
    public void notLoggedIn(){

    }

    @When("I sign up with valid user data")
    public void I_sign_up_with_valid_user_data() throws Throwable {

    }

    @Then("I should see a successful user registration message")
    public void I_should_see_a_successful_user_registration_message() throws Throwable {

    }

    @When("I sign up with an invalid email")
    public void I_sign_up_with_an_invalid_email() throws Throwable {

    }

    @Then("I should see an invalid email message")
    public void I_should_see_an_invalid_email_message() throws Throwable {

        
    }

    @When("I sign up without a password$")
    public void I_sign_up_without_a_password() throws Throwable {
        
        
    }

    @Then("I should see a missing password message")
    public void I_should_see_a_missing_password_message() throws Throwable {
        
        
    }

    @When("I sign up without a password confirmation$")
    public void I_sign_up_without_a_password_confirmation() throws Throwable {
        
        
    }

    @Then("I should see a missing password confirmation message")
    public void I_should_see_a_missing_password_confirmation_message() throws Throwable {
        
        
    }

    @When("I sign up with a mismatched password confirmation")
    public void I_sign_up_with_a_mismatched_password_confirmation() throws Throwable {
        
        
    }

    @Then("I should see a mismatched password message")
    public void I_should_see_a_mismatched_password_message() throws Throwable {
        
        
    }
}

