var text1 = document.querySelector("h5");
var btn1 = document.querySelector(".btn");
var flag = 0;
btn1.addEventListener("click" , function() {
   
    if(flag == 0){
        text1.style.color = "green";
        text1.innerHTML = "Friends"
        btn1.innerHTML = "Removed"

        flag = 1;
    }
    else{
        text1.style.color = "red";
        text1.innerHTML = "Stranger"
        btn1.innerHTML = "Add Friend"
        flag = 0;
    }
});


