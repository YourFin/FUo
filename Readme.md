<img src="logo.svg" alt="FUo logo" width="50" height="50" />

# FUo - Prevent duo from nagging about out of date computers/browsers
This extension stops the Duo two factor authentication page from warning about out of date browsers.

**This software has no affiliation with Duo Security, inc.**

Available as a [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/fuo/), with a Chrome extension currently under review by Google.

# Developer instructions

1. Clone this repository
1. Run package.sh to generate icons
1. Point the [firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Trying_it_out?) or [Chrome(ium)](https://developer.chrome.com/extensions/getstarted#manifest) unpacked extension loader at the [public](./public) subdirectory.

You should now be able to easily reload the extension as you make changes by clicking on the reload extension button.

# Packaging for release

Just run the [package.sh](./package.sh) script in this repository. Requires inkscape and zip to be installed.

# License
Code: Apache 2.0
