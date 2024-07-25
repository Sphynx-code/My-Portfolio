$("document").ready(()=>{
        if(localStorage.getItem("mode") == "black-grey"){
            $("body").addClass("darkmode");
        }
        else{
            $("body").removeClass("darkmode");
        }
})


$(".mode").on('click',()=>{
    $("body").toggleClass("darkmode");
    if(localStorage.getItem("mode") == "black-grey"){
            localStorage.setItem("mode","white")
    }
    else{
        localStorage.setItem("mode","black-grey")
    }

})