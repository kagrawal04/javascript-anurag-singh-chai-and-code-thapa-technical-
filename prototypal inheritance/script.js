class User{

    constructor(fName, lName, age){
        this.fName = fName
        this.lName = lName
        this.age = age
    }

    get FullName(){
            return `${this.fName} ${this.lName} ${'-'} ${this.age}`
        }
    set FullName(value){
        const splitted = value.split(' ');
        this.fName = splitted[0];
        this.lName = splitted[1];
    }
    
    
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    
}

const user1 = new User('kaushal' , 'agrawal', 126)
const user2 = new User('akanksha' , 'dubey' , 25)


class Student extends User{
    constructor(fName, lName, age, standard){
        super(fName, lName, age)
        this.standard = standard
    }
}
const student1 = new Student('Kaushal' , 'Agrawal', '24', 'B.E.')
const student2 = new Student('Akanksha' , 'Dubey', '24', 'BAMS')


class Employee extends User{
    constructor(fName, lName, age, company){
        super(fName, lName, age)
        this.company = company
    }
}
const employee1 = new Employee('KAUSHAL' , 'AGRAWAL', 25, 'Texcon')
const employee2 = new Employee('AKANKSHA' , 'DUBEY' , 25 , 'Texcon')