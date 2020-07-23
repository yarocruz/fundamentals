/*
 The long and winded imperative way
 */

// We're gonna log a clock every second

// setInterval(logClockTime, 1000);
//
// function logClockTime() {
//     // This function will call a function that makes string in civilian time
//     let time = getClockTime();
//
//     // clear console and log the time
//     console.clear();
//     console.log(time);
// }
//
// function getClockTime() {
//     // Using the Date function
//     let date = new Date();
//
//     // Serialize? clock time
//     let time = {
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds(),
//         ampm: 'AM'
//     };
//
//     // convert to civilian time
//     if (time.hours === 12) {
//         time.ampm = 'PM';
//     } else if ( time.hours > 12) {
//         time.ampm = 'PM'
//         time.hours -= 12;
//     }
//
//     // prepend a 0 on the hours to make double digits
//     if (time.hours < 10) {
//         time.hours = '0' + time.hours;
//     }
//     // same with mins
//     if (time.minutes < 10) {
//         time.minutes = '0' + time.minutes;
//     }
//     // same with seconds
//     if (time.seconds < 10) {
//         time.seconds = '0' + time.seconds;
//     }
//     //finally... format the clock times as a string "hh:mm:ss tt"
//     return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
// }

/*
 The Declarative way
 */

// 'function over values' -- basically we are using pure functions the return the values that we will need

/*
    We need a compose function to put this all together in a functional way
    The compose function below takes functions as arguments and returns a single function.
    In this implementation the spread operator is used to turn those function arguments into an array
    called fns. A function is then returned that expects one argument, arg. When this function is invoked,
    the fns array is pied starting with the argument we want to send through the function. The argument
    becomes the initial value for compose, then each iteration of the reduced callback returns.
 */

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
// const log = message => console.log(message);

const log = message => addElement('h1', message);

const addElement = (type, content) => {
    let root = document.querySelector('#app');
    return root.textContent = content;
}

// addElement('h1', 'message');

// return an object with the with hours, minutes, and seconds

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
})

// returning an object that transforms the hours 1 - 24, into civlian times

const getCivilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
})

// returning another object

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
})

// couple of more things

const display = target => time => target(time); // this is what we eventually use to console.log the ticking

const formatClock = format => time =>
    format
        .replace('hh', time.hours)
        .replace('mm', time.minutes)
        .replace('ss', time.seconds)
        .replace('tt', time.ampm)

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key]
})

const compose = (...fns) => arg =>
    fns.reduce((composed, f) => f(composed), arg)

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        getCivilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero('hours'),
        prependZero('minutes'),
        prependZero('seconds')
    )(civilianTime);

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    );

startTicking();