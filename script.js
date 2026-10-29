let phone = {
    brand: "Itel",
    battery: 80,

    useBattery() {
        this.battery = this.battery - 10;
    }
};
setTimeout(function() {
    console.log("Hello after 3 seconds!");
}, 9999);
phone.useBattery();
phone.useBattery();
phone.useBattery();
phone.useBattery();
console.log(phone.battery);
const time = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const wealth = time.filter(function(years) {
  return years <= 6;
});
console.log(wealth);
// Step 1: array of five course modules
const modules = [
  { name: "HTML & CSS", hours: 12 },
  { name: "JavaScript Basics", hours: 15 },
  { name: "Web Design", hours: 8 },
  { name: "Databases", hours: 10 },
  { name: "Frameworks", hours: 14 }
];

// Step 2: filter modules with more than 10 hours
function getLongModules() {
  return modules.filter(function (m) {
    return m.hours > 10;
  });
}

// Step 3: log each result with forEach
function showModules(list) {
  list.forEach(function (m) {
    console.log(`${m.name}: ${m.hours} hours`);
  });
}

console.log("Modules over 10 hours:");
showModules(getLongModules());

// Step 4: add a sixth module and run the same filter again
modules.push({ name: "Cloud Basics", hours: 11 });

console.log("After adding a sixth module:");
 showModules(getLongModules());
