class MyClass {
    myMethod() {
        console.log('1', this)
        const foo =  123
        setTimeout(() => {
            console.log('2', this)
        })
    }
}

const myInstance = new MyClass()
myInstance.myMethod()
