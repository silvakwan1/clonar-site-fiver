
function updateCounter () {
    const countElement = document.querySelector(".count-text")
    
    let count = Number(countElement.textContent)
    
   
    if(count < 38){
        count+= 0.1
    }else{
        clearInterval(interval)
    }
   
    countElement.textContent = count.toFixed(2)
  }
  
const interval = setInterval(updateCounter,100)