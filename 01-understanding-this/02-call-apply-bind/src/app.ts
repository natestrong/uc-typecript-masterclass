// Object literal
const myObj = {
    myMethod() {
        console.log('Object', this)
    }
}

// Function
function myFunction(...text: string[]) {
    console.log('Function', this, text);
}

myFunction('abc')
myFunction.call(myObj, 'abc', 'def')

// apply
myFunction.apply(myObj, ['abc', 'def'])

// bind
const bindFunction = myFunction.bind(myObj, 'ABC')
bindFunction()
bindFunction('123')
