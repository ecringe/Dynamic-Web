const menu = document.getElementById("menu");
const backButton = document.getElementById("backButton");
const hoverButtons = document.getElementsByClassName("hoverButton")

var currentHoverButton
var canClickHoverButton = true;

function backButtonClicked(){
    const buttonContents = currentHoverButton.querySelector(".buttonContents");
        const childDivs = buttonContents.querySelectorAll("div");

    buttonContents.style.opacity = 0;

    setTimeout(function(){
        buttonContents.style.width = 0;
        buttonContents.style.height = 0;
        buttonContents.style.right = "-10%";

        menu.style.left = "0%";

        buttonContents.style.opacity = 1;
        canClickHoverButton = true;
    }, 600)
}
function hoverButtonClicked(){
    const buttonContents = currentHoverButton.querySelector(".buttonContents");
        const childDivs = buttonContents.querySelectorAll("div");

    menu.style.left = "-55%";
    
    if(canClickHoverButton == true){
        canClickHoverButton = false;

        buttonContents.style.opacity = 0;
        setTimeout(function(){
            buttonContents.style.width = "100%";
            buttonContents.style.height = "100%";
            buttonContents.style.right = 0;

            buttonContents.style.opacity = 1;
            childDivs.forEach(childDiv => {
                if(childDiv.className.search("characterShowcase") == -1){
                    childDiv.style.opacity = 1;
                }
            });
        }, 600);
    }
    
};

backButton.addEventListener("click", function(){
    backButtonClicked();
});
for(var i = 0; i < hoverButtons.length; i++){
    hoverButtons[i].addEventListener("click", function(){
        currentHoverButton = this;
        hoverButtonClicked(); 
    });
}