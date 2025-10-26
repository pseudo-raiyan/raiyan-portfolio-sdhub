let time = 5;

let timer = setInterval(() => {
    time--;
    console.log(time);
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);