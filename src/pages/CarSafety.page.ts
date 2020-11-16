import {
  aMillionMorePageTitle,
  carSafety,
  innovation,
} from "../constants/PageTitles";
import {
  url,
  learnMoreAboutCarSafetyLink,
  learnMoreAboutInnovationButton,
  modelsListPrevButton,
  modelsListNextButton,
} from "../constants/Millionmore.page.elements";
class CarSafetyPage {
  goToCarSafetyPage(): void {
    browser.url(url);
  }

  getTitle(): string {
    return aMillionMorePageTitle;
  }

  getLearnMoreAbtCarSftyLink(): WebdriverIO.Element {
    return $(learnMoreAboutCarSafetyLink);
  }

  getLearnMoreAbtCarSftyPageTitle(): string {
    return carSafety;
  }

  getLearnMoreAboutInnovation(): WebdriverIO.Element {
    return $(learnMoreAboutInnovationButton);
  }

  getLearnMoreAbtInnovation(): string {
    return innovation;
  }

  getModelsListPreviousButton(): WebdriverIO.Element {
    return $(modelsListPrevButton);
  }

  getModelsListNextButton(): WebdriverIO.Element {
    return $(modelsListNextButton);
  }
}
export const carSafetyPage = new CarSafetyPage();
