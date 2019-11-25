var hours = [8, 
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18];

var currentDay = $("#currentDay");

console.log(moment());

var now = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(now);
console.log(now);

console.log(moment().hour());

for (i = 0; i < hours.length; i++) {
    if (moment().hour() === hours[i]) {
        $(".textarea").addClass("present");
    }
    
    else {
        $(".textarea").addClass("future");
    }
}


    // else if (moment().isSame(hours[i], "hour")) {
    //     $(".textarea").addClass("present");
    // }
var saveBtn = $(".saveBtn");

saveBtn.on("click", function(event) {
    event.preventDefault();
    var plans = $(".textarea").val();
    localStorage.setItem("Plans", plans);
})

var savedPlans = localStorage.getItem("Plans");
$(".textarea").textContent = savedPlans;
console.log(savedPlans);
