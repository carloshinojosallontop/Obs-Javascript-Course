// Ejercicio 1

interface Person {
  name: string;
  age: number;
  profession: string;
}

const personalInfo = (persona: Person): (string | number)[] => {
  return [persona.name, persona.profession];
};

const newPerson: Person = {
  name: "Lucas",
  age: 28,
  profession: "Full Stack",
};

const arrayResult = personalInfo(newPerson);
console.log(arrayResult);

// Ejercicio 2

function sumOrConcatenate(
  param1: number | string,
  param2: number | string
): number | string {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return `${param1}-${param2}`;
  } else {
    return `${param1}+${param2}`;
  }
}

console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello
console.log(sumOrConcatenate("hello", "world")); //hello-world

// Ejercicio 3

interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined;
}

function startVehicle(vehicle: Car | Motorcycle): void {
  vehicle.turnOnEngine();

  if (isCar(vehicle)) {
    vehicle.pressPedal();
  } else {
    vehicle.openThrottle();
  }
}

// Ejemplo
const auto: Car = {
  tires: 4,
  turnOnEngine() {
    console.log("Auto : Encender motor");
  },
  pressPedal() {
    console.log("Auto: pisar el pedal");
  },
};

const moto: Motorcycle = {
  tires: 2,
  turnOnEngine() {
    console.log("Moto: Encender motor");
  },
  openThrottle() {
    console.log("Moto: Abrir acelerador");
  },
};

startVehicle(auto);

startVehicle(moto);

// Ejercicio 4

function genFunction<T extends string | number>(arr: T[]): T[] {
  return arr.slice(1);
}

//Arrays de prueba
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];

const newStrArray = genFunction(strArray);
const newNumArray = genFunction(numArray);
const newMixedArray = genFunction(mixedArray); 
// const newUnsupportedArray = genFunction(unsupportedArray); --> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
