const person = {
    name: 'Oliver',
    age: 3
};

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys]

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
    name: 'Maxwell',
    age: 101
};
