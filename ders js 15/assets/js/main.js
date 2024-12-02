let form = document.getElementById("form");
let input = document.getElementById("inp");
let ul = document.getElementById("ul");

form.addEventListener("submit", formget);

function formget(e) {
    e.preventDefault();

    let li = document.createElement("li");
    li.innerHTML = input.value; 

    let box = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i>'; 

    let btn1 = document.createElement("button");
    btn1.innerHTML = '<i class="fa-solid fa-pencil"></i>';

    let btn2 = document.createElement("button");
    btn2.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    btn.setAttribute("class", "btn");
    btn1.setAttribute("class", "btn1 , btn");
    btn2.setAttribute("class", "btn2 , btn");

    box.appendChild(btn);
    box.appendChild(btn1);
    box.appendChild(btn2);

    li.appendChild(box);

    if(input.value){
        ul.appendChild(li);
    }else{
        alert("Yazi yoxdur")
    }

    form.reset();

    btn.addEventListener("click", () => {
        li.classList.toggle("line");  
    });

    btn2.addEventListener("click", () => {
        ul.removeChild(li);  
    });

    
    btn1.addEventListener("click", () => {
        let newText = prompt("Yaziyi deyis:");
        if (newText) {
            li.innerHTML = newText;  
            li.appendChild(box); 
        }
    });
}