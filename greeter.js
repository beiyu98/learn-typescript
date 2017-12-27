var Student = /** @class */ (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + ' ' + middlename + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.firstname + " " + person.lastname;
}
// let user = 'Jane User';
// let user = [1,2,3];
var user = { firstname: 'zhang', lastname: 'shuai' };
var user2 = new Student('Jane', 'M', 'User');
// document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(user2);
