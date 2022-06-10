function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFuction(){
        return "be cool"
    }
}

function returnsAnAnonymousFunction(){
   return  () => 'before all';
}