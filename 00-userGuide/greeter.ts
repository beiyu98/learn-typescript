class Student{
    fullname:string;
    constructor(public firstname,public middlename,public lastname){
        this.fullname = firstname+' '+middlename+" "+lastname;
    }
}

interface Person{
    firstname:string;
    lastname:string;
}

function greeter(person:Person) {
    return `hello, ${person.firstname} ${person.lastname}`;
}

// let user = 'Jane User';
// let user = [1,2,3];
let user ={firstname:'zhang',lastname:'shuai'};

let user2 = new Student('Jane','M','User');

// document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(user2);