function isOdd(num) { 
    return num & 1;
  };
  function solution(str){
    if (str.length == 0) {
      return []
    };
    
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }