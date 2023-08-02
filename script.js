var audio= new Audio("https://vgmsite.com/soundtracks/splatoon-3-gamerip-2022/inflvfpygp/Voice%20Buddy%20Sing%20Shiokara%2000.flac")
var audio2= new Audio("https://vgmsite.com/soundtracks/splatoon-3-gamerip-2022/xczjxmcepn/Voice%20Buddy%20Sing%20Kumasan%2000.flac")


let optionOnescreen=document.querySelector(".option-one-screen");
let optionTwoscreen=document.querySelector(".option-two-screen");
let buttonYes=document.querySelector(".option-one");
let buttonNo=document.querySelector(".option-two");
let op=document.querySelector(".story-opening");
let title=document.querySelector(".title");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");
let body=document.querySelector("body");

op.onmouseover=function(){
  title.innerHTML="Hungry Little Buddy"
};

buttonYes.onmouseover=function(){
  title.innerHTML="PLEASE CLICK YES"
  
};

buttonNo.onmouseover=function(){
  title.innerHTML="Please Reconsider..."
};

buttonYes.onclick=function(){
    optionOnescreen.style.display="block";
  op.style.display="none"
  title.innerHTML="You tell Smallfry to get ready to go."
  buttonYes.style.display="none"
  buttonNo.style.display="none"
};

buttonNo.onclick=function(){
optionTwoscreen.style.display="block";
  op.style.display="none"
  title.innerHTML="You are getting ready for bed, but then see Smallfry on the floor."
  buttonYes.style.display="none"
  buttonNo.style.display="none"
};

body.onkeypress=function(){ 
optionOneEnd.style.display="block";
  optionOnescreen.style.display="none"
  title.innerHTML="Good Ending!"
  audio.play();
};

optionTwoscreen.onclick=function(){
optionTwoEnd.style.display="block";
  optionTwoscreen.style.display="none"
  title.innerHTML="Bad Ending..."
  audio2.play();
};
