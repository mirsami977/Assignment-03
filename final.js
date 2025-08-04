/** Problem -01 ( Divide the Asset ) */
var area = 7;
//write your code here
 var akJon = area / 2;
 console.log(akJon);

 /** Problem -02 ( Cycle or Laptop ) */
var money = 15000;
//write your code here
if (money >= 25000 ) {
    console.log("Laptop");
}
else if (money>= 10000) {
    console.log("Cycle")
} else {
    console.log("Chocolate")
}
/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for (let din = 1; din < lastDay; din++) {
    if (din % 3=== 0) {
        console.log( din + " - medicine")
    }
    else{
        console.log ( din + " - rest"); 
    }
}


/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 45000;
//write your code here 
for (var i = 1; i<=experience; i++) {
    startingSalary = startingSalary * 1.05;
}
var Salary = startingSalary.toFixed(2);
console.log(Salary);