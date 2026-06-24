(function () {
    'use strict';

    if (window.__dropstepGaInit) return;
    window.__dropstepGaInit = true;

    var GA_ID = 'G-M2HP0SG0LB';
    var isProduction = /^(www\.)?dropstep\.io$/i.test(window.location.hostname);

    if (!isProduction) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID);

    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(gtagScript);

    function isApplyClick(target) {
        var href = target.getAttribute('href') || '';
        var text = (target.textContent || '').replace(/\s+/g, ' ').trim();
        return /apply\s*for\s*dropstep/i.test(text) || /^\/start\/?(?:$|[?#])/.test(href);
    }

    function isExampleClick(target) {
        var href = target.getAttribute('href') || '';
        var text = (target.textContent || '').replace(/\s+/g, ' ').trim();
        return /see\s*example/i.test(text) || href === '#live-example';
    }

    function bindEventTracking() {
        document.addEventListener('click', function (event) {
            if (typeof window.gtag !== 'function') return;

            var target = event.target.closest('a, button');
            if (!target) return;

            if (isApplyClick(target)) {
                gtag('event', 'apply_click');
                return;
            }

            if (isExampleClick(target)) {
                gtag('event', 'example_click');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindEventTracking);
    } else {
        bindEventTracking();
    }
})();
