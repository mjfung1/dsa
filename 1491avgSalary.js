// 1491. Average Salary Excluding the Minimum and Maximum Salary
var average = function(salaries) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let sum = 0;
    
    for (const salary of salaries) {
        min = Math.min(min, salary);
        max = Math.max(max, salary);
        sum += salary;
    }
    
    let division = salaries.length - 2;
    let totalSal = sum - min - max;
    
    return totalSal/division;
};