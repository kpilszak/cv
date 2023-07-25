/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function listAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', listAction));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY; 
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 
function scaleCv() {
    document.body.classList.add('scale-cv');
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 
function removeScale() {
    document.body.classList.remove('scale-cv');
}

/*==================== GENERATE PDF ====================*/ 
// PDF generated area
let areaCv = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');

// Html2pdf options
let opt = {
    margin: 1,
    filename: 'Pilszak_Klaudia-resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
};

// Function to call areaCv and Html2Pdf options 
function generateResume() {
    html2pdf(areaCv, opt);
}

// script.js
function generatePDF() {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
}
    
// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    // generatePDF();
    scaleCv();

    // 2. The PDF is generated
    generateResume();
    // generatePDF();

    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
    setTimeout(removeScale, 5000);
})
