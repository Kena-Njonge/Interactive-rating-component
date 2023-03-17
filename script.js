var ratingButtons = document.getElementsByClassName("rating");
var ratingObject = {button1: 0, button2: 0, button3: 0, button4: 0, button5: 0};
var ratingObjectarray = Object.entries(ratingObject);

function selRating(val){
    for(let i=0; i<5; i++){
        if(ratingButtons[i][1]==val){
            ratingButtons[i][1].style.opacity= 0.5;
            ratingButtons[i][1].style.borderWidth="2px";
            ratingButtons[i][1].style.borderStyle="solid"
            ratingButtons[i][1].style.borderColor="var(--Lgrey)"
            for(let j=0;j<5; j++){
                if(ratingButtons[i][1]!=ratingButtons[j][1]){
                    ratingButtons[j][1]= 0.5;
                    ratingObjectarray[j][1].style.opacity= 1;  
                }
            }
        }
    }
}


function cont(){
    for(let i=0; i<5;i++){
        if(ratingButtons[i][1]==1){
            let page1 = document.getElementsByClassName("request");
            page1.style.display = "none";
            let page2 = document.getElementsByClassName("submited");
            page2.style.display = "flex";
            let response = document.getElementById("thank1");
            let value = i+ 1;
            response.innerText = "You selected " + value + " out of 5";
        }
    }
}