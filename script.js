const CONFIG={signupLink:"YOUR_SIGNUP_LINK",freeVideosLink:"YOUR_FREE_VIDEOS_LINK",videoCallLink:"YOUR_VIDEO_CALL_LINK"};
const gate=document.getElementById("gate"), gateText=document.getElementById("gateText"), cont=document.getElementById("continue");
document.querySelectorAll(".option").forEach(btn=>btn.addEventListener("click",()=>{
  if(btn.dataset.action==="free"){
    gateText.textContent="Sign up to access the free video collection.";
  }else{
    gateText.textContent="Sign up to continue to video call access.";
  }
  cont.href=CONFIG.signupLink;
  gate.classList.add("show"); gate.setAttribute("aria-hidden","false");
  gate.scrollIntoView({behavior:"smooth",block:"center"});
}));
document.getElementById("close").onclick=()=>{gate.classList.remove("show");gate.setAttribute("aria-hidden","true")};
document.getElementById("year").textContent=new Date().getFullYear();
