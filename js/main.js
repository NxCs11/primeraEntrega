let contador = 0

const chequearRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = prompt(pregunta).toLowerCase();

    if (respuesta === respuestaCorrecta) {
        alert("¡Respuesta correcta, sumás 1 punto!");
        contador++
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es ${(respuestaCorrecta).toUpperCase()}.`);
    }
};


for (let i = 0; i <= 5; i++) {
    let pregunta;
    let respuestaCorrecta;
    switch (i) {
        case 1:
            pregunta = "¿Cuál es la capital de Suiza?";
            respuestaCorrecta = "berna";
            chequearRespuesta(respuestaCorrecta, pregunta);
            break;
        case 2:
            pregunta = "¿Cuál es la capital de Japón?";
            respuestaCorrecta = "tokio";
            chequearRespuesta(respuestaCorrecta, pregunta);
            break;
        case 3:
            pregunta = "¿Cuál es la capital de Nigeria?";
            respuestaCorrecta = "abuya";
            chequearRespuesta(respuestaCorrecta, pregunta);
            break;
        case 4:
            pregunta = "¿Cuál es la capital de Nicaragua?";
            respuestaCorrecta = "managua";
            chequearRespuesta(respuestaCorrecta, pregunta);
            break;
        case 5:
            alert(`¡Fin del juego! Tu puntaje final es de: ${contador}`);
            break
        default:
            alert("Trivia de capitales del mundo");
            break;
    }
}

