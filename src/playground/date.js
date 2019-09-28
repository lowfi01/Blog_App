let { format, distanceInWords } = require('date-fns');

let date = format(new Date(2014, 1, 11), 'MM/DD/YYYY')
let dateNow = Date.now();
// console.log(date);
let result =  distanceInWords(
  new Date(2014, 6, 2),
  new Date(2015, 0, 1)
        )

console.log("result ", result);

// console.log(dateNow);
// console.log(format(new Date(dateNow), 'MM/DD/YYYY'));