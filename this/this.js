function foo(){
    console.log(this);
}
//nodeJs에서는 global 객체를 가리킨다.
foo();

const obj1 = {
    name:'moon',
    sayName:function(){
        console.log(this.name);
    }
}
const obj2 = {
    name:'austin'
}
//method로서 호출할 때는 호출한 객체를 가리킨다. 
obj2.sayName = obj1.sayName;
obj1.sayName();
obj2.sayName();


//3. 생성자 함수

function hello(name){
    //1. 빈 객체 생성 및 this를 이 객체에 바인딩
    this.name = name //2.객체 프로퍼티 설정
    //3.생성된 객체 리턴
}

const hello1 = new hello();
console.log(hello1)


class Person{
    constructor(name){
        this.name = name
    }
    sayHello = () =>{
        console.log(`hi ${this.name}`)
    }
}
const person1 = new Person('austin');
person1.sayHello();

//Arrow function을 통해 사용할 경우 lexical 환경에서의 this를 기억한다.
//함수에서 제일근접한 상위 스코프의 this에 바인딩된다.
//prototype을 가지고 있지 않다. 그래서 생성자 함수로 사용될 수 없다.
const obj3 = {
    name:'austin',
    speak:function(){
        const hello = ()=>{
            return this.name
        }
        return `hello ${hello()}`
    }
}
console.log(obj3.speak());