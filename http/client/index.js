
const form = document.querySelector('.form');
const btn = document.querySelector('.submit');
btn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(input.innerHTML)
    getInfo();
})
form.addEventListener('submit',function(e){
    e.preventDefault();
})
function getInfo(){
    fetch(`http://localhost:8080/api/users/1`).then(res=>res.json()).then(d=>console.log(d.data));
}
