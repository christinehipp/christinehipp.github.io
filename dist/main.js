"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var toggles = [].concat(_toConsumableArray(document.querySelectorAll('.js-toggle-type')));
var pages = [].concat(_toConsumableArray(document.querySelectorAll('img[data-type]')));

function toggleComics(type) {
    setCookie('COMIC', type);

    toggles.forEach(function (toggle) {
        return toggle.classList.remove('is-active');
    });
    pages.forEach(function (page) {
        return page.classList.add('u-hidden');
    });

    toggles.filter(function (toggle) {
        return toggle.getAttribute('data-type') === type;
    }).forEach(function (toggle) {
        return toggle.classList.add('is-active');
    });
    pages.filter(function (page) {
        return page.getAttribute('data-type') === type;
    }).forEach(function (page) {
        return page.classList.remove('u-hidden');
    });
}

toggles.forEach(function (toggle) {
    var type = toggle.getAttribute('data-type');

    toggle.addEventListener('click', function () {
        toggleComics(type);
    });
});

console.log(getQueryStringValue('type'));

if (getQueryStringValue('type')) {
    toggleComics(getQueryStringValue('type'));
} else if (getCookie('COMIC')) {
    toggleComics(getCookie('COMIC'));
} else {
    toggleComics('full');
}