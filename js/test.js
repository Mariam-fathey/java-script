

var imgs = document.getElementsByClassName("item-img");
var imgsArray = [];
var lightboxItem = document.querySelector(".lightbox-item");
var lightboxcontainer = document.querySelector(".lightbox-container");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var wClose = document.getElementById("wClose");
var currentIndex = 0;
for(var i=0; i<imgs.length; i++ )
    {
        imgsArray.push(imgs[i]);
        imgs[i].addEventListener("click",function(eventInfo){
            lightboxcontainer.classList.add("show")
            var imgSrc = eventInfo.target.src;
            lightboxItem.style.backgroundImage = "url("+imgSrc+")";
            currentIndex = imgsArray.indexOf(e.target);
        })
    }
next.addEventListener("click",function(){
   nextMove();
})
function nextMove(){
   currentIndex++
    if(currentIndex==imgsArray.length){
        currentIndex=0;
    }
     lightboxItem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";  
}
prev.addEventListener("click",function(){
   prevMove();
})
function prevMove(){
     currentIndex--
    if(currentIndex<0){
        currentIndex=imgsArray.length-1;
    }
     lightboxItem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
}

wClose.addEventListener("click",function(){
                lightboxcontainer.classList.remove("show")

})
lightboxcontainer.addEventListener("click",function(e){
    if(e.target==lightboxcontainer){
            lightboxcontainer.classList.remove("show");

    }
})


document.addEventListener("keydown",function(eventInfo){
    if(eventInfo.keyCode == 27){
    lightboxcontainer.classList.remove("show");

    }
    else if(eventInfo.keyCode == 39){
        nextMove();
    }
    else if(eventInfo.keyCode == 37){
        prevMove();
    }
})












