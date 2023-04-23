function printNumbers(from, to) {
    let i = from;
    setTimeout(function timer() {
      console.log (i);
      if (i < to) {
        setTimeout(timer, 1000);
      }
      i++;
    }, 1000);
  }
printNumbers(1, 10)

function printNumbers(from , to) {
    let timer = setInterval(function () {
    console.log(from)
      if (from == to) {
        clearInterval(timer)
      }
    from++
  }, 1000)
    }
  
  printNumbers(1, 10)