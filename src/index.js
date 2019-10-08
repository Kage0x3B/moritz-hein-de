import './styles/index.scss';

import 'popper.js';
import jQuery from 'jquery';
import '@fortawesome/fontawesome-free/js/all';

import './sidebar';

jQuery(function () {
    const overlayElem = jQuery("#loadOverlay");
    overlayElem.addClass("hide");

    setTimeout(function () {
        overlayElem.removeClass("hide");
        overlayElem.addClass("hidden");
        overlayElem.attr("hidden", true);
        jQuery("html").removeClass("loading");
    }, 700);
});
