const {empty, withArgs, MyEventEmitter} = require("./eventbox");

empty()

withArgs('Luffy');
console.log('\n=====\n');
withArgs(['Luffy', 'Zoro', 'Usopp', 'Robin', 'Nami', 'Sanji', 'Ch0pper'])



const em =  new MyEventEmitter()

const unsusbcribe = em.on('hello',  () => {
    console.log(`Hello World!`)
})

em.on('hello', function (first, last) {
    console.log(`Hello, ${first} ${last}!`)
})

em.emit('hello')
em.emit('hello', 'Steve', 'Jobs')

//cancel hello
unsusbcribe();

em.emit('hello')
em.emit('unknow')
