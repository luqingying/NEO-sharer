$(document).ready(function(){
    $("#search").click(function () {
        var content = $("#searchinput").val();
        $("#searchinputmodal").val(content);
        match(content);
    });

    $("#searchmodal").click(function () {
        var content = $("#searchinputmodal").val();
        match(content);
    });

    $("#searchinput").keypress(function(event){
        if(event.keyCode == 13){
            $("#search").click();
            var content = $("#searchinput").val();
            $("#searchinputmodal").val(content);
            match(content);
            event.preventDefault();
        }
    });

    $("#searchinputmodal").keypress(function(event){
        if(event.keyCode == 13){
            $("#searchmodal").click();
            var content = $("#searchinputmodal").val();
            match(content);
            event.preventDefault();
        }
    });

    /*回车确认搜索*/


    function match(searchcontent){
        var txt1,txt2,txt3;
        $("#luxian").html("");
        $("#jingdian").html("");
        $("#youji").html("");
        if(searchcontent =="成都"){
            txt1="<div class='search-small-block'><a href='luxian2.html'>路线二：三国文化</a></div><div class='search-small-block'><a href='luxian3.html'>路线三：诗词之乡</a></div>";
            txt2="<div class='search-small-block'><a href='chengdu.html'>成都 四川景点介绍</a></div>";
            txt3="<div class='search-small-block'><a href='chengduyouji.html'>成都|藏在巷子里的美味</a></div>";
        }

        else if(searchcontent.toLowerCase() =="chengdu".toLowerCase()){
            txt1="<div class='search-small-block'><a href='E-luxian2.html'>Route 2: Three Kingdoms Culture</a></div><div class='search-small-block'><a href='E-luxian3'>Route 3: Land of poetry</a></div>";
            txt2="<div class='search-small-block'><a href='Echengdu.html'>Chengdu,Introduction of Sichuan scenic spots</a></div>";
            txt3="<div class='search-small-block'><a href='Echengduyouji.html'>Chengdu, the delicacies hidden in the alley</a></div>";
        }

        else if(searchcontent.toLowerCase() =="culture".toLowerCase()||searchcontent.toLowerCase() =="cultural".toLowerCase()){
            txt1="<div class='search-small-block'><a href='E-luxian1.html'>Route 1：The Red Army line</a></div><div class='search-small-block'><a href='E-luxian2.html'>Route 2: Three Kingdoms Culture</a></div><div class='search-small-block'><a href='E-luxian3.html'>Route 3: Land of poetry</a></div>";
            txt2="<div class='search-small-block'><a href='Echengdu.html#wuhouci'>Temple of Marquis</a></div><div class='search-small-block'><a href='Esichuan.html#emeishan'>Mount Emei</a></div><div class='search-small-block'><a href='Echengdu.html#dujiangyan'>Dujiang Dam</a></div><div class='search-small-block'><a href='Exian.html#furongyuan'>Tang Paradise</a></div><div class='search-small-block'><a href='Exian.html#shanxibowuguan'>Shaanxi History Museum</a></div>";
            txt3="<div class='search-small-block'><a href='Exianyouji.html'>600 years of city wall, 1400 ginkgo tree, ancient capital Xi'an</a></div>";
        }
        else if(searchcontent =="文化"){
            txt1="<div class='search-small-block'><a href='luxian1.html'>路线一：红军路线</a></div><div class='search-small-block'><a href='luxian2.html'>路线二：三国文化</a></div><div class='search-small-block'><a href='luxian3.html'>路线三：诗词之乡</a></div>";
            txt2="<div class='search-small-block'><a href='chengdu.html#wuhouci'>武侯祠</a></div><div class='search-small-block'><a href='sichuan.html#emeishan'>峨眉山</a></div><div class='search-small-block'><a href='chengdu.html#dujiangyan'>都江堰</a></div><div class='search-small-block'><a href='xian.html#furongyuan'>大唐芙蓉园</a></div><div class='search-small-block'><a href='xian.html#shanxibowuguan'>陕西历史博物馆</a></div>";
            txt3="<div class='search-small-block'><a href=xianyouji.html'>6000年的城墙，1400年的银杏树，古都西安</a></div>";
        }
        else if(searchcontent =="诗词"){
            txt1="<div class='search-small-block'><a href='luxian3.html'>路线三：诗词之乡</a></div>";
            txt3="<div class='search-small-block'><a href='qingchengshanyouji.html'>拜水都江堰，问道青城山</a></div>";
        }
        else if(searchcontent.toLowerCase() =="poetry".toLowerCase()||searchcontent.toLowerCase() =="poem".toLowerCase()){
            txt1="<div class='search-small-block'><a href='E-luxian3.html'>Route 3: Land of poetry</a></div>";
            txt3="<div class='search-small-block'><a href='Eqingchengshanyouji.html'>Worship water Dujiangyan, asked Qingcheng Mountain</a></div>";
        }
        else if(searchcontent =="三国"){
            txt1="<div class='search-small-block'><a href='luxian2.html'>路线二：三国文化</a></div>";
            txt2="<div class='search-small-block'><a href='chengdu.html#wuhouci'>武侯祠</a></div>";
        }

        $("#luxian").html(txt1);
        $("#jingdian").html(txt2);
        $("#youji").html(txt3);
    }
});

