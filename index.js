class ITStaff {
    //Fields (experimental)
    name = "Still pending";

    constructor(name, age="Unkown", team="Digital Experience") {
        this.name = name;
        this.age = age;
        this.team = team;
    }

    describe() {
        return `${this.name} aged: ${this.age} from the ${this.team} team.`;
    }
}

class Developer extends ITStaff {
    
    constructor(name, age, team, project="DV3") {
        super(name, age, team);
        this.project = project;
    }

    code() {
        return `Developer ${this.name} is happily coding :)`;
    }

    // Will this override ITStaff's own describe method??
    describe() {
        return `From developer describe()...`;
    }
}

const seniorDeveloper = new Developer("Joey", 45, "Digital Experience", "CRM");
console.log(seniorDeveloper.describe());
console.log(seniorDeveloper.code());

// Testers don't code, they just make your life harder
// And they don't have friends
const staffTester = new ITStaff("Lili", 32, "Digital Experience");
console.log(staffTester.describe());
console.log(staffTester.code()); // Error, this doesn't work. We'll see in polymorphism
