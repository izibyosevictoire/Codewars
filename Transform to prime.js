function minimumNumber(numbers){
    let sum = 0;
    let result =0;
    let i = sum;
    for(let  num of numbers){
      sum+=num;
    }
    while(!Prime(sum)) {
      sum++
      result++
    }
    return result;
  }
  
  
  function Prime(n){
    let result = false;
    for(i = 2; i<n ; i++){
      if(n%i==0){
        result = false;
        return result;
        
      }else{
        result = true;
      }
    }
    return result ;
  }
  