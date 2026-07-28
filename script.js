const pages=document.querySelectorAll(".page");

let currentPage=0;

function showPage(index){

pages.forEach(page=>page.classList.remove("active"));

pages[index].classList.add("active");

}

document.getElementById("next").addEventListener("click",()=>{

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

}

});

document.getElementById("previous").addEventListener("click",()=>{

if(currentPage>0){

currentPage--;

showPage(currentPage);

}

});

document.getElementById("openBook").addEventListener("click",()=>{

currentPage=1;

showPage(currentPage);

});