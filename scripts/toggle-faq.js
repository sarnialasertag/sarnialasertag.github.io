function toggleVisibility(sectionId, header) {
    var content = document.getElementById(sectionId);
    var arrow = document.getElementById('arrow-' + sectionId);
    var allContents = document.querySelectorAll('.faqcontent');
    var allArrows = document.querySelectorAll('faqbx');

    allContents.forEach(function(otherContent) {
        if (otherContent !== content) {
            otherContent.style.display = 'none';
        }
    });

    allArrows.forEach(function(otherArrow) {
        if (otherArrow !== arrow) {
            otherArrow.className = 'faqbx bx bx-down-arrow-circle';
        }
    });

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.className = 'faqbx bx bx-up-arrow-circle';
    } else {
        content.style.display = 'none';
        arrow.className = 'faqbx bx bx-down-arrow-circle';
    }
}
