var burger = document.querySelector('#burger');
burger.addEventListener('click',function(){
    let list = document.querySelector('ul')
    list.classList.toggle('active')
} )

var skills = document.querySelector('#resume')
skills.addEventListener('click', function(){
    var display1 = document.querySelector('#my_first');
    display1.classList.toggle('resume')
})
