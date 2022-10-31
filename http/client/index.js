

const btn = document.querySelector('.submit');
btn.addEventListener('click',function(e){
    e.preventDefault();
    getInfo();
})
function getInfo(){
    fetch('https://austintest.herokuapp.com/').then(res=>res.json()).then(d=>console.log(d.data));
}
