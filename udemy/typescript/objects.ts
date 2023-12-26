function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

// {x: number, y: number}
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

printName({ first: "Mick", last: "Jagger" });
const singer = { first: "Mick", last: "Jagger", age: 38, isAlive: true };
printName(singer);


type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful

const happyFace:ColorfulCircle = {
    radius:4,
    color: "yellow"
} 


