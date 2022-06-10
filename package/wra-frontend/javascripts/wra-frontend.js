(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.WRAFrontend = {}));
})(this, (function (exports) { 'use strict';

  function polyfill (options) {
    // polyfill for browsers without NodeList forEach method
    if (window.NodeList && !window.NodeList.prototype.forEach) {
      window.NodeList.prototype.forEach = window.Array.prototype.forEach;
    }
  }

  function initAll (options) {
    // Set the options to an empty object by default if no options are passed.
    options = typeof options !== 'undefined' ? options : {};

    // Allow the user to initialise Digital Land Frontend in only certain sections of the page
    // Defaults to the entire document if nothing is set.
    typeof options.scope !== 'undefined' ? options.scope : document;

    // load required polyfills
    polyfill();
  }

  exports.initAll = initAll;
  exports.polyfill = polyfill;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
