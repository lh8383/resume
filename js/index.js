/**
 * Created by liuhuan on 2016/9/16.
 */
//第一屏动画
        $("#selfinfo").mouseenter(function () {
            //$("#selfinfo > img")[0].src = "images/8.jpg";
            $("#selfinfo > img").attr('src', 'images/8.jpg');
            $("#selfinfo > img").css({
                'border': '3px solid yellowgreen',
            })
        });
    $("#selfinfo").mouseleave(function () {
        $("#selfinfo > img")[0].src = "image/3.jpg";
        $("#selfinfo > img").css({
            'border-top': '3px solid green',
            'border-bottom': '3px solid pink',
            'border-left': '3px solid pink',
            'border-right': '3px solid green'
        })
    });
    $("aside a").hover(function () {
        $(this).find("b").fadeToggle(200, "easeInOutCubic");
    })
//第二屏动画
    window.onscroll = function () {
        if ($(".second").hasClass("current")) {
            $(".before").addClass('animated bounce')
        }
    }


