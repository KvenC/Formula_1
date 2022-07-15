var temp = document.getElementById('raceday');
// console.log(temp.textContent); //22-24
var rd = temp.textContent.substr(3, 2); // 從第3碼開始往後算2碼
// console.log(rd);
// time();

setInterval(function time() {
    var now = new Date();
    var rdtime = new Date(2022, 03, rd, 20, 00);
    // day
    // console.log(now);
    // console.log(rdtime);
    var diff = Math.floor((rdtime - now) / 86400000);
    // console.log(diff);

    // hour
    var nowhr = now.getHours();
    // console.log(nowhr);
    var rdhr = rdtime.getHours();
    // console.log(rdhr);
    var diffhr = rdhr - nowhr;
    // console.log(diffhr);
    if (diffhr < 0) {
        diffhr = 24 - nowhr + rdhr - 1;
        console.log(diffhr);
    }
    if (diffhr == 0) {
        diffhr = 0;
    }

    //min
    var nowmin = now.getMinutes();
    // console.log(nowmin);
    // var rdmin = rdtime.getMinutes();
    var diffmin = 60 - nowmin;
    // console.log(diffmin);
    if (diffmin == 60) {
        diffmin = 0;
    }

    // sec
    var nowsec = now.getSeconds();

    var diffsec = 60 - nowsec;
    // console.log(diffsec);
    if (diffsec == 60) {
        diffsec = 0;
    }

    document.getElementById('remaining_time').innerText = `${diff}D ${diffhr}H`;
    document.getElementById('remaining_min').innerText = `${diffmin}m`;
    document.getElementById('remaining_sec').innerText = ` ${diffsec}s`;
}, 1000);