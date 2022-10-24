//정보의 은닉, 캡슐화
//데이터 보존
//모듈화, 재사용, 독립
function makeCounter(predicate){
    var counter = 0;
    return function(){
        counter = predicate(counter);
        return counter;
    }
}
function increase(n){
    return ++n;
}
function decrease(n){
    return --n;
}

const increaser = makeCounter(increase);
console.log(increaser())
console.log(increaser())
console.log(increaser())

const decreaser = makeCounter(decrease);
console.log(decreaser())
console.log(decreaser())
console.log(decreaser())
