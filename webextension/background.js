/* jshint moz: true, devel: true */

/**
 * Copyright (c) 2015 neoranga55@yahoo.es
 * 
 * The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 **/


"use strict";

document.body.style.border = "5px solid green";

function toggleTitle(title) {
  if (title == "this") {
    browser.browserAction.setTitle({title: "that"});
    browser.browserAction.setBadgeText({text: "that"});
  } else {
    browser.browserAction.setTitle({title: "this"});
    browser.browserAction.setBadgeText({text: "this"});
  }
}

browser.browserAction.setBadgeText({text: "1234"});
//browser.browserAction.setBadgeBackgroundColor({color: "red"});

browser.browserAction.onClicked.addListener(() => {
  var gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});

// Ask to the legacy part to dump the needed data and send it back
// to the background page...
// var port = browser.runtime.connect({name: "sync-legacy-addon-data"});
// port.onMessage.addListener((msg) => {
//   if (msg) {
//     // Where it can be saved using the WebExtensions storage API.
//     browser.storage.local.set(msg);
//   }
// });
