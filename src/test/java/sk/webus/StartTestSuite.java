package sk.webus;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

/**
 * Created by jakubcik.jan on 27. 4. 2016.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
    format = { "pretty", "html:build/reports/cucumber-html-report", "json:build/reports/cucumber-report.json" },
    strict = true,
    features = "src/test/resources/features/register_user.feature"
)
public class StartTestSuite {
}
