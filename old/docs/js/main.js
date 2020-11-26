$(document).ready(function(){
    $('.slider2').slick({
        autoplay: false,
        infinite: true,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '25%',
        arrows: false,
        //easing: 'linear',
        waitForAnimate: false,
        responsive:[
            {
                breakpoint: 450,
                settings:{
                    centerPadding: '17%',
                },
            }
        
        ]
    });
});

$('.section1__wheel').on('mousemove', (e) => {
    const x = e.pageX/$(window).width();
    const y = e.pageY/$(window).height();

    $('.imag').css(
        'transform',
        'translate(-'+ x*15 +'px,-'+ y*15 + 'px)'
    );
});

$(document).ready(function () {
    setTimeout(function () {
        const
            currentNiceSelect = document.querySelector(".nice-select .current"),
            niceSelect = document.querySelector(".nice-select");

        const
            oldOpen = document.createElement("div"),
            newOpen = document.createElement("div"),
            oldContactItem = document.createElement("div"),
            newContactItem = document.createElement("div"),
            oldMapParent = document.createElement("div"),
            newMapParent = document.createElement("div");

        oldOpen.classList.add("open");
        newOpen.classList.add("open");

        oldContactItem.classList.add("contact__item-text1");
        newContactItem.classList.add("contact__item-text1");

        oldMapParent.classList.add("map");
        newMapParent.classList.add("map");
        oldMapParent.setAttribute("id", "parentMap");
        newMapParent.setAttribute("id", "parentMap");

        oldOpen.innerHTML = `<div class="h1">Hours open 365 days</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Monday - Thursday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 11 pm</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Friday - Saturday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 1 am</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Sunday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 11 pm</div>
\t\t\t\t\t</div><br>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text1">Last Ticket Sold One Hour Prior
\t\t\t\t\t\t\t<br>to Closing</div>
\t\t\t\t\t</div>`;
        newOpen.innerHTML = `
                <div class="h1">Hours open 365 days</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Monday - Thursday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 10 pm</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Friday - Saturday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 10 pm</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Sunday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 10 pm</div>
\t\t\t\t\t</div><br>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text1">Last Ticket Sold One Hour Prior
\t\t\t\t\t\t\t<br>to Closing</div>
\t\t\t\t\t</div>`;

        oldContactItem.innerHTML = `<a title="click to visit map" target="_blank" class="maplink" href="https://goo.gl/maps/tymxCCCDFqL2">St. Augustine, FL 32084</a>`;
        newContactItem.innerHTML = `<a title="click to visit map" target="_blank" class="maplink" href="https://goo.gl/maps/4gJZzS48vH7bPs9s5">100 Saint George street, St. Augustine, Florida</a>`;

        oldMapParent.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55339.4777323848!2d-81.31243406949942!3d29.9012436946953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6825775df7f4f%3A0xc2a183178b276027!2z0KHQtdC50L3Rgi3QntCz0LDRgdGC0ZbQvSwg0KTQu9C-0YDQuNC00LAsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1596016481799!5m2!1suk!2sua" width="100%" height="340" frameborder="0" style="border:0;max-width:100%" allowfullscreen></iframe>`;
        newMapParent.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.9461479293295!2d-81.31547958492514!3d29.894652282588197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e42795ef01c2bd%3A0x8753e82fcf3752db!2zMTAwIFN0IEdlb3JnZSBTdCwgU3QuIEF1Z3VzdGluZSwgRkwgMzIwODQsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1596539385660!5m2!1suk!2sua" width="100%" height="340" frameborder="0" style="border:0;max-width:100%" allowfullscreen></iframe>`;

        niceSelect.onclick = function () {
            const
                parentContact = document.querySelector(".contact"),
                currentItemAddress = document.querySelector(".contact .contact-us .contact__item.address .contact__item-text1"),
                parentElementItemAddress = currentItemAddress.parentNode,
                currentOpen = document.querySelector(".contact .open"),
                parentParentMap = document.querySelector(".cell__line-footer"),
                parentMap = document.querySelector("#parentMap");

            setTimeout(() => {
                if (currentNiceSelect.innerText === "St Augustine") {
                    parentContact.removeChild(currentOpen);
                    parentContact.appendChild(newOpen);

                    parentElementItemAddress.removeChild(currentItemAddress);
                    parentElementItemAddress.appendChild(newContactItem);

                    parentParentMap.removeChild(parentMap);
                    parentParentMap.appendChild(newMapParent);
                } else if (currentNiceSelect.innerText === "Chicago") {
                    parentContact.removeChild(currentOpen);
                    parentContact.appendChild(oldOpen);

                    parentElementItemAddress.removeChild(currentItemAddress);
                    parentElementItemAddress.appendChild(oldContactItem);

                    parentParentMap.removeChild(parentMap);
                    parentParentMap.appendChild(oldMapParent);
                }
            }, 50);
        }
    }, 100);

    $('select').niceSelect();
});
