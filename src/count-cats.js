const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mat) {
    if(mat[0] === undefined){
        return 0 
    }
  let b = mat.length;
  let c = mat[0].length;
  let count = 0;
  for (let i = 0; i < b; i++ ){
      for(let j = 0; j<c;j++){
          if(mat[i][j]=== "^^" ){
              count = count + 1;
          }
      }
  }if(count === 0){
    return 0
}
  return count
};
