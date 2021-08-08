// Your code here

function saturdayFun(activity= "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

mondayWork = function(activity= "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(style= "*") {
  return function(adj= "special") {
    return `You are ${style}${adj}${style}!`
  }
};

// not really sure how to make the tests pass at this point
// tried on my own and then looked at the github 'solution'....that solution didn't pass
// so I'm at a loss tbh. Everything looks like it should work the way the test are asking it to
const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }
  return a
}
