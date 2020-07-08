// Function
function myFunction(text: string, text2: string = '') {
    console.log('Function', this, text, text2);
}

// Object literal
const myObj = {
    myMethod() {
        console.log('Object', this)
    }
}
// myObj.myMethod()

myFunction('abc')
myFunction.call(myObj, 'abc', 'def')
myFunction.call([])
