// Ejercicio 1
import "./aboutme.js";

console.log("Ejercicio 1");

// Ejercicio 2

/*
 * Se ejecuta primero el fichero aboutme.js, porque el import dentro de index.js
 * es hoisted y garantiza que cuando llegue el turno de ejecutar el código,
 * ya estén disponibles todas las exportaciones del módulo importado.
 */

// Ejercicio 3

console.log("Ejercicio 3");
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// Ejercicio 4

for (var i = 0; i < 101; i++) {
  // Solución
}
console.log(i);

/*
 * Al finalizar el bucle, la variable i valdrá 101, porque el console.log esta fuera del bloque for, 
 * y var a diferencia de let tiene un scope global lo que permite que el bucle se siga ejecutando hasta 
 * que i valga 101 . así seria el proceso:

 * El bucle for(var i = 0; i < 101; i++) itera desde 0 hasta 100 inclusive, y al terminar 
 * la última vuelta hace i++ dejándola en 101; como var no tiene alcance de bloque, la variable 
 * persiste fuera del bucle, de modo que un console.log(i) colocado después del for mostrará 101.
 */

// Ejercicio 5

/*
 * Los scripts clásicos se descargan y ejecutan inmediatamente en el punto donde aparecen bloqueando el parseo del HTML,
 * corriendo en modo no estricto y vertiendo sus declaraciones de nivel superior en el objeto global (por ejemplo: window)
 * y no admiten import/export. En cambio, los módulos (<script type="module">) se cargan en paralelo al parseo y se ejecutan
 * de forma diferida (como si tuvieran defer por defecto), siempre en modo estricto, mantienen un scope de módulo separado
 * (sus variables top-level no contaminan el global) y soportan nativamente las declaraciones import/export
 */

// Ejercicio 6

const formatter = {
  prefix: "Hello ",
  append(text) {
    console.log(this.prefix + text);
  },
};

formatter.append("World"); // Hellow World

const prot = {
  toLowerString(text) {
    console.log(text.toLowerCase());
  }
};

Object.setPrototypeOf(formatter, prot);

formatter.toLowerString("I’m Carlos"); // i'm carlos