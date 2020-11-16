import { checkIfElementExists } from "../lib/checkIfElementExists";

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export function clickElement(action: string, selector): void {
  // checkIfElementExists(selector);

  const runInBrowser = function (argument) {
    argument.click();
  };
  const elementToClickOn = browser.$(selector);
  browser.execute(runInBrowser, elementToClickOn);
}
