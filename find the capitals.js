var capitals = function (word) {
  var capitilized = [];
	for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) {
      capitilized.push(i);
    } 
  }
  return capitilized;

};