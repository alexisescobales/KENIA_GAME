let car = document.getElementById("mycar"); //Recojemos el div
let carX = 0;
let carY = 760;

let cont = 0;
let gameStarted = false; //Juego no empezado

document.getElementById("start").addEventListener("click", function () {
    if (!gameStarted) { //Si el juego es false...
        document.getElementById("start").style.display = 'none'; //Hace desaparecer el boton
        document.getElementById("road").style.animation = 'roadanimation 20s linear infinite'; //Empieza la animacion
        gameStarted = true; //Cambiamos su valor a true para indicar que empezo el juego

        // Actualizar la puntuación
        setInterval(() => {
            document.getElementById("score").innerText = `Score : ${cont}`;
            cont = cont + 1;
        }, 100);
    }
});

document.addEventListener("keydown", function (event) {
    if (gameStarted) {
        const road = document.getElementById("road");
        const roadWidth = road.clientWidth;

        if (event.key === "a" || event.key === "A") {
            carX -= 10; // Mover el coche hacia la izquierda
        } else if (event.key === "d" || event.key === "D") {
            carX += 10; // Mover el coche hacia la derecha
        } else if (event.key === "w" || event.key === "W") {
            carY -= 10; // Mover el coche hacia arriba
        } else if (event.key === "s" || event.key === "S") {
            carY += 10; // Mover el coche hacia abajo
        }
        // Actualizar la posición del coche
        car.style.left = carX + "px";
        car.style.top = carY + "px";
    }
});
