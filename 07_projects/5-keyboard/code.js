let key = document.querySelector('.project');
//let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray'];
//let i = 0;
let changer = null;

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    clearInterval(changer);
    changer = null;
    key.style.backgroundColor = 'black';
    i = 0;
  } else if (!changer) {
    changer = setInterval(function() {
    //   key.style.backgroundColor = colors[i];
    //    i = (i + 1) % colors.length;
        key.style.backgroundColor = randomColor();
    }, 100);
  }
});

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
 