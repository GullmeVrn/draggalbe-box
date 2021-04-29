const el = document.querySelector('.dragger');

el.addEventListener('mousedown', dragStart);

function dragStart(e) {
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', dragEnd);

    let initialX = e.clientX; 
    let initialY = e.clientY;

    function drag(e) {
        let currentX = initialX - e.clientX;
        let currentY = initialY - e.clientY;

        const rect = el.getBoundingClientRect();
        el.style.left = rect.left - currentX + "px";
        el.style.top = rect.top - currentY + "px";

        initialX = e.clientX;
        initialY = e.clientY;
    }

    function dragEnd() {
        window.removeEventListener('mousemove', drag);
        window.removeEventListener('mouseup', dragEnd);
    }
}