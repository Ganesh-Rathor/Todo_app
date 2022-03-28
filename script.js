const item = document.getElementById("items");
const addWork =document.getElementById("inCheck");
const addText =document.getElementById("inText");
const remaining = document.getElementById("remain");
const displayall = document.getElementById("all");
const displayactive = document.getElementById("active");
const displaycompleted = document.getElementById("complete");
const footer = document.querySelector("footer");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

let items =[];
let j = 0;
let count=0;

addWork.addEventListener("click",addworklist);
footer.addEventListener("click",footerFunction);
window.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        addworklist();
    }
});

sun.addEventListener("click",()=>{
    sun.style.display="none";
    moon.style.display="flex";
    
    document.querySelector("body").classList.remove("dark_body");
    document.querySelector("main").classList.remove("main_dark");
})
moon.addEventListener("click",()=>{
    moon.style.display="none";
    sun.style.display="flex";
    
    document.querySelector("body").classList.add("dark_body");
    document.querySelector("main").classList.add("main_dark");

})


function footerFunction(e){
    footeroff();
    e.target.classList.add("activeFooter");
    if(e.target.id === 'all'){
        displayallwork();
    }
    else if(e.target.id === 'active'){
        displayallwork();
        item.querySelectorAll(".item").forEach((element)=>{
            if(element.firstElementChild.checked === true){
                element.style.display = "none";
            }
        })
    }
    else if(e.target.id === 'complete' ){
        displayallwork();
        item.querySelectorAll(".item").forEach((element)=>{
            if(element.firstElementChild.checked === false){
                element.style.display = "none";
            }
        })
    }
    else if(e.target.id === 'delete'){
        item.querySelectorAll(".item").forEach((element,i)=>{
            if(element.firstElementChild.checked === true){
        //         console.log(items.splice(i,1));
        //         console.log(items)
        //         j=0;
        //         for (let i = j; i < items.length; i++) {
        //             item.innerHTML += `<div class="item"><input type="checkbox"><p id="work">${items[i]}</p></div>`
        //             j++;
        //         }
                element.style.display = "none";
            }
        })
    }
    else{
        footeroff();
    }

}

function displayallwork(){
    item.querySelectorAll(".item").forEach((element)=>{
        element.style.display = "flex";
    });
}

function footeroff(){
    displayall.classList.remove("activeFooter");
    displayactive.classList.remove("activeFooter");
    displaycompleted.classList.remove("activeFooter");
    document.querySelectorAll("footer p").forEach( (element)=>{
        element.classList.remove("activeFooter");
    });
}
function addworklist(){
    if(addText.value === "")return;

    items.push(addText.value);
    setTimeout(()=>{
        
        addWork.checked=false;
    },100)
    addText.value = "";
    for (let i = j; i < items.length; i++) {
        item.innerHTML += `<div class="item"><input type="checkbox"><p id="work">${items[i]}</p></div>`
        j++;
    }
    count =0;
    item.querySelectorAll(".item").forEach((element)=>{
        if(element.firstElementChild.checked === false){
            count++;
        }
    });
    remaining.innerHTML = count;
   
}