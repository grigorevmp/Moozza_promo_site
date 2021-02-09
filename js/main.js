
var initVkMeLanding = function() {
    init();

    function init() {
        initParallax();

    }

    function initParallax() {
        if (document.body.classList.contains('is_browser_safari')) {
            return;
        }
        const elem1 = document.querySelector('.phone--ios');
        const elem2 = document.querySelector('.phone--android');

        window.addEventListener('resize', checkEffect);
        checkEffect();

        function checkEffect() {
            const w = document.body.clientWidth;

            if (w > 940) {
                window.addEventListener('scroll', effectHandler);
                effectHandler();
            } else {
                window.removeEventListener('scroll', effectHandler);
            }
        }

        function effectHandler(e) {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
            const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
            const koef = -1 * scrollTop / (scrollHeight - clientHeight) + 0.5;

            document.documentElement.style.setProperty('--koef', koef);
        }
    }

};