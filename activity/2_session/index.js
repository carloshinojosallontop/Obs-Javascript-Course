// Ejercicio 1

const getProps = (obj) => {
  return Object.keys(obj);
};

let person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
};

console.log(getProps(person)); // output: ['name', 'age', 'profession']

// Ejercicio 2

// Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

// 1. En modo no estricto, apunta al objeto global y por lo tanto el valor de this es igual window

function greeting() {
  console.log(this); //  Window {...}
}
greeting();

// 2. Cuando llamas a la funcion del objeto, this viene a ser el objeto

const user = {
  nombre: "Carlos",
  greet() {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
};
user.greet(); // output:  "Hola, me llamo Carlos"

// 3. En una función constructora invocada con new,
//    this hace referencia al nuevo objeto que se crea,
//    permitiéndote inicializar sus propiedades.

function Product(name) {
  this.name = name;
  console.log(this);
}
const product1 = new Product("Celular apple");
// output: { name: "Celular apple" }

// 4.  Con call o apply, fuerzas a que this sea el primer argumento que pases.

function presentar(saludo, edad) {
  console.log(`${saludo}, soy ${this.nombre} tengo ${edad} años`);
}

const persona = { nombre: "Carlos" };

// 4.1 Usando call:
presentar.call(persona, "Hola", 38);
// output: "¡Hola, soy Carlos tengo 38 años"

// 4.2 Usando apply:
presentar.apply(persona, ["Buenos días", 38]);
// output: "Buenos días, soy Carlos tengo 38 años"

// 4.3 Usando bind:
const presentarACarlos = presentar.bind(persona, "¿Qué tal", 38);
presentarACarlos();
// output: "¿Qué tal, soy Carlos tengo 38 años"

//5. Las arrow functions no tienen su propio this; heredan el this del contexto
// léxico exterior donde se definieron

const usuario = {
  nombre: "Carlos",
  saludar: function () {
    const flecha = () => {
      console.log(`Hola, soy ${this.nombre}`);
    };
    flecha(); // output:"Hola, soy Carlos"
  },
};

usuario.saludar();

// Enumera las diferencias entre arrow functions y function expressions.

// 1. Sintaxis
// - Arrow: más corta, devuelve implícitamente si es una sola expresión.
// - Función expresada: requiere function, llaves y return.

// 2. Contexto de this
// - Arrow: hereda léxicamente el this del entorno.
// - Función expresada: this cambia según cómo se invoque.

// 3. Objeto arguments
// - Arrow: no tiene; usar parámetros rest (...args).
// - Función expresada: dispone de su propio arguments.

// 4. Uso con new
// - Arrow: no puede ser constructor (error con new).
// - Función expresada: puede usarse como constructor.

// 5. Propiedad prototype
// - Arrow: no tiene prototype.
// - Función expresada: sí, útil para herencia

// 6. Rebind de this
// - Arrow: no permite cambiar this con call/apply/bind.
// - Función expresada: sí permite rebinding.

// Ejercicio 3

class InvertirCadena {
  constructor() {
    this.cadenaInvertir = "";
  }

  imprimirInvertida() {
    if (this.cadenaInvertir === "") {
      throw new Error("La cadena está vacía");
    }

    console.log(this.cadenaInvertir.split("").reverse().join(""));
  }
}

const invertirCadena = new InvertirCadena();
invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.imprimirInvertida(); //odnum aloH

InvertirCadena.prototype.nuevoMetodo = function () {
  console.log("Este es el nuevo metodo");
};
invertirCadena.nuevoMetodo(); // output: Este es el nuevo metodo

// Ejercicio 4

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("User logged in");
    } else {
      alert("User or password incorrect");
    }
  }
}

// const userLogin = new Login("admin", "passwd");
// userLogin.login();   //  "User logged in"

// Ejercicio 5

document.addEventListener("DOMContentLoaded", () => {
  const btnSuccess = document.getElementById("loginSuccess");
  const btnFailure = document.getElementById("loginFailure");

  // Success
  btnSuccess.addEventListener("click", () => {
    const login = new Login("admin", "passwd");
    login.login();
  });

  // Failure
  btnFailure.addEventListener("click", () => {
    const loginIncorrect = new Login("carlos", "1234");
    loginIncorrect.login();
  });
});

// Ejercicio 6

// Función que devuelve una promesa
let loginWithUsername = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        reject("Error: invalid username or password");
      }
    }, 200);
  });
};

// Selecccion de elementos en el DOM
const btnSuccessAsync = document.getElementById("loginSuccessAsync");
const btnFailureAsync = document.getElementById("loginFailureAsync");


// Listener para Login Exitoso
btnSuccessAsync.addEventListener("click", async () => {
  try {
    const mensaje = await loginWithUsername("admin", "passwd");
    alert(mensaje);
  } catch (error) {
    alert(error);
  }
});

// Listener para Login Fallido
btnFailureAsync.addEventListener("click", async () => {
  try {
    const mensaje = await loginWithUsername("carlos", "1234");
    alert(mensaje);
  } catch (error) {
    alert(error);
  }
});


