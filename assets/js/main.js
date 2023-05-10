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
// let areaCv = document.getElementById('area-cv');

// let resumeButton = document.getElementById('resume-button2');

// // Html2pdf options
// let opt = {
//     margin: 1,
//     filename: 'Pilszak_Klaudia-resume.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 4 },
//     jsPDF: { format: 'a4', orientation: 'portrait' },
//     pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
// };

// // Function to call areaCv and Html2Pdf options 
// function generateResume() {
//     html2pdf(areaCv, opt);
// }
    
// // When the button is clicked, it executes the three functions
// resumeButton.addEventListener('click', () => {
//     // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
//     scaleCv();

//     // 2. The PDF is generated
//     generateResume();

//     // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
//     setTimeout(removeScale, 5000);
// })


// document.getElementById('resume-button2').addEventListener('click', async () => {
//     // Fetch your resume content from the website (replace with your URL)
//     // const resumeURL = 'https://kpilszak.github.io/cv/';
//     // const response = await fetch(resumeURL);
//     const resumeHTML = document.getElementById('area-cv').innerHTML;

//     // Create a new PDF document
//     const { PDFDocument, rgb } = PDFLib;
//     const pdfDoc = await PDFDocument.create();

//     // Embed the HTML content as a new page in the PDF
//     const page = pdfDoc.addPage([600, 800]);
//     page.drawText('Resume', {
//         x: 50,
//         y: 750,
//         size: 30,
//         color: rgb(0, 0, 0),
//     });
//     page.drawText(resumeHTML, {
//         x: 50,
//         y: 700,
//         size: 12,
//         color: rgb(0, 0, 0),
//     });

//     // Serialize the PDF to bytes
//     const pdfBytes = await pdfDoc.save();

//     // Create a blob from the PDF bytes
//     const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

//     // Create a download link for the PDF
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(pdfBlob);
//     downloadLink.download = 'resume.pdf';

//     // Trigger the download
//     downloadLink.click();
// });

function beforePrintFunction() {
    // scaleCv();
}

// Attach the beforePrintFunction to the beforeprint event
if (window.matchMedia) {
    window.matchMedia('print').addListener(function (media) {
        if (media.matches) {
            beforePrintFunction();
        }
    });
} else {
    window.onbeforeprint = beforePrintFunction;
}
