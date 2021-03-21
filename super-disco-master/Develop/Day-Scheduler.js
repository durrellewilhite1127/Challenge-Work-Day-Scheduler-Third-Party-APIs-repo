$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        console.log(value);
        var time = $(this).parent().attr("id");
        console.log(time);

    // save to local storage
    localStorage.setItem(time, value)

    // show notification that item was saved by adding class "show"

    // timeout to remove "show" class after 5 secs

    })

})














// var currentDay = newDate(){
let todayDate = moment(new Date()).format("MM/DD/YYYY");
// }
document.querySelector("#currentDay").innerHTML = todayDate
// $(m)
// document.querySelector('h2.some-class').innerText = document.querySelector('div.some-class').innerText;

