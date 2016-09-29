'use strict';

function  injectScript(file) {
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  return document.body.appendChild(s);
};

injectScript(chrome.extension.getURL('scripts/custom-combobox.js'));
injectScript(chrome.extension.getURL('scripts/embedded-script.js'));
