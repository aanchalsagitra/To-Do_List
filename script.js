const button=document.getElementById("add_item");
const section=document.getElementById("to_do_list");
const input=document.getElementById("input");


// add the item into list 
const addItem=()=>{
    const para=document.createElement("p");
    para.innerHTML=input.value;
    
    
    const mainDiv=document.createElement("div");
    mainDiv.className="item";
    
    const iconDiv=document.createElement("div");
    const checkBox=document.createElement("i");
    const trashIcon=document.createElement("i");
    
    checkBox.className="fas fa-check-square";
    trashIcon.className="fas fa-trash";

    
    checkBox.style.color="lightgray";
    trashIcon.style.color="darkgray";

    // add click event on checkbox
    checkBox.addEventListener("click",()=>{
        checkBox.style.color="black";
        para.style.textDecoration =
            "line-through";
    

    });

    //add  event on trash
    trashIcon.addEventListener("click",()=>{
    mainDiv.remove();
    });

    iconDiv.appendChild(checkBox);
    iconDiv.appendChild(trashIcon);

    mainDiv.appendChild(para);
    mainDiv.appendChild(iconDiv);


    section.appendChild(mainDiv);

    input.value=""

};

// function emptyinput(){
    // var empty=input.value;
// if (empty==""){
//     alert("Please Enter the Input");
// }
// else{
button.addEventListener("click",addItem);
    // };


// emptyinput();
