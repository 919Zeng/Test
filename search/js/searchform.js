
$(document).ready(function(){
    if($("#globalsearchform_key")[0].value==""){
        $("#globalsearchform_key")[0].value="请输入搜索关键词";
        $("#globalsearchform_key").focus(function(){
            $("#globalsearchform_key")[0].value="";
        });
    }
    if($("#globalsearchform_key")[0].value=="请输入搜索关键词"){
        $("#globalsearchform_key").focus(function(){
            $("#globalsearchform_key")[0].value="";
        });
    }
});
//鎼滅储琛ㄥ崟鏍￠獙
$(document).ready(function(){

    $("#globalsearchform").submit(function(){
        if($("#globalsearchform_key")[0].value==""){
            alert("璇疯緭鍏ユ悳绱㈠叧閿瘝");
            return false;
        }
        return true;
    });
});