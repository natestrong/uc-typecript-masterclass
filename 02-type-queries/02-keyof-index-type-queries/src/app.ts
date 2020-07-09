const person = {
    name: 'Oliver',
    age: 3
};

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys]

const anotherPerson: Person = {
    name: 'Maxwell',
    age: 101
};
