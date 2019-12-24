var defaultStoredPlans = {
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null
  };
var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var currentDay = $("#currentDay");
var now = moment();
var inputs = $(".textarea");
var saveBtn = $(".saveBtn");

function convertIdToTime(id) {
    return moment().format("MM/DD/YYYY") + " " + id + ":00";
}

var storedPlans = localStorage.getItem("Plans");
if (storedPlans) {
    storedPlans = JSON.parse(storedPlans);
} else {
    storedPlans = defaultStoredPlans;
}
  
currentDay.text(now.format("dddd, MMMM Do YYYY"));
  

  
for (i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var id = $(input).attr("id");
    var time = moment(convertIdToTime(id));
    if (parseInt(id) === now.hour()) {
      $(input).addClass("present");
    } else if (time.isBefore(now)) {
      $(input).addClass("past");
    } else {
      $(input).addClass("future");
    }
}
  

saveBtn.on("click", function(event) {
    event.preventDefault();
    var plans = $(this)
      .siblings("input")
      .val();
    var planTime = $(this)
      .siblings("input")
      .attr("id");
    storedPlans[planTime] = plans;
    var newPlan = JSON.stringify(storedPlans);
    localStorage.setItem("Plans", newPlan);
});
  
$(".textarea").each(function(index, element) {
    var element = $(element);
    var key = element.attr("id");
    element.val(storedPlans[key]);
});
  