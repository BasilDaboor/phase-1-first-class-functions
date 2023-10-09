function receivesAFunction(callback){
callback();
}

function returnsANamedFunction(){
return function fun(){};

}
function returnsAnAnonymousFunction() {
  return function () {};
}
