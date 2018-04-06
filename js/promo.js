var spans = $('span[id^="promo-"]').hide(),
    i = 0;

(function cycle() {

    spans.eq(i).fadeIn(600)
        .delay(3500)
        .fadeOut(600, cycle);

    i = ++i % spans.length;

})();
