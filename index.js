butList=document.querySelectorAll(".drum");
len=butList.length;
for(var i=0;i<len;i++)
{
    butList[i].addEventListener("click",fun);
}


function fun(){
    var content=this.innerHTML;
    makeSound(content);
    makeAnimation(content);
}

document.addEventListener("keypress",funBYKEYboard);

function funBYKEYboard(event)
{
    makeSound(event.key);
    makeAnimation(event.key);
}


function makeSound(key){
    switch(key)
    {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(content);
            break;
    }
}


function makeAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(remove,100);
    
    function remove()
{
    document.querySelector("."+key).classList.remove("pressed");
}

}




//var audio=new Audio('sounds/tom-1.mp3');
   // audio.play();