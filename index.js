$(document).ready(()=>{
    $("main").hide();
    $("la").hide();
    $("body").click(()=>{
        $("nav").animate({
            marginTop:"-560px",
        },1000)
        $("main").show();
        $("la").show();
        // $("nav > .cover").animate({
        //     opacity:"0"
        // },5000)
    })



    






});

