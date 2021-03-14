const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let result=1;
    let current=1;
    arr.forEach(element => {
      if (Array.isArray(element)){
        current+=this.calculateDepth(element);
      }
      if(current>result){
        result=current;
      }
        current=1;
    });
    return result;
  }
};