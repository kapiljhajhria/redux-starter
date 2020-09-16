function add(a,b){
    return a+b;
}

function curryAdd(a){
    return function (b){
        return (a+b);
    }
}