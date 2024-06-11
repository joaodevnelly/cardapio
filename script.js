function toggleList(sectionId) {
    var section = document.getElementById(sectionId);
    var list = section.querySelector('.options-list');
    var arrow = section.querySelector('.arrow');
    list.classList.toggle('hidden');
    arrow.classList.toggle('hidden');
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}