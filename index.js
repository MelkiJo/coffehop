document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementByClass("navbar");
    var current_pos = nav.offsetTop;
    window.onscroll = function (){
        var window_pos = document.documentElement.scrollTop;
        if (window_pos >= current_pos) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }

    }
})