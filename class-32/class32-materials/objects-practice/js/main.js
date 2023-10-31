// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

// Encapsulation
    // Classes are lexically scoped away from each other
    // Methods and properties have been fused into one location. If we want to update Contractor, Engineer, etc, we know where to go, without messing with parent classes.
// Abstraction
    // Classes do only exactly what is necessary and unique to that class
// Inheritance
    // subclasses are inheriting the methods and properties of parent classes if they don't have them themselves
// Polymorphism 
    // subclasses can overwrite functions of parent classes, if necessary


class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }

    introduceSelf() {
        console.log(`Hello! My name is ${this._name}. I am a ${this._role} at 100devs.`)
    }

}

class Engineer extends Contractor {
    constructor(name, role, techStack) {
        super(name, role)
        this._techStack = techStack
    }

    get techStack() {
        return this._techStack
    }

    introduceSelf() {
        console.log(`Hello! My name is ${this._name}. I am a ${this._role} at 100devs. I primarily work with ${this._techStack}`)
    }
}


// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }

// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }

// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }

// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
