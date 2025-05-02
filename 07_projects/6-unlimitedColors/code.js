let changer;
let body = document.querySelector('body');
let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray'];
let i = 0;
document.querySelector('#start').addEventListener('click', function(e){
    changer = setInterval(function(){
        body.style.backgroundColor=colors[i++];
        if(i >= colors.length) i = 0;
    },1000);
    
});
document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(changer);
    body.style.backgroundColor = 'black';
    i = 0;
})