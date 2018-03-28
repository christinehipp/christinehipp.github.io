function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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


const toggles = [...document.querySelectorAll('.js-toggle-type')];
const pages = [...document.querySelectorAll('img[data-type]')];


function toggleComics(type) {
    setCookie('COMIC', type);

    toggles.forEach(toggle => toggle.classList.remove('is-active'));
    pages.forEach(page => page.classList.add('u-hidden'));

    toggles
        .filter(toggle => toggle.getAttribute('data-type') === type)
        .forEach(toggle => toggle.classList.add('is-active'));
    pages
        .filter(page => page.getAttribute('data-type') === type)
        .forEach(page => page.classList.remove('u-hidden'));
}

toggles.forEach(toggle => {
    const type = toggle.getAttribute('data-type');

    toggle.addEventListener('click', () => {
        toggleComics(type);
    })
});

if (getCookie('COMIC')) {
    toggleComics(getCookie('COMIC'));
}
