var imageArray=['1','2','3','4'];
var flag=0;
document.getElementById('img').style.backgroundImage="url(./images/"+imageArray[2]+".png)";
setInterval(function(){
if(imageArray.length==flag){
flag=0;
document.getElementById('img').style.backgroundImage="url(./images/"+imageArray[flag]+".png)";
}
else{
    document.getElementById('img').style.backgroundImage="url(./images/"+imageArray[flag]+".png)";
    flag++;   
}
},2000)