class EmpPayrollData {
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id() { return this._id }
    set id(id) {
        if (id == undefined)
            throw 'Assign Value to id';

        if (id <= 0)
            throw 'Id should be non Zero and Positive!';
        else {
            this._id = id;
        }
    }

    get name() { return this._name }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else {
            throw 'Name is Incorrect!';
        }
    }

    get gender() { return this._gender }
    set gender(gender) {
        if (gender == undefined) {
            throw 'Assign Value to gender';
        }

        if (gender === "M" || gender == "F")
            this._gender = gender;
        else {
            throw 'Gender enter is incorrect, You have to enter M or F';
        }
    }

    get salary() { return this._salary };
    set salary(salary) {
        if (salary == undefined) {
            throw 'Assign Value to salary';
        }

        if (salary <= 0)
            throw 'Salary should be non Zero and Positive!';
        else {
            this._salary = salary;
        }
    }

    get startDate() { return this._startDate }
    set startDate(startDate) {
        if (startDate == undefined) {
        throw 'Assign Value to startDate';
        }
        
        let now = new Date();
        if(startDate > now) throw 'Start Date should not be future Date';
        this._startDate = startDate;
    }
    
    
    toString() {
        let options = {year: 'numeric', month: 'long', day: 'numeric'}
        let empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-us", options)
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
                ", gender=" + this.gender + ", startDate= " + empDate;
    }
}

let empPayrollData = new EmpPayrollData(1, "Mark", 300000, "M", new Date());
console.log(empPayrollData.toString());
try {
    empPayrollData.name = "john";
    console.log(empPayrollData.toString());
} catch(e) {
    console.error(e);
}

try {
    empPayrollData.gender = "d";
    console.log(empPayrollData.toString());
} catch(e) {
    console.error(e);
}

try {
    empPayrollData.id = "0";
    console.log(empPayrollData.toString());
} catch(e) {
    console.error(e);
}

try {
    empPayrollData.salary = "0";
    console.log(empPayrollData.toString());
} catch(e) {
    console.error(e);
}

try {
    let date = "2021-07-02"
    empPayrollData.startDate = new Date(date);
    console.log(empPayrollData.toString());
} catch(e) {
    console.error(e);
}

empPayrollData = new EmpPayrollData(2, "Terissa", 400000, "F", new Date());
console.log(empPayrollData.toString());
