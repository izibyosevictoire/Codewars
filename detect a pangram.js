function isPangram(string){
    let Alphabetes="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let toUpper =string.toUpperCase();
    for(let i of Alphabetes){
      if(!toUpper.includes(i)){
        return false;
      }
    }
      return true;
  }
//   or there is another alternative


function isPangram(string){
    let Alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tolower = string.toUpperCase();
    for(let i of Alphabets){
      if(!tolower.includes(i)){ 
        return false;   
      }        
       }
    return true; 
  }