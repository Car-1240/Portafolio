

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(catX, catY, 30, 0, Math.PI * 2);
ctx.fill();
for (let i = 0; i < 2; i++) {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(catX - 10 + i * 20, catY - 10, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  const keyboardKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (let i = 0; i < keyboardKeys.length; i++) {
  ctx.fillStyle = "black";
  ctx.fillRect(i * 30, catY + 30, 20, 20);

  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText(keyboardKeys[i], i * 30 + 10, catY + 50);
}
function drawCat() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Cabeza
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(catX, catY, 30, 0, Math.PI * 2);
    ctx.fill();
  
    // Ojos
    for (let i = 0; i < 2; i++) {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(catX - 10 + i * 20, catY - 10, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  
    // Nariz
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(catX, catY + 5, 3, 0, Math.PI * 2);
    ctx.fill();
  
    // Boca
    ctx.beginPath();
    ctx.arc(catX, catY + 10, 10, 0, Math.PI);
    ctx.stroke();
  
    catX += catSpeedX;
    catY += catSpeedY;
  
    if (catX > canvas.width || catX < 0) {
      catSpeedX = -catSpeedX;
    }
    if (catY > canvas.height || catY < 0) {
      catSpeedY = -catSpeedY;
    }
  }