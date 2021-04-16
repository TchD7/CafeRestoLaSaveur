/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

function sendWa() {
    var msgInput = document.getElementById("msgInput").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput}`);
}

function sendWa1() {
    var msgInput1 = document.getElementById("msgInput1").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput1}`);
}

function sendWa2() {
    var msgInput2 = document.getElementById("msgInput2").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput2}`);
}

function sendWa3() {
    var msgInput3 = document.getElementById("msgInput3").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput3}`);
}

function sendWa4() {
    var msgInput4 = document.getElementById("msgInput4").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput4}`);
}

function sendWa5() {
    var msgInput5 = document.getElementById("msgInput5").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput5}`);
}

function sendWa6() {
    var msgInput6 = document.getElementById("msgInput6").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput6}`);
}

function sendWa7() {
    var msgInput7 = document.getElementById("msgInput7").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput7}`);
}

function sendWa8() {
    var msgInput8 = document.getElementById("msgInput8").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput8}`);
}

function sendWa9() {
    var msgInput9 = document.getElementById("msgInput9").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput9}`);
}

function sendWa10() {
    var msgInput10 = document.getElementById("msgInput10").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput10}`);
}

function sendWa11() {
    var msgInput11 = document.getElementById("msgInput11").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput11}`);
}

function sendWa12() {
    var msgInput12 = document.getElementById("msgInput12").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput12}`);
}

function sendWa13() {
    var msgInput13 = document.getElementById("msgInput13").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput13}`);
}

function sendWa14() {
    var msgInput14 = document.getElementById("msgInput14").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput14}`);
}

function sendWa15() {
    var msgInput15 = document.getElementById("msgInput15").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput15}`);
}

function sendWa0() {
    var msgInput0 = document.getElementById("msgInput0").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput0}`);
}

function sendWa01() {
    var msgInput01 = document.getElementById("msgInput01").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput01}`);
}

function sendWa02() {
    var msgInput02 = document.getElementById("msgInput02").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput02}`);
}

function sendWa21() {
    var msgInput21 = document.getElementById("msgInput21").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput21}`);
}

function sendWa20() {
    var msgInput20 = document.getElementById("msgInput20").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput20}`);
}

function sendWa19() {
    var msgInput19 = document.getElementById("msgInput19").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput19}`);
}

function sendWa18() {
    var msgInput18 = document.getElementById("msgInput18").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput18}`);
}

function sendWa17() {
    var msgInput17 = document.getElementById("msgInput17").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput17}`);
}

function sendWa16() {
    var msgInput16 = document.getElementById("msgInput16").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput16}`);
}

function sendWa24() {
    var msgInput24 = document.getElementById("msgInput24").value;
    var tonNumero = "22891786750";
    window.open(`https://wa.me/${tonNumero}?text=${msgInput24}`);
}

/*===========================envoie de mail=========*/
function sendmail() {
    var nom = $('#nom').val();
    var email = $('#mail').val();
    var number = $('#number').val();
    var message = $('#message').val();
    // var body = $('#body').val();
    var Body = 'mail: ' + email + '<br> nom: ' + nom + '<br> number: ' + number + '<br>message: ' + message;
    Email.send({
        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'Caferestolasaveur@gmail.com',
        From: "Caferestolasaveur@gmail.com",
        Subject: "Nouveau message depuis le siteweb de la Saveur",
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Votre message a été envoyer avec succes.');
            } else {
                console.error(message);
                alert('Erreur veillez ressayer. ')

            }

        }
    );
}

/*sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
        interval: 200
    })
    /*==============================acordeon==========*/