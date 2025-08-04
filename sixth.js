/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 45000;
//write your code here 
for (var i = 1; i<=experience; i++) {
    startingSalary = startingSalary * 1.05;
}
var Salary = startingSalary.toFixed(2);
console.log(Salary);
