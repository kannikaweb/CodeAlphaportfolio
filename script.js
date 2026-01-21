/* Typing Effect with Color */
const typingEl = document.querySelector(".typing");
const texts = ["Frontend Developer","UI Designer","Web Developer"];
let i = 0, j = 0;

function type(){
  if(j < texts[i].length){
    typingEl.textContent += texts[i][j++];
    typingEl.style.color = `hsl(${Math.random()*360},100%,80%)`;
    setTimeout(type,120);
  }else{
    setTimeout(erase,1500);
  }
}
function erase(){
  if(j>0){
    typingEl.textContent = texts[i].substring(0,--j);
    setTimeout(erase,80);
  }else{
    i=(i+1)%texts.length;
    setTimeout(type,300);
  }
}
window.onload = type;

/* Scroll active */
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let cur="";
  sections.forEach(sec=>{
    if(scrollY>=sec.offsetTop-150) cur=sec.id;
  });
  navLinks.forEach(l=>{
    l.classList.toggle("active",l.getAttribute("href")==="#"+cur);
  });
});

/* Cursor glow */
const glow=document.querySelector(".cursor-glow");
document.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

/* Internship */

function readMore(){
  const text = document.getElementById("internText");
  const btn = event.target;

  if(text.classList.contains("short")){
    text.classList.remove("short");
    text.classList.add("full");
    btn.innerText = "Read Less";
  } else {
    text.classList.remove("full");
    text.classList.add("short");
    btn.innerText = "Read More";
  }

}

/* Certificate Modal */
function openCert(title){
  document.getElementById("certTitle").innerText=title;
  document.getElementById("certModal").classList.add("active");
}
function closeCert(){
  document.getElementById("certModal").classList.remove("active");
}
/* ===============================
   SEND MESSAGE → DIRECT MAIL
================================ */
function sendMail(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:kannikam.cse@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
}
