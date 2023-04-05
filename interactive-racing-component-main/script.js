var ratingButtons = document.getElementsByClassName("rating");

function selRating(val){
    for(let i=0;i<5;i++){
        if(val==ratingButtons[i]){
            console.log(i);
        }

    }
    val.style.opacity= 0.5;
    val.style.borderWidth="2px";
    val.style.borderColor="var(--Dblue)";
    val.style.borderStyle="solid";
    for(let j=0;j<5; j++){
        if(ratingButtons[j]!=val){
            ratingButtons[j].style.opacity= 1;
            ratingButtons[j].style.borderWidth="0px";
        }
    }
}


function cont(){
    for(let i=0; i<5;i++){
        if(ratingButtons[i].style.borderWidth=="2px"){
            let page1 = document.getElementById("page1");
            page1.style.display = "none";
            let page2 = document.getElementById("page2");
            page2.style.display = "flex";
            let response = document.getElementById("thank1");
            let value = i+ 1;
            response.innerText = "You selected " + value + " out of 5";
        }
    }
}