// ==UserScript==
// @name         <<<CLIENT_CODE>>> <<<EXPERIMENT_NUMBER>>> - Variation 1
// @author       Guy Whale
// @match        https://*/*
// @resource     cssFile file:///Users/guywhale/repos/experiments/<<<CLIENT_CODE>>>/<<<EXPERIMENT_NUMBER>>>/variation-1.css
// @require      file:///Users/guywhale/repos/experiments/<<<CLIENT_CODE>>>/<<<EXPERIMENT_NUMBER>>>/variation-1.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

var cssFile = GM_getResourceText("cssFile");
GM_addStyle(cssFile);
