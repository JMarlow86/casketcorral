var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'https://images.pexels.com/photos/8699259/pexels-photo-8699259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

imgArray[1] = new Image();
imgArray[1].src = 'snapper.svg';

imgArray[2] = new Image();
imgArray[2].src = 'Jane.svg';

imgArray[3] = new Image();
imgArray[3].src = './images/splash food image.jpg';

imgArray[4] = new Image();
imgArray[4].src = './images/splash travel image.jpg';

function nextImage(){
    var img = document.getElementById("mainImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[4].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}