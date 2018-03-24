(function($){
    $.fn.contentPages = function(productid){

        $("div#contentpages").empty();

        $.ajax({
            type: "POST",
            url:PDV_RP+"product/post.php",
            data: "act=contentpages&productid="+productid,
            success: function(msg){
                $("div#contentpages").append("<ul>");
                $("div#contentpages").append("<li id='pl' class='cbutton'>涓婁竴寮�</li>");
                $("div#contentpages").append(msg);
                $("div#contentpages").append("<li id='pn' class='pbutton'>涓嬩竴寮�</li>");
                $("div#contentpages").append("</ul>");


                var getObj = $('li.pages');

                if(getObj.length<2){
                    $("div#contentpages").hide();
                    $().setBg();
                    return false;
                }


                $('li.pages')[0].className='pagesnow';

                getObj.each(function(id) {

                    var obj = this.id;

                    $("li#"+obj).click(function() {

                        $('li.pagesnow')[0].className="pages";
                        this.className='pagesnow';
                        var clickid=obj.substr(2);
                        $().getContent(productid,clickid);
                        if($(".pagesnow").next()[0].id=="pn"){$("li#pn")[0].className="cbutton";}else{$("li#pn")[0].className="pbutton";}
                        if($(".pagesnow").prev()[0].id=="pl"){$("li#pl")[0].className="cbutton";}else{$("li#pl")[0].className="pbutton";}

                    });

                });


                //涓婁竴椤�
                $("li#pl").click(function() {
                    if($("li#pl")[0].className=="pbutton"){
                        var nowObj=$(".pagesnow").prev()[0].id;
                        var nextpageid=nowObj.substr(2);
                        $().getContent(productid,nextpageid);
                        $('li.pagesnow')[0].className="pages";
                        $("#"+nowObj)[0].className="pagesnow";
                        if($(".pagesnow").prev()[0].id=="pl"){$("li#pl")[0].className="cbutton";}else{$("li#pl")[0].className="pbutton";}
                        if($(".pagesnow").next()[0].id=="pn"){$("li#pn")[0].className="cbutton";}else{$("li#pn")[0].className="pbutton";}
                    }else{
                        return false;
                    }


                });


                //涓嬩竴椤�
                $("li#pn").click(function() {
                    if($("li#pn")[0].className=="pbutton"){
                        var nowObj=$(".pagesnow").next()[0].id;
                        var nextpageid=nowObj.substr(2);
                        $().getContent(productid,nextpageid);
                        $('li.pagesnow')[0].className="pages";
                        $("#"+nowObj)[0].className="pagesnow";
                        if($(".pagesnow").prev()[0].id=="pl"){$("li#pl")[0].className="cbutton";}else{$("li#pl")[0].className="pbutton";}
                        if($(".pagesnow").next()[0].id=="pn"){$("li#pn")[0].className="cbutton";}else{$("li#pn")[0].className="pbutton";}
                    }else{
                        return false;
                    }
                });

            }
        });
    };
})(jQuery);



//璇诲彇鍥剧墖

(function($){
    $.fn.getContent = function(productid,productpageid){

        $("#productloading").show();
        $("img#productpic").remove();

        $.ajax({
            type: "POST",
            url:PDV_RP+"product/post.php",
            data: "act=getcontent&productpageid="+productpageid+"&productid="+productid+"&RP="+PDV_RP,
            success: function(msg){

                $("body").append("<img id='productpic' class='productpic' src='"+PDV_RP+msg+"'>");

                $("img#productpic").load(function(){
                    var outw=parseInt($("div.piczone").css("width"));
                    var outh=parseInt($("div.piczone").css("height"));

                    var w=$("img#productpic")[0].offsetWidth;
                    var h=$("img#productpic")[0].offsetHeight;

                    if(w>=h){
                        if(w>outw){$("img#productpic")[0].style.width=outw+"px";}
                    }else{
                        if(h>outh){$("img#productpic")[0].style.height=outh+"px";}
                    }


                    $("#productloading").hide();
                    $("img#productpic").appendTo($("#productview"));
                    $().setBg();
                });

                $("img#productpic").click(function(){


                    $("body").append("<img id='pre' src='"+$("img#productpic")[0].src+"'>");

                    $.blockUI({
                        message: "<img  src='"+$("img#productpic")[0].src+"' class='closeit'>",
                        css: {
                            top:  ($(window).height() - $("#pre")[0].offsetHeight) /2 + 'px',
                            left: ($(window).width() - $("#pre")[0].offsetWidth/2) /2 + 'px',
                            width: $("#pre")[0].offsetWidth + 'px',
                            backgroundColor: '#fff',
                            borderWidth:'3px',
                            borderColor:'#fff'
                        }
                    });
                    $("#pre").remove();

                    $(".closeit").click(function(){
                        $.unblockUI();
                    });


                });


            }
        });
    };
})(jQuery);


//鍒濆鍖栬幏鍙栫炕椤靛拰鍥剧墖
$(document).ready(function(){
    var productid=$("input#productid")[0].value;
    $().contentPages(productid);
    $().getContent(productid,0);
});


//鏀寔鍙嶅鎶曠エ
$(document).ready(function(){

    $("span#zhichi").click(function(){

        var productid=$("input#productid")[0].value;

        $.ajax({
            type: "POST",
            url:PDV_RP+"product/post.php",
            data: "act=zhichi&productid="+productid,
            success: function(msg){
                if(msg=="L0"){
                    $().popLogin(0);
                }else if(msg=="L1"){
                    $().alertwindow("瀵逛笉璧凤紝鎮ㄥ凡缁忔姇杩囩エ浜�","");
                }else{
                    $("span#zhichinum").html(msg);
                }
            }
        });
    });


    $("span#fandui").click(function(){

        var productid=$("input#productid")[0].value;

        $.ajax({
            type: "POST",
            url:PDV_RP+"product/post.php",
            data: "act=fandui&productid="+productid,
            success: function(msg){
                if(msg=="L0"){
                    $().popLogin(0);
                }else if(msg=="L1"){
                    $().alertwindow("瀵逛笉璧凤紝鎮ㄥ凡缁忔姇杩囩エ浜�","");
                }else{
                    $("span#fanduinum").html(msg);
                }
            }
        });
    });

});


//鍔犲叆鏀惰棌
$(document).ready(function(){

    $("div#addfav").click(function(){

        var productid=$("input#productid")[0].value;

        $.ajax({
            type: "POST",
            url:PDV_RP+"product/post.php",
            data: "act=addfav&productid="+productid+"&url="+window.location.href,
            success: function(msg){
                if(msg=="L0"){
                    $().popLogin(0);
                }else if(msg=="L1"){
                    $().alertwindow("鎮ㄥ凡缁忔敹钘忎簡褰撳墠缃戝潃","");
                }else if(msg=="OK"){
                    $().alertwindow("宸茬粡鍔犲叆鍒版敹钘忓す",PDV_RP+"member/member_fav.php");
                }else{
                    alert(msg);
                }
            }
        });
    });

});


//鐗堜富绠＄悊
$(document).ready(function(){

    var productid=$("input#productid")[0].value;

    $.ajax({
        type: "POST",
        url:PDV_RP+"product/post.php",
        data: "act=ifbanzhu&productid="+productid,
        success: function(msg){
            if(msg=="YES"){
                $("#banzhu").append("鐗堜富绠＄悊 | <span id='banzhutj'>鎺ㄨ崘</span> | <span id='banzhudel'>鍒犻櫎</span> | <span id='banzhudelmincent'>鍒犻櫎骞舵墸鍒�</span> |").show();
                $().setBg();

                //鎺ㄨ崘鎿嶄綔
                $("#banzhutj").click(function(){
                    $.ajax({
                        type: "POST",
                        url:PDV_RP+"product/post.php",
                        data: "act=banzhutj&productid="+productid,
                        success: function(msg){
                            if(msg=="OK"){
                                $().alertwindow("鎺ㄨ崘鎴愬姛","");
                            }else{
                                alert(msg);
                            }
                        }
                    });

                });

                //鍒犻櫎鎿嶄綔
                $("#banzhudel").click(function(){
                    $.ajax({
                        type: "POST",
                        url:PDV_RP+"product/post.php",
                        data: "act=banzhudel&productid="+productid,
                        success: function(msg){
                            if(msg=="OK"){
                                $().alertwindow("鍒犻櫎鎴愬姛","../class/");
                            }else{
                                alert(msg);
                            }
                        }
                    });

                });


                //鍒犻櫎骞舵墸鍒嗘搷浣�
                $("#banzhudelmincent").click(function(){
                    $.ajax({
                        type: "POST",
                        url:PDV_RP+"product/post.php",
                        data: "act=banzhudel&koufen=yes&productid="+productid,
                        success: function(msg){
                            if(msg=="OK"){
                                $().alertwindow("鍒犻櫎骞舵墸鍒嗘垚鍔�","../class/");
                            }else{
                                alert(msg);
                            }
                        }
                    });

                });

            }else{
                $("#banzhu").empty().hide();
            }
        }
    });

});