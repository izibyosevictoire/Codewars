function maxMultiple(divisor, bound){
    let num = 0;
    for (let n=1; n<=bound; n++){
      if( n % divisor == 0 && n>0){
        num = n;
      }
    }
    return num;
  }