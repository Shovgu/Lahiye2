const addSign=document.querySelector(".add-sign");
const input=document.querySelector(".input");
const text=document.querySelector(".text");
const ul=document.querySelector("ul");
const remove=document.querySelector(".delete") 
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
        ul.append(li);
        li.style.listStyleType="none";
        input.value="";
    }
});