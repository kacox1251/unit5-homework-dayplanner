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

function timeOfDay() {
    if (moment().isBefore(hours, "hour") === true) {
        $(".textarea").addClass("past");
    }

    else if (moment().isSame(hours, "hour") === true) {
        $(".textarea").addClass("present");
    }

    else {
        $(".textarea").addClass("future");
    }
}

timeOfDay();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function(event) {
    event.preventDefault();
    var plans = $(".textarea").val();
    localStorage.setItem("Plans", plans);
})

var savedPlans = localStorage.getItem("Plans");
$(".textarea").textContent = savedPlans;
console.log(savedPlans);