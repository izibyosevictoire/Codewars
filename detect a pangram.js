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