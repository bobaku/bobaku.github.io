window.onscroll = function() {
    addScrollToTop()
}
function scrollToTop(t) {
    setTimeout(scrollToTop, t);
}

function scrollToTop()
{
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;

    if (position){
        window.scrollBy(0, -Math.max(10, Math.floor(position / 1000)));
        scrollAnimation = setTimeout("scrollToTop()", 1);
    } else clearTimeout(scrollAnimation);
}

function addScrollToTop() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("scroller").classList.add('transformY-100');
        document.getElementById("scroller").classList.remove('transformY-100-remove');
    } else {
        document.getElementById("scroller").classList.remove('transformY-100');
        document.getElementById("scroller").classList.add('transformY-100-remove');


    }
}
