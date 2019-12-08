const EventEmitter = require('events').EventEmitter;

//ex 01
function empty()
{
    const test = new EventEmitter;
    test.on('hi', () => {
        console.log('Ch0ooooooper!');
    });
    test.emit('hi');
}

//ex 02
function withArgs(data) {
    const test2 = new EventEmitter();
    test2.on('newFellow', (args) => {
        if (typeof args === 'string')
        {
            console.log(`Here's comes a news challengers ${args}`);
        }
        else if (Array.isArray(args))
        {
            for (const name of args)
            {
                console.log(`Here's comes a news challengers ${name}`);
            }
        }
        else
        {
            console.log(`Sorry type ${typeof args} not implemented`);
        }

    });
    test2.emit('newFellow', data);
}

//ex 03
class MyEventEmitter{
    constructor(){
        this.events = {}
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)

        return () =>{
            this.events[eventName] = undefined
        }
    }
    emit(eventName, ...data){
        const arrCallback = this.events[eventName];

        if (arrCallback !== undefined){
            arrCallback.forEach(callback =>
            {
               if(callback.length === data.length)
               {
                   callback(...data)
               }
           })
        }
    }
}

module.exports =
    {
        empty,
        withArgs,
        MyEventEmitter
    }