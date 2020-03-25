var data = [[1.21, 1], [1.22, 1], [1.23, 1], [1.24, 3],
[1.25, 3], [1.26, 4], [1.27, 5], [1.28, 8], [1.29, 8],
[1.30, 9], [1.31, 10], [2.01, 10], [2.02, 10], [2.03, 10],
[2.04, 11], [2.05, 11], [2.6, 16], [2.07, 16], [2.08, 17],
[2.09, 18], [2.10, 18], [2.11, 18], [2.12, 18], [2.13, 18],
[2.14, 18], [2.15, 18], [2.16, 20], [2.17, 22], [2.18, 22],
[2.19, 24], [2.20, 24], [2.21, 26], [2.22, 26], [2.23, 28],
[2.24, 30], [2.25, 31], [2.26, 32], [2.27, 32], [2.28, 34],
[2.29, 39], [3.01, 40], [3.02, 41], [3.03, 42], [3.04, 42],
[3.05, 44], [3.06, 45], [3.07, 45], [3.08, 45], [3.09, 45],
[3.10, 47], [3.11, 48], [3.12, 49], [3.13, 50], [3.14, 53],
[3.15, 59], [3.16, 67], [3.17, 77], [3.18, 100], [3.19, 108],
[3.20, 135], [3.21, 153], [3.22, 169], [3.23, 195], [3.24, 216],
[3.25, 235], [3.26, 260]];

// var timeoutID = window.setInterval((() => console.log("Hello!")), 1000);

// window.clearInterval(timeoutID);

var dataset = [
    {
        label: "confirmed case",
        data: data
    }
];

var count = 0;
var done = 0;
//console.log(data[count][1]);

var opstions = {
    series: {
        lines: { show: true },
        point: {
            radius: 3,
            show: true
        }
    }
};
//$.plot($(".form"),dataset,opstions);
//
$("img").hide();
$("main").hide();
$("la").hide();
$("body").click(() => {
    $(".egg").animate({
        width: "60px",
        height: "60px",
        opacity: "0.5",
        left:"-=20px",
        top:"-=60px"
    },60000,()=>{$(".egg").animate({
        width: "120px",
        height: "120px",
        opacity: "0.5",
        left:"-=40px",
        // top:"-=40px"
    },6000);});
    $(".egg2").animate({
        width: "60px",
        height: "60px",
        opacity: "0.5",
        left:"-=100px",
        top:"-=30px"
    },60000,()=>{$(".egg2").animate({
        width: "120px",
        height: "120px",
        opacity: "0.5",
        left:"-=60px",
        top:"-=50px"
    },6000);});

    $("img").show();
    $("nav").animate({
        marginTop: "-560px",
    }, 1000)
    $("main").show();
    $("la").show();
    $("nav").css({ position: "fixed" });
    $("main").css({
        position: "relative",
        top: "120px"
    })
    $("la").css({
        position: "relative",
        top: "120px"
    })
    window.setInterval(timeoutID)
});
var plu = 0;

var timeoutID = window.setInterval((() => {
    $("div1").replaceWith("<div1 class=" + "num" + ">" + data[count][1] + "</div1>");
    if (count > 1)
        plu = data[count][1] - data[count - 1][1];
    $("div4").replaceWith("<div4 class=" + "plus" + ">+" + plu + "</div4>");
    $("div4").css({
        position: "relative",
        top: "40px"
    })
    $("div4").animate({
        top: "8px"
    }, 1000);
    console.log(data[count][1]);
    if (count == 65) {
        count = 0;
        done = 1;
        console.log(count);
        plu = 0;
        $(".pray").animate({
            opacity:"1"
        },5000)


    }
    else {
        count = count + 1;
    }
    $("day").replaceWith("<day class=day>" + data[count][0] + "</day>")
    if (done == 1)
        window.clearInterval(timeoutID);
}), 1000);


// $(".togScreen").click(() => {
//     $(".togScreen").replaceWith("<div class=togScreen2></div>");
//     window.clearInterval(timeoutID);
// });
// $(".togScreen2").click(() => {
//     $(".togScreen2").replaceWith("<div class=togScreen></div>");
//     window.setInterval(timeoutID);
// });


