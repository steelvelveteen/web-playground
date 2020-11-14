class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic animal sound');
    }
}

class Lion extends Animal {
    constructor(name, kingdom) {
        super(name);
        this.kingdom = kingdom;
    }

    makeSound() {
        console.log("Roooaaargghg");
    }

    makeSoundFromParent() {
        super.makeSound();
    }
}

const genericAnimal = new Animal("Generica animal");
genericAnimal.makeSound();
const savanahLion = new Lion("Mufassa");
savanahLion.makeSound(); // Calls its own makeSound method

// How to call its parent's makeSound method??
savanahLion.makeSoundFromParent();

