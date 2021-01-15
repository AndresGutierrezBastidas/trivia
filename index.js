const test = document.getElementById("test")
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
    {
        pregunta : "1. ¿Qué hecho histórico se conmemora el 18 de septiembre?",
        respuestas :{
            a: "primera junta de gobierno",
            b: "independencia de chile",
            c: "la formacion de la milicia chilena"
        },
        respuestaCorrecta :"a",
        },
        {
        pregunta : "2. ¿Quién fue el primer Presidente de la República de Chile?",
        respuestas :{
            a: "Manuel Blanco Encalada",
            b: "Domingo Santa María",
            c: "Manuel Bulnes",
            d: "Richard Nixon"
        },
        respuestaCorrecta :"a",
        },
        {
        pregunta : "3. ¿En qué lugar murió Bernardo O’Higgins?",
        respuestas :{
            a: "Santiago",
            b: "Lima",
            c: "Arica"
        },
        respuestaCorrecta :"b",
        },
        {
        pregunta : "4. ¿Quién escribió el himno chileno?",
        respuestas :{
            a: "Baldomero Lillo",
            b: "Ramón Carnicer y Batlle",
            c: "Eusebio Lillo"
        },
        respuestaCorrecta :"c",
        },
        {
        pregunta : "5. ¿Cuáles eran los colores de la primera bandera chilena?",
        respuestas :{
            a: "Rojo, Azul, Blanca",
            b: "Azul, blanca, amarilla",
            c: "Rojo, Amarilla,Azul"
        },
        respuestaCorrecta :"b",
        },
        {
        pregunta : "6. ¿Cuál es el río más largo de Chile?",
        respuestas :{
            a: "Río Loa",
            b: "Río Biobio",
            c: "Río Amazonas"
        },
        respuestaCorrecta :"a",
        },
        {
        pregunta : "7. ¿Cuál es la montaña más alta de Chile?",
        respuestas :{
            a: "La cordillera de los Andes",
            b: "tres cruces sur",
            c: "Nevados Ojos del Salado"
        },
        respuestaCorrecta :"c",
        },
];

function mostrarTest() {
    const preguntasYrespuestas = [];
  
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const respuestas = [];
  
      for (letraRespuesta in preguntaActual.respuestas) {
        respuestas.push(
          `<label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`
        );
      }
  
      preguntasYrespuestas.push(
        `<div class="cuestion">${preguntaActual.pregunta}</div>
            <div class="respuestas"> ${respuestas.join("")} </div>
            `
      );
    });
  
    test.innerHTML = preguntasYrespuestas.join("");
  }
  
  mostrarTest();

  
function mostrarResultado() {
    const respuestas = test.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
  
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const todasLasRespuestas = respuestas[numeroDePregunta];
      const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
      const respuestaElegida = (
        todasLasRespuestas.querySelector(checkboxRespuestas) || {}
      ).value;
  
      if (respuestaElegida === preguntaActual.respuestaCorrecta) {
        respuestasCorrectas++;
  
        respuestas[numeroDePregunta].style.color = "blue";
      } else {
        respuestas[numeroDePregunta].style.color = "red";
      }
    });
  
    resultadoTest.innerHTML =
      "Usted ha acertado " +
      respuestasCorrectas +
      " preguntas de un total de " +
      preguntas.length;
  }
  
  botonRes.addEventListener("click", mostrarResultado);

