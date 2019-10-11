import './styles/index.scss';

import jQuery from 'jquery';
import "popper.js";
import 'bootstrap/dist/js/bootstrap';

//import './sidebar';

jQuery(function () {
    jQuery('.btn-email').tooltip({
        container: "body",
        title: "Email me at moritz.hein@live.de"
    });

    jQuery('.btn-linkedin').tooltip({
        container: "body",
        title: "Connect with me on LinkedIn"
    });

    jQuery('.btn-github').tooltip({
        container: "body",
        title: "Check out my projects on Github"
    });

    jQuery('.btn-instagram').tooltip({
        container: "body",
        title: "Visit my Instagram"
    });

    const overlayElem = jQuery("#loadOverlay");
    overlayElem.addClass("hide");

    setTimeout(function () {
        overlayElem.removeClass("hide");
        overlayElem.addClass("hidden");
        overlayElem.attr("hidden", true);
        jQuery("html").removeClass("loading");
    }, 700);
});
