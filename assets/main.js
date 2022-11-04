const addSign=document.querySelector(".add-sign");
addSign.addEventListener("click",()=>{
    input.style.display="block";
});
const text=document.querySelector(".text");
const input=document.querySelector(".input");
const span=document.querySelectorAll("span");
const ul=document.querySelector("ul");
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
        img.setAttribute("src","img/delete.png");
        img.setAttribute("class","remove");
        li.style.listStyleType="none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value="";
        const remove=document.querySelector(".remove");
        remove.addEventListener("mouseover",()=>{
            remove.src="img/delete1.png";
        });
        remove.addEventListener("mouseout",()=>{
            remove.src="img/delete.png";
        });
    }
});

// Removing of items
const myList=document.getElementById("myList");
myList.addEventListener("click",(e)=>{ 
    if(e.target.tagName="IMG"){
        e.target.parentElement.parentElement.remove();
   };

});
// Sorting of items
const photo=document.querySelector(".photo");
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
photo.addEventListener("mouseover",()=>{
    photo.src="./img/sort-bold1.png";
});
photo.addEventListener("mouseout",()=>{
    photo.src="./img/sort1.png";
});
const photo1=document.querySelector(".photo1");
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
photo1.addEventListener("mouseover",()=>{
    photo1.src="./img/sort-bold2.png";
});
photo1.addEventListener("mouseout",()=>{
    photo1.src="./img/sort2.png";
});
// AZ
const az=document.querySelector(".az");
const h1=document.querySelector("h1");
az.addEventListener("click",()=>{
    h1.innerText="Görüləcək işlər siyahısı";
    text.innerText="Əlavə et";
});
// RU
const ru=document.querySelector(".ru");
ru.addEventListener("click",()=>{
    h1.innerText="Список дел";
    text.innerText="Добавить";
});
// EN
const en=document.querySelector(".en");
en.addEventListener("click",()=>{
    h1.innerText="To-Do List";
    text.innerText="Add";
});