const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawSmiley(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja una carita feliz (puedes personalizar esto)
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2, false); // Cabeza
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x - 15, y - 10, 10, 0, Math.PI, false); // Ojo izquierdo
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 15, y - 10, 10, 0, Math.PI, false); // Ojo derecho
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI, false); // Boca
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

let x = 100; // Ajusta la posición inicial en el eje X
let y = 500; // Ajusta la posición vertical para que aparezca debajo del div
let dx = 2;
let dy = -3; // Invertimos la dirección para que rebote hacia arriba

function animate() {
    x += dx;
    y += dy;

    if (x + 40 > canvas.width || x - 40 < 0) {
        dx = -dx;
    }
    if (y - 40 < 0) {
        dy = -dy;
    }

    drawSmiley(x, y);

    requestAnimationFrame(animate);
}

animate();
