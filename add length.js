function addLength(str) {
    let splited = str.split(" ");
    let arr = [];
    for(let word of splited){
      arr.push(word + " " +  word.length)
    }
    return arr;
    }