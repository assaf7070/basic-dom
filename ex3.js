const container = document.getElementById("container");
const message = document.getElementById("message");

const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

const boxes = []

for (let i = 0; i < 10; i++) {
  const box = document.createElement("div")
  box.classList.add("box")

  box.addEventListener("mouseenter", function () {
    const color = getRandomColor()
    box.style.backgroundColor = color

    // Extension 2: check if all boxes are the same color
    const allSame = boxes.every(b => b.style.backgroundColor === color)
    message.textContent = allSame ? "Nice job!" : ""
  })

  container.appendChild(box)
  boxes.push(box)
}
