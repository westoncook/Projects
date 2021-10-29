function countdown(num){
    let time = 1000
    for(let i=num; i > -1; i--){
      setTimeout(function(){
        if(i>0){
          console.log(i);
        }
        else {
          console.log("DONE!")
        }
      }, time);
      time += 1000;
    }
  }
  
  function randomGame(){
    let count = 0;
    let num = 0;
    let counter = setInterval(function (){
      if(num < 0.75){
        num = Math.random();
        count += 1;
      }
      else {
        clearInterval(counter);
        console.log(count);
        return
      }
    }, 1000)
  }

randomGame()
