
// You should implement your task here.

module.exports =  function towelSort (matrix) {
  let arrSort = [];
  if (matrix){
      matrix.forEach(function (item, i) {
          if (i % 2 !== 0) {
              arrSort.push(...item.reverse());
          } else {   arrSort.push(...item);}
      });
  }
  return arrSort;
  
}

