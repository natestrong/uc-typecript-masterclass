interface Person {
    name: string,
    age: number
}

/**
 * Make all properties in object readonly
 */
function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj)
}

const person: Person = {
    name: 'Oliver',
    age: 100
};

const frozenPerson = freeze(person);
