window.onscroll = function () {
    var header = document.getElementById('header');
    var headerlinks = document.getElementById('header-links');
    var headerlinks2 = document.getElementById('header-links2');
    var headerlinks3 = document.getElementById('header-links3');
    var headerlinks4 = document.getElementById('header-links4');


    if (window.pageYOffset > 12) {
        header.classList.add("navbar1");
        header.classList.remove("header");

        headerlinks.classList.add("header-links-scroll");
        headerlinks.classList.remove("header-links");

        headerlinks2.classList.add("header-links-scroll");
        headerlinks2.classList.remove("header-links");

        headerlinks3.classList.add("header-links-scroll");
        headerlinks3.classList.remove("header-links");

        headerlinks4.classList.add("header-links-scroll");
        headerlinks4.classList.remove("header-links");


    }
    else {
        header.classList.remove("navbar1");
        header.classList.add("header");

        headerlinks.classList.remove("header-links-scroll");
        headerlinks.classList.add("header-links");

        headerlinks2.classList.remove("header-links-scroll");
        headerlinks2.classList.add("header-links");

        headerlinks3.classList.remove("header-links-scroll");
        headerlinks3.classList.add("header-links");

        headerlinks4.classList.remove("header-links-scroll");
        headerlinks4.classList.add("header-links");

    }
}