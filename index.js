document.addEventListener('load',init());

function init(){
    
    /* var b1 = document.getElementById('b1').style;
    var b2 = document.getElementById('b2').style;
    var b3 = document.getElementById('b3').style;
    var b4 = document.getElementById('b4').style;

    setInterval(() => {
        b1.transform = 'translateX(88vw)';
        b1.transition = 'transform 2s ease';
    }, 1000); */
    
   
    
}

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

var box1 = document.getElementById('b1').style;
var box2 = document.getElementById('b2').style;
var box3 = document.getElementById('b3').style;
var box4 = document.getElementById('b4').style;

var boxes = [box1,box2,box3,box4];
var count = 0;
var curr;
btn1.addEventListener('click',function(){
    for(var i=0; i<=3;i++){
        boxes[i].animationPlayState = 'unset';
    }

    if (count == 0 ){
        count += 0.1;
        curr = 1 - count;
    }
    
    else{

        curr -= 0.1;
    }
    if (Math.trunc(curr*1000) == 0){
        curr = 0.1
        document.getElementById('speed').innerHTML = Math.trunc(curr*1000)+'ms / iteration (max)';
        return;
    }
    for(var i=0; i<=3;i++){
        boxes[i].animationDuration = curr + 's';
       
    }
    document.getElementById('speed').innerHTML = Math.trunc(curr*1000)+'ms / iteration';
});

btn2.addEventListener('click', function(){
    if (count == 0 ){
        count += 0.1;
        curr = 1 + count;
    }
    else{
        curr += 0.1;
    }
    
    for(var i=0; i<=3;i++){
        boxes[i].animationDuration = curr + 's';
    }
    document.getElementById('speed').innerHTML = Math.trunc(curr*1000)+'ms / iteration';

});
var rev = 0;
btn3.addEventListener('click',function(){
        rev++;
        if(rev == 2){
            boxes[0].animationName = 'b1';
            boxes[1].animationName = 'b2';
            boxes[2].animationName = 'b3';
            boxes[3].animationName = 'b4';
            rev = 0;
            document.getElementById('direction').innerHTML = 'Clockwise'
            return;
        }
        boxes[0].animationName = 'b2';
        boxes[1].animationName = 'b3';
        boxes[2].animationName = 'b4';
        boxes[3].animationName = 'b1';
        document.getElementById('direction').innerHTML = 'Counter-Clockwise'
});