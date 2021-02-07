function generateBarCode(str)
{
    const url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + str + '&amp;size=50x50';
    $('#barcode').attr('src', url);
    document.getElementById("barcode").style.display = "block";
    // Get the modal
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

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