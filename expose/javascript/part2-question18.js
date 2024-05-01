// The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)
setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);