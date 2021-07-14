const cursor = document.querySelector(".cursor");

function moveMouse(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(x, y)`
}