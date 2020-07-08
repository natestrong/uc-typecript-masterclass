const person = {
    name: 'Oliver',
    age: 3
};

type Person = typeof person;

const anotherPerson: Person = {
    name: 'Maxwell',
    age: 101
};
