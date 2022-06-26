var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");

var sevenam = $('#07am');
var eightam = $('#08am');
var nineam = $('#09am');
var tenam = $('#10am');
var elevam = $('#11am');
var twelvepm = $('#12pm');
var onepm = $('#01pm');
var twopm = $('#02pm');
var threepm = $('#03pm');
var fourpm = $('#04pm');
var fivepm = $('#05pm');
var sixpm = $('#06pm');


var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentTime').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentTime').html(currentDate + " " + momentNow.format('hh:mm:ss a'));
  }, 100);

function schedule(){

    console.log("Current Hour " + hour);

    var am7 = JSON.parse(localStorage.getItem("07:00 am"));
    sevenam.val(am7);

    var am8 = JSON.parse(localStorage.getItem("08:00 am"));
    eightam.val(am8);

    var am9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineam.val(am9);

    var am10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenam.val(am10);

    var am11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevam.val(am11);

    var pm12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvepm.val(pm12);

    var pm01 = JSON.parse(localStorage.getItem("01:00 pm"));
    onepm.val(pm01);

    var pm02 = JSON.parse(localStorage.getItem("02:00 pm"));
    twopm.val(pm02);

    var pm03 = JSON.parse(localStorage.getItem("03:00 pm"));
    threepm.val(pm03);

    var pm04 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourpm.val(pm04);
    
    var pm05 = JSON.parse(localStorage.getItem("05:00 pm"));
    fivepm.val(pm05);
    
    var pm06 = JSON.parse(localStorage.getItem("06:00 pm"));
    sixpm.val(pm06);

 
}


function timeblock(){
    $(".form-control").each(function(){
        var time = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(time);
        console.log(hour);

        if (hour > time) {
            $(this).addClass("past");
        } else if (hour < time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
    }


$(document).ready(function(){
    schedule()
    timeblock()

    $('.saveBtn').on('click', function(){
        userInput = $(this).siblings('.form-control').val().trim();
        hourSpan = $(this).siblings('.input-group-prepend').text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
    $('#clearSchedule').on('click', function(){
        localStorage.clear();
        schedule()
    })
});