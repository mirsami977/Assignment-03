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
