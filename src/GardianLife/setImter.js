const setTimer = (n) => {
    var initNum = 0;
    const stopTimer= () => {
        clearInterval(myTimer);
    }
    var myTimer = setInterval(() => {
        if (initNum <= n) {
            console.log(initNum);
            initNum ++;
        } else {
            stopTimer()
        }
    },1000)
}

setTimer(10)
