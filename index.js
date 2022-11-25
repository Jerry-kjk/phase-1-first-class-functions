// callback functions

function receivesAFunction (callback){
  return callback();
}

//take no argument
//return a named function

function returnsANamedFunction(){
  return function fn(){
    "returns a function"
  }
}

//take no argument
//return an anonymous function

function returnsAnAnonymousFunction(){
  return function(){
    "returns an anonymous function"
  }
}
