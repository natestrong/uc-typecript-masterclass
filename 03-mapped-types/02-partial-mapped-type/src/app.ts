interface Person {
    name: string,
    age: number
}

function updateObj<T>(obj: T, prop: Partial<T>) {
    return {...obj, ...prop}
}

const person: Person = {
    name: 'Oliver',
    age: 100
};

updateObj(person, {name: 'Maxwell'});
