const addSign=document.querySelector(".add-sign");
const input=document.querySelector(".input");
const text=document.querySelector(".text");
const ul=document.querySelector("ul");
const span=document.querySelectorAll("span");
const photo=document.querySelector(".photo");
const photo1=document.querySelector(".photo1");
const myList=document.getElementById("myList");
addSign.addEventListener("click",()=>{
    input.style.display="block";
});
text.addEventListener("click",()=>{
    if(input.value=="" || input.value==" "){
        alert("Please add something!!!");
        input.style.display="none";
    }else{
        input.style.display="none";
        const li=document.createElement("li");
        li.innerText=input.value;
        let span=document.createElement("span");
        let img=document.createElement("img");
        img.setAttribute("src","img/Group_77.png");
        img.setAttribute("class","myphoto");
        li.style.listStyleType="none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value="";
    }
});
// Removing of items
myList.addEventListener("click",(e)=>{
        
   if(e.target.tagName="IMG"){
    e.target.parentElement.parentElement.remove()
   }
})
// Sorting of items
photo.addEventListener("click",()=>{
    photo.style.display="none";
    photo1.style.display="block";
    let arr=[];
    const info=[...myList?.children];
    info.forEach(item=>{
        arr.push(item.innerHTML);
    });
    arr.sort();
    myList.innerHTML="";
    arr.forEach(item=>{
        let liS=`<li>${item}</li>`;
        myList.innerHTML+=liS;
    });
});
photo1.addEventListener("click",()=>{
    photo1.style.display="none";
    photo.style.display="block";
    let arr=[];
    const info=[...myList?.children];
    info.forEach(item=>{
        arr.push(item.innerHTML);
    });
    arr.sort();
    arr.reverse();
    myList.innerHTML="";
    arr.forEach(item=>{
        let liS=`<li>${item}</li>`;
        myList.innerHTML+=liS;
    });
});
function darkMode(){
    let element=document.body;
    element.classList.toggle("dark-mode");
};