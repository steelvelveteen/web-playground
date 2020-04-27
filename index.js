document.addEventListener('DOMContentLoaded', () => {
    // console.log('Hello Webpack Playground');

});

// Bind, call and apply, ES5 only
var john = {
    name: 'Joey',
    age: 45,
    job: 'developer',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + '.');
        } else if(style === 'friendly') {
            console.log('Hey, what\'s up! I\'m ' + this.name + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'Designer'
};

john.presentation('formal', 'morning');

// We want to use the presentation method of john's
// object for the emily object, how do we do that?
//We use the call method

// Call method
// Call method always takes as a first parameter the object to be the 'this.name' in
// the presentation methods
john.presentation.call(emily, 'friendly', 'afternoon');
// This is called method borrowing, we borrowed john's 
// presentation method to use it with emily.

// Apply method
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// Bind method. Doesn't call the method, just binds it to be called later
var johnFriendly = john.presentation.bind(john, 'formal');
johnFriendly('night');