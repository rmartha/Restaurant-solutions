  

document.getElementById("sign").style.display = "none"; 

function showaccount()
        {
           document.getElementById("sign").style.display = "block"; 
        }

//function validate(){
//  
//    if((document.getElementById("txtusername").innerHTML == ("ramya")) && (document.getElementById("txtpassword").innerHTML==("ramya")))
//    {
//        alert("congrats");
//    }else{
//        alert("try again");
//    }
//    
//}



var course = {
title:"training",
instructor : "ramya",
views : 0,
level : 1,
updateviews: function(){
return ++course.views;
}
}
console.log(course);