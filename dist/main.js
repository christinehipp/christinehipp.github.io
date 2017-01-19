'use strict';

var _arguments = arguments;
/* jshint esversion: 6 */

/**
 * jQuery reference to the document
 * @type {jQuery}
 */
var $doc = $(document);

/**
 * jQuery reference to the window
 * @type {jQuery}
 */
var $win = $(window);

/**
 * jQuery reference to the body tag
 * @type {jQuery}
 */
var $body = $('body');

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 *
 * @param {function} func Function you want debounced
 * @param {integer} wait Time in ms to wait
 * @param {boolean} immediate If `immediate` is passed, trigger the function on
 * the leading edge, instead of the trailing
 *
 * @author http://davidwalsh.name/javascript-debounce-function
 */
var debounce = function debounce(func, wait, immediate) {

    var timeout = void 0;

    return function () {

        var _this = this;
        var args = arguments;

        var later = function later() {
            timeout = null;
            if (!immediate) {
                func.apply(_this, args);
            }
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(_this, args);
        }
    };
};

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 */
var throttle = function throttle(func, wait, options) {

    var context = void 0;
    var args = void 0;
    var result = void 0;
    var timeout = null;
    var previous = 0;

    if (!options) {
        options = {};
    }

    var later = function later() {
        previous = options.leading === false ? 0 : getNow();
        timeout = null;
        result = func.apply(context, args);

        if (!timeout) {
            context = args = null;
        }
    };

    return function () {

        var now = getNow();

        if (!previous && options.leading === false) {
            previous = now;
        }

        var remaining = wait - (now - previous);
        context = undefined;
        args = _arguments;

        if (remaining <= 0 || remaining > wait) {

            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }

            previous = now;
            result = func.apply(context, args);

            if (!timeout) {
                context = args = null;
            }
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }

        return result;
    };
};

/**
 * Get current timestamp
 */
var getNow = function getNow() {

    return Date.now() || function () {
        return new Date().getTime();
    };
};

/**
 * Reusable Active State toggle function. To toggle 'is-active' on a different
 * element add data-target('.class') or data-target('#id')
 *
 * @namespace
 */
$(document.body).on('click', '.js-toggle-active', function (e) {

    e.preventDefault();

    // Store $this as clicked
    var $this = $(undefined); // [1]

    // Check if data-target is set, and store it as _data
    var data = $this.data('target'); // [2]

    // If data-target was set pass it through jQuery and use it as the target,
    // or assume the clicked element.
    var target = data ? $(data) : $this; // [3]

    target.toggleClass('is-active');
});