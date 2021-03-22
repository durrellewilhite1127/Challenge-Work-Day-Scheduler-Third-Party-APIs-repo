$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function(){
        window.alert("Task saved")
        var value = $(this).siblings(".description").val();
        console.log(value);
        var time = $(this).parent().attr("id");
        console.log(time);

    // save to local storage
    localStorage.setItem(time, value)

    // show notification that item was saved by adding class "show"

    // timeout to remove "show" class after 5 secs

    })

    let timeOfDay = document.querySelector("time-block");
    // while todayDate is current time: set to red 
    
    // if time id is not equal to 
    
    // parse hour values into hour integers
    
    // 
    
    let todayDate = moment(new Date()).format("LLLL");
    let todayDate2 = moment().hours();
    console.log(todayDate2);
    
    function loadDay(){  
        $(timeOfDay).each()(function(){
        
        var currentHour = parseInt
    }
    )}
    loadDay()
    // var currentDay = newDate(){
    
    // }
    document.querySelector("#currentDay").innerHTML = todayDate
    // $(m)
    // document.querySelector('h2.some-class').innerText = document.querySelector('div.some-class').innerText;
    
    localStorage
})
