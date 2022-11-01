const addSign=document.querySelector(".add-sign");
const input=document.querySelector(".input");
const text=document.querySelector(".text");
const ul=document.querySelector("ul");
const img1=document.querySelector(".img");
const span=document.querySelectorAll("span");
const photo=document.querySelector(".photo");
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
        // span.className="myphoto";
        img.setAttribute("class","myphoto");
        span.style.display="block";
        li.style.listStyleType="none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value="";
    }
});
// const myphoto=document.querySelectorAll("span>img");
// myphoto.addEventListener("click",()=>{
//     myphoto.src="./img/Group_70.png";
// })

const remove=document.getElementsByClassName("myphoto");
remove.addEventListener("click",()=>{
    for(let i =0;i<remove.length;i++){
    remove[i].onclick=function(){
        let mainElement=this.parentElement;
        mainElement.style.display="none";
    }
}
})

// Removing of items
photo.addEventListener("click",()=>{
    let arr=[];
    const info=[...myList?.children];
    info.forEach(item=>{
        arr.push(item.innerHTML);
    })
    arr.sort();
    myList.innerHTML="";
    arr.forEach(item=>{
        let liS=`<li>${item}<li>`;
        myList.innerHTML+=liS;
    })

})