

const navTriggerBtn = document.querySelector("#nav-trigger-btn");
const naVmenu = document.querySelector("#nav_menu");

//evento
navTriggerBtn.addEventListener("click", () => {
    naVmenu.classList.toggle("nav-is-open");
});

const navLinks = naVmenu.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
        naVmenu.classList.remove("nav-is-open");
    });
});


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
})

//scroll reveal animation

const sr = ScrollReveal({
    distance: '60px',
    origin: 'bottom',
    duration: 2000,
    delay: 200,
    reset: false,
});

//hero — texto e foto (foto é background do #hero)
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('#hero', { origin: 'right', distance: '80px', delay: 150 });

// steps
sr.reveal('.steps__step', { distance: '100px', interval: 100 });

// about (intro) — image is left, text is right, so invert origins
sr.reveal('.about__img', { origin: 'left', delay: 200 });
sr.reveal('.about__text', { origin: 'right', delay: 400 });

// video feature — same animation as about (image/video from left, text from right)
sr.reveal('#video-feature .relative', { origin: 'left', delay: 200 });
sr.reveal('#video-feature .text-left', { origin: 'right', delay: 400 });

// animate video/photo sliders
// Removed reveals for selectors not present in markup: videos_slider, photos_slider
sr.reveal('.extra_slider', { origin: 'bottom', distance: '60px', delay: 200 });


//brands
sr.reveal('.brands__img', { delay: 600, distance: '100px', interval: 100 });

//work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', { delay: 800 });
sr.reveal('.work__grid', { delay: 1000 });

//status

sr.reveal('.stats');
sr.reveal('.stats__item', {
    distance: '100px',
    interval: 100
});

//news
sr.reveal('.news__title');
sr.reveal('.news__subtitle', { delay: 800 });

// contato — match the class used in HTML (`contact_container`)
sr.reveal('.contact_container');
sr.reveal('.contact__text', { delay: 800 });

// footer

sr.reveal('.footer__item', {
    distance: '100px',
    interval: 100,
});
sr.reveal('.footer__copyright');


// Video feature play overlay — safe multi-instance handler
document.querySelectorAll('.site-video').forEach((video) => {
    const container = video.parentElement;
    const playBtn = container ? container.querySelector('.site-video-play-btn') : null;
    if (!playBtn) return;

    // play button behavior
    playBtn.addEventListener('click', () => {
        try {
            video.play();
            video.setAttribute('controls', '');
            playBtn.style.display = 'none';
            video.focus();
        } catch (err) {
            console.warn('Erro ao reproduzir vídeo:', err);
        }
    });

    // when video ends: show overlay again and reset
    video.addEventListener('ended', () => {
        playBtn.style.display = '';
        video.removeAttribute('controls');
        try { video.currentTime = 0; } catch (e) {}
    });

    // click on video toggles play/pause and overlay
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.style.display = 'none';
            video.setAttribute('controls', '');
        } else {
            video.pause();
            playBtn.style.display = '';
        }
    });
});


// FAQ accordion: closed by default, open one at a time
(function () {
    const btns = document.querySelectorAll('.faq-btn');
    if (!btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const icon = btn.querySelector('.faq-icon');
            const isOpen = item.classList.contains('open');

            // close others
            document.querySelectorAll('.faq-item.open').forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                    const c = i.querySelector('.faq-content');
                    if (c) c.style.maxHeight = null;
                    const ic = i.querySelector('.faq-icon');
                    if (ic) ic.style.transform = 'rotate(0deg)';
                }
            });

            if (!isOpen) {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            } else {
                item.classList.remove('open');
                content.style.maxHeight = null;
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        });

        // keyboard accessibility
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
})();

