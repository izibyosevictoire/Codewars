function findMultiples(integer, limit) {
    let array=[];
    for (let i=1; i<=limit; i++){
      if( i%integer==0){
        array.push(i)
      }
    }
    return array;
  }