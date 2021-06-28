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
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
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
	empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
empWage = calcDailyWage(totalEmpHrs);
//console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
	return totalWage +dailyWage;
}

console.log("Emp wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));
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
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages,0))

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

console.log("First time Fulltime wage was earned on a day: "+ mapDayWithWageArr.find(findFulltimeWage));

//Check if every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage) {
	return dailyWage.includes(dailyWage);
} 

console.log("Check All element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));

//Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
	return dailyWage.includes("80");
}

console.log("Check if Any Part Time Wage:" + mapDayWithWageArr.some(isAnyPartTimeWage));

//Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
		if(dailyWage>0) return numOfDays + 1;
		return numOfDays;
}

console.log("Number of Days Emp Worked:" + empDailyWageArr.reduce(totalDaysWorked, 0));