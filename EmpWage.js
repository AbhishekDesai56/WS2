const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;
const MAX_HRS_IN_MONTH = 100;
const NUMBER_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empHrs = 0;
{
	let empDailyWageArr = new Array();
	let empDailyWageMap = new Map();
	let empDailyHrsMap = new Map();
	let totEmpWage = 0;

	function calcDailyWage(empHrs) {
		return empHrs * WAGE_PER_HOUR;
	}
	function getWorkingHours(empCheck) {
		switch (empCheck) {
			case IS_PART_TIME:
				return PART_TIME_HOURS;
			case IS_FULL_TIME:
				return FULL_TIME_HOURS;
			default:
				return 0
		}
	}

	while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
		totalWorkingDays++;
		let empCheck = Math.floor(Math.random() * 10) % 3;
		let empHrs = getWorkingHours(empCheck);
		totalEmpHrs += empHrs;
		empDailyWageArr.push(calcDailyWage(empHrs));
		empDailyHrsMap.set(totalWorkingDays, empHrs);
		empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
	}
	empWage = calcDailyWage(totalEmpHrs);
	//console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

	console.log(empDailyWageMap);
	function totalWages(totalWage, dailyWage) {
		return totalWage + dailyWage;
	}

	console.log("Emp wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
	//Calculate TotalWage 
	function sum(dailyWage) {
		totEmpWage += dailyWage;
	}

	function totalWages(totalWage, dailyWage) {
		return totalWage + dailyWage;
	}

	empDailyWageArr.forEach(sum);
	console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Total Emp Wage: " + totEmpWage);

	//Employee Wage with reduce.
	console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0))

	//Show the Day along with Daily Wage using Array map Helper function
	let dailyCntr = 0;
	function mapDayWithWage(dailyWage) {
		dailyCntr++;
		return dailyCntr + " = " + dailyWage;
	}

	let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
	console.log("Daily Wage Map");
	console.log(mapDayWithWageArr);

	//Show Days when Full time wage of 160 were earned
	function fulltimeWage(dailyWage) {
		return dailyWage.includes("160");
	}

	let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
	console.log("Daily Wage Filter When Fulltime Wage Earned");
	console.log(fullDayWageArr);

	//Find the first occurrence when Full Time Wage was earned using find function
	function findFulltimeWage(dailyWage) {
		return dailyWage.includes("160");
	}

	console.log("First time Fulltime wage was earned on a day: " + mapDayWithWageArr.find(findFulltimeWage));

	//Check if every Element of Full Time Wage is truely holding Full time wage
	function isAllFulltimeWage(dailyWage) {
		return dailyWage.includes(dailyWage);
	}

	console.log("Check All element have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

	//Check if there is any part time wage
	function isAnyPartTimeWage(dailyWage) {
		return dailyWage.includes("80");
	}

	console.log("Check if Any Part Time Wage:" + mapDayWithWageArr.some(isAnyPartTimeWage));

	//Find the number of days employee worked
	function totalDaysWorked(numOfDays, dailyWage) {
		if (dailyWage > 0) return numOfDays + 1;
		return numOfDays;
	}

	console.log("Number of Days Emp Worked:" + empDailyWageArr.reduce(totalDaysWorked, 0));

	//Arrow Function
	const findTotal = (totalVal, dailyVal) => {
		return totalVal + dailyVal;
	}
	let totalHours = Array.from(empDailyHrsMap.values())
		.filter(dailyHours => dailyHours > 0)
		.reduce(findTotal, 0);

	let totalSalary = empDailyWageArr
		.filter(dailyWage => dailyWage > 0)
		.reduce(findTotal, 0);
	console.log("Emp Wage with Arrow.: " + " Total Hours: " + totalHours + " Total Wages: " + totalSalary);

	let nonWorkingDays = new Array();
	let partWorkingDays = new Array();
	let fullWorkingDays = new Array();
	empDailyHrsMap.forEach((value, key, map) => {
		if (value == 8) fullWorkingDays.push(key);
		else if (value == 4) partWorkingDays.push(key);
		else nonWorkingDays.push(key);
	});
	console.log("Full Working Days: " + fullWorkingDays);
	console.log("Part Working Days:" + partWorkingDays);
	console.log("Non Working Days:" + nonWorkingDays);
}

//Object Creation
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyHrsAndWageArr.push({
		dayNum: totalWorkingDays,
		dailyHours: empHrs,
		dailyWage: calcDailyWage(empHrs),
		toString() {
			return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
		},
	});
}
console.log("Showing Daily Hours Worked and Wage Earned:" + empDailyHrsAndWageArr);

//Using object functions along with the Arrow Function
let totalWages = empDailyHrsAndWageArr
	.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
	.reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
	.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
	.reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("Total Hours: " + totalHours + " Total Wages: " + totalWages);

process.stdout.write("Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
	.forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
	.map(dailyHrsAndWage => dailyHrsAndWage.toString());
	console.log("PartWorkingDayStrings: " + partWorkingDayStrArr);

let nonWorkingDaysNum = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
	.map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
	console.log("NonWorkingDayNum: " + nonWorkingDaysNum);
