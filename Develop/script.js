var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currenTime').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentTime').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);