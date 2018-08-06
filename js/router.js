$(function(){

    $("#dynamic").load("../page/dynamic/dynamic-chat.html")
    $("#title").load("../page/title/title.html")



    //切换
    $(".menu_item").click(function() {

        $("#dynamic").load($(this).data("page"))

    })


})