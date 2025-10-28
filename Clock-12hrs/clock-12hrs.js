setInterval(() => {
const now= new Date();
const hour= now.getHours()%12 || 12
const minute= now.getMinutes()
const sec= now.getSeconds()
document.querySelector('#time-here').textContent= (`${hour} : ${minute} : ${sec}`)
},1000);
