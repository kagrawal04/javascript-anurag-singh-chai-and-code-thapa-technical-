const myDate = new Date("05/15/2024");
console.log(myDate);
// console.log(myDate.toLocaleTimeString('en-IN',{timeStyle:"full"}));
// console.log(myDate.toLocaleTimeString('en-IN',{timeStyle:"long"}));
// console.log(myDate.toLocaleTimeString('en-IN',{timeStyle:"medium"}));
// console.log(myDate.toLocaleTimeString('en-IN',{timeStyle:"short"}));

// console.log(myDate.toLocaleDateString('en-IN',{dateStyle:"full"}));
// console.log(myDate.toLocaleDateString('en-in',{dateStyle:"long"}));
// console.log(myDate.toLocaleDateString('en-in',{dateStyle:"medium"}));
// console.log(myDate.toLocaleDateString('en-in',{dateStyle:"short"}));

function fullDayName(date) {
  return myDate.toLocaleDateString("en-in", { weekday: "long" });
}

function fullMonthName(date) {
  return myDate.toLocaleDateString("en-in", { month: "long" });
}
console.log(fullDayName(myDate));
console.log(fullMonthName(myDate));
