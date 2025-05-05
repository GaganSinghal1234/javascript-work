let changer;
let body = document.querySelector('body');
// let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray'];
// let i = 0;
document.querySelector('#start').addEventListener('click', function(e){
    changer = setInterval(function(){
        // body.style.backgroundColor=colors[i++];
        // if(i >= colors.length) i = 0;
        body.style.backgroundColor = randomColor();
    },100);
    
});
document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(changer);
    body.style.backgroundColor = 'black';
    i = 0;
})

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}