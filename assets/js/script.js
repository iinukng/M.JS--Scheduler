// date tracker
function currentDate() {
    let today = moment();

    $('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

    // color coding textblocks
    let now = moment().format('k');
    for (let i = 0; i < schedule.length; i++) {
        schedule[i].removeClass('future past present');

        if (now > schedule[i].data('hour')) {
            schedule[i].addClass('past');
        } else if (now === schedule[i].attr('data-hour')) {
            schedule[i].addClass('present');
        } else {
            schedule[i].addClass('future');
        }
    }
}

// textblock arrays
let saveBtn = $('.saveBtn');
let time9am = $('#9AM');
let time10am = $('#10AM');
let time11am = $('#11AM');
let time12pm = $('#12PM');
let time1pm = $('#1PM');
let time2pm = $('#2PM');
let time3pm = $('#3PM');
let time4pm = $('#4PM');
let time5pm = $('#5PM');

let schedule = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
];

lastRgstr();
currentDate();

// local storage saves
function lastRgstr() {
    for (let element of schedule) {
        element.val(localStorage.getItem('time-block ' + element.data('hour')));

    }
}

// click handling 
function form(event) {
    event.preventDefault();

    let click = $(event.currentTarget);

    let targetText = click.siblings('textarea');

    let targetTimeBlock = targetText.data('hour');

    localStorage.setItem('time-block ' + targetTimeBlock, targetText.val());
}

saveBtn.on('click', form);