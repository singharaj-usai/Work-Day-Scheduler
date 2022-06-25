var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentTime').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentTime').html(currentDate + " " + momentNow.format('hh:mm:ss a'));
  }, 100);
var hour = moment().hours();
var userInput;
var hourSpan;

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
var sevenpm = $('#07pm');
var eightpm = $('#08pm');
var ninepm = $('#09pm');
var tenpm = $('#10pm');

function schedule() {

    var am7 = JSON.parse(localStorage.getItem("07:00 am"));
    sevenam.val(am7);

    var am8 = JSON.parse(localStorage.getItem("08:00 am"));
    sevenam.val(am8);

    var am9 = JSON.parse(localStorage.getItem("09:00 am"));
    sevenam.val(am9);

    var am10 = JSON.parse(localStorage.getItem("10:00 am"));
    sevenam.val(am10);

    var am11 = JSON.parse(localStorage.getItem("11:00 am"));
    sevenam.val(am11);

    var pm12 = JSON.parse(localStorage.getItem("12:00 pm"));
    sevenam.val(pm12);

    var pm01 = JSON.parse(localStorage.getItem("01:00 pm"));
    sevenam.val(pm01);

    var pm02 = JSON.parse(localStorage.getItem("02:00 pm"));
    sevenam.val(pm02);

    var pm03 = JSON.parse(localStorage.getItem("03:00 pm"));
    sevenam.val(pm03);

    var pm04 = JSON.parse(localStorage.getItem("04:00 pm"));
    sevenam.val(pm04);
    
    var pm05 = JSON.parse(localStorage.getItem("05:00 pm"));
    sevenam.val(pm05);
    
    var pm06 = JSON.parse(localStorage.getItem("06:00 pm"));
    sevenam.val(pm06);

    var pm07 = JSON.parse(localStorage.getItem("07:00 pm"));
    sevenam.val(pm07);

    var pm08 = JSON.parse(localStorage.getItem("08:00 pm"));
    sevenam.val(pm08);

    var pm09 = JSON.parse(localStorage.getItem("09:00 pm"));
    sevenam.val(pm09);

    var pm10 = JSON.parse(localStorage.getItem("10:00 pm"));
    sevenam.val(pm10);
}
