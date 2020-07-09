interface Person {
    name: string,
    age?: number
}

function printAge(person: Required<Person>) {
    return `${person.name} is ${person.age}`;
}

const person: Person = {
    name: 'Oliver',
};

const age = printAge({age: 10, ...person});
