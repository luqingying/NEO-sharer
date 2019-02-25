/**
 * Created by luqingying on 2018/3/19.
 */
$(document).ready(function(){
    var n=1;
    $("#message button").click(function(){
       var text = $("#message textarea").val();
       var node = $(".media:first").clone();
        $("#comment").prepend(node);
       $( $(".message_content").get(0)).text(text);
       $( $(".message_time").get(0)).text(++n+"楼 "+new Date().toLocaleString()+" 发表");
        $("#message textarea").val("");
    });
});