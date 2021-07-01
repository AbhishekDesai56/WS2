class EmpPayrollData {
    id;
    salary;
    gender;
    startDate;


//Constructor
constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
}

    get name() { return this._name };
    set name(name) {
        this._name = name;
    }

    toString() {
        let options = {year: 'numeric', month: 'long', day: 'numeric'}
        let empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-us", options)
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
                " gender=" + this.gender + ", startDate= " + empDate;
    }
}

let empPayrollData = new EmpPayrollData(1, "Mark", 300000);
console.log(empPayrollData.toString());
empPayrollData.name = "John";
console.log(empPayrollData.toString());

empPayrollData = new EmpPayrollData(2, "Terissa", 400000, "F", new Date());
console.log(empPayrollData.toString());
