class EmpPayrollData {
    id;
    salary;
    gender;
    startDate;


//Constructor
constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

    get name() { return this._name };
    set name(name) {
        this._name = name;
    }

    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary;
    }
}

let empPayrollData = new EmpPayrollData(1, "Mark", 300000);
console.log(empPayrollData.toString());
empPayrollData.name = "John";
console.log(empPayrollData.toString());
