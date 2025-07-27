//Ex1

const moveRight = function () {
    const ball = document.getElementById("ball");

    let currentLeft = parseInt(ball.style.left) || 0;
    currentLeft += 15;
    ball.style.left = currentLeft + "px";

}
const moveLeft = function () {
    const ball = document.getElementById("ball");
    let currentLeft = parseInt(ball.style.left) || 0;
    currentLeft -= 15;
    ball.style.left = currentLeft + "px";
};

const moveUp = function () {
    const ball = document.getElementById("ball");
    let currentTop = parseInt(ball.style.top) || 0;
    currentTop -= 15;
    ball.style.top = currentTop + "px";
};

const moveDown = function () {
    const ball = document.getElementById("ball");
    let currentTop = parseInt(ball.style.top) || 0;
    currentTop += 15;
    ball.style.top = currentTop + "px";
};

// Event listeners for arrows
document.getElementById("right").addEventListener("click", moveRight);
document.getElementById("left").addEventListener("click", moveLeft);
document.getElementById("up").addEventListener("click", moveUp);
document.getElementById("down").addEventListener("click", moveDown);

// Extension 3: Keyboard support
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
    }
});