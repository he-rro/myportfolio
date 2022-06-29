let image=document.getElementById('image');
let url=document.getElementById('url')
let height=document.getElementById('height')
let width=document.getElementById('width')
let copy=document.getElementById('copy')
let copyContainer=document.getElementById('copyContainer')
let botton=document.getElementById('botton')

function urlHandler(){
    let lastIndex=url.value.lastIndexOf(`/`);
    let lastPart=url.value.substring(lastIndex+1)
    let urlgenerator=`https://source.unsplash.com/${lastPart}/${width.value}x${height.value}`
   image.src=`${urlgenerator}`;
   copy.value=`${image.src}`
    image.style.display=`block`
    copy.style.display=`block`
    botton.style.display=`block`
  // copyContainer.style.display=`block`

}


   function copyUrl(){
  copy.select();
  navigator.clipboard.writeText(copy.value); 
 } 

 /* function caller(){
    if(url.value || height.value || width.value ==null){
        alert("Pleas Enter Url ,Hight ,And Width")
        console.log(url.value)
        
    }
    else{
       urlHandler();
       
    
    }
} */