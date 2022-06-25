var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currenTime').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentTime').html(currentDate + " " + momentNow.format('hh:mm:ss a'))}, 100);

var hour = moment().hours();
var userInput;
var hourSpan;

var sevenam = $(#07am);
var eightam = $(#08am);
var nineam = $(#09am);
var tenam = $(#10am);
var elevam = $(#11am);
var twelvepm = $(#12pm);
var onepm = $(#01pm);
var twopm = $(#02pm);
var threepm = $(#03pm);
var fourpm = $(#04pm);
var fivepm = $(#05pm);
var sixpm = $(#06pm);
var sevenpm = $(#07pm);
var eightpm = $(#08pm);
var ninepm = $(#09pm);
var tenpm = $(#10pm);