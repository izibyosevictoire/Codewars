function duplicateCount(text){
    let counter = 0;
    let counted =[];
    let sorted =text.toLowerCase().split("").sort()
    for(let i =0; i<sorted.length; i++){
      if(sorted[i]==sorted[i+1]&& !counted.includes(sorted[i])){
        counter++
        counted.push(sorted[i])
      }
    }
    return counter;
  }