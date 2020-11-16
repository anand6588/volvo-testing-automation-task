import { Given, When, Then } from "cucumber";
import { carSafetyPage } from "../pages/CarSafety.page";
import { expect } from "chai";
import { clickElement } from "../support/action/clickElement";
import { hasClass } from "../support/lib/checkIfElementHasCssClass";

Given(/^I'm on the car safety page$/, () => {
  carSafetyPage.goToCarSafetyPage();
});

Then(/^I expect the title to match$/, () => {
  const title = carSafetyPage.getTitle();
  expect(browser.getTitle()).to.equal(title);
});

Then(/^Learn more about car safety link is displayed$/, () => {
  const link = carSafetyPage.getLearnMoreAbtCarSftyLink();
  expect(link.isDisplayed()).equal(true);
});

When(/^I click on the link$/, () => {
  const link = carSafetyPage.getLearnMoreAbtCarSftyLink();
  clickElement("click", link);
});

Then(
  /^I expect the page title to be changed after loading car safety page$/,
  () => {
    const title = carSafetyPage.getLearnMoreAbtCarSftyPageTitle();
    browser.waitUntil(() => browser.getTitle() === title, 5000);
    expect(browser.getTitle()).to.equal(title);
  }
);

Then(/^Learn more button is displayed$/, () => {
  const link = carSafetyPage.getLearnMoreAboutInnovation();
  expect(link.isDisplayed()).equal(true);
});

Then(/^I click on the button learn more about innovation button$/, () => {
  const link = carSafetyPage.getLearnMoreAboutInnovation();
  clickElement("click", link);
});

Then(/^I expect the title to be changed after loading innovation page$/, () => {
  const title = carSafetyPage.getLearnMoreAbtInnovation();
  browser.waitUntil(() => browser.getTitle() === title, 5000);
  expect(browser.getTitle()).to.equal(title);
});

Then(/^I expect previous button to be disabled$/, () => {
  const prevButton = carSafetyPage.getModelsListPreviousButton();
  expect(hasClass(prevButton, "od")).equal(true);
});

Then(/^I expect next button to be enabled$/, () => {
  const nextButton = carSafetyPage.getModelsListNextButton();
  expect(hasClass(nextButton, "oh")).equal(true);
});

When(/^I click on next button$/, () => {
  const nextButton = carSafetyPage.getModelsListNextButton();
  clickElement("click", nextButton);
});

Then(/^I expect previous button to be enabled$/, () => {
  const prevButton = carSafetyPage.getModelsListPreviousButton();
  expect(hasClass(prevButton, "oh")).equal(true);
});
