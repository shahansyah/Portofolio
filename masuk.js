// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // 'header' bukan 'hedar'

window.onscroll = () => {
    sections.forEach(sec => { // 'sections' bukan 'section'
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(link => { // 'link' bukan 'links' untuk konsistensi
                link.classList.remove('active');
            });
            // Perbaikan selector dan tambahan pengecekan
            let targetLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

    // Sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};