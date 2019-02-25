$(document).ready(function(){
    $("#三国文化,#诗词之乡").hide();

    $(".sangeluxian").change(function () {
        $("#红军路线,#三国文化,#诗词之乡").hide();
        var id_name = $(this).val();
        $("#"+id_name).show();
    });
});