

document.write("<style type=\"text/css\">.kfpopupdiv img{display:inline;}" +
    "</style><link type=\"text/css\" rel=\"stylesheet\" href=\"/templets/default/kefu/skin/355/skin.css\">" +
    "<style type=\"text/css\">.kfoutbox{right:20px; kf54kefuqqtop:100px;}.kfboxmenu{display:none;}/**/</style>" +
    "<div id=\"kfoutbox\" class=\"kfoutbox\"><div id=\"kfinbox\" class=\"kfbox\"><div class=\"kf54kefuqqtop\">" +
    "<img src=\"http://www.yx1178.com/kefu/skin/355/top.gif\" /><div id=\"kfboxclose\" class=\"kfboxclose\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>" +
    "<div class=\"kf54kefuqqbg\"><div class=\"kefu54kefunetli\">" +
    "<div class=\"kefu54kefunetpicimgcenter\"><a target=\"_blank\" href=\"/lx\"><img src=\"http://www.yx1178.com/kefu/face/114.gif\" vspace=\"4\" border=\"0\" align=\"absmiddle\" title=\"在线客服\"/></a></div>" +
    "</div><div style=\"clear: both;\"></div></div><div class=\"kf54kefuqqbottom\"><a href=\"/lx\" target=\"_blank\"><img src=\"http://www.yx1178.com/kefu/skin/355/bottom.gif\" /></a></div></div>" +
    "<div id=\"kfboxmenu\" class=\"kfboxmenu kfboxmenuright\"></div><div style=\"clear: both;\"></div></div><div style=\"clear: both;\"></div></div>");

var default_top_ps=100;
var evans_agt = navigator.userAgent.toLowerCase();
var evans_ie = ((evans_agt.indexOf("msie") != -1) && (evans_agt.indexOf("opera") == -1) && (evans_agt.indexOf("omniweb") == -1));
var evans_mymovey = new Number();
function evans_IeTrueBody() {
    return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement: document.body;

}
function evans_GetScrollTop() {
    return evans_ie ? evans_IeTrueBody().scrollTop: window.pageYOffset;
}
function evans_heartBeat() {
    evans_diffY = evans_GetScrollTop();
    evans_mymovey += Math.floor((evans_diffY - document.getElementById('kfoutbox').style.top.replace("px", "") + default_top_ps) * 0.1);
    document.getElementById('kfoutbox').style.top = evans_mymovey + "px";

}
var evans_tmpintval = window.setInterval("evans_heartBeat()", 1);
if(document.getElementById('kfboxclose')){
    document.getElementById('kfboxclose').onclick = function(){
        window.clearInterval(evans_tmpintval);
        document.getElementById('kfoutbox').style.display = 'none';
    }
}

var tips;
function initFloatTips() {
    tips = document.getElementById("kfoutbox");
    document.getElementById("kfboxmenu").onmouseover = function(){
        document.getElementById("kfboxmenu").style.display = "none";
        document.getElementById("kfinbox").style.display = "block";
    };
    var browser = navigator.userAgent;
    if (browser.indexOf("MSIE") > 0) {
        document.getElementById("kfinbox").onmouseleave = boxout;
    }else{
        document.getElementById("kfinbox").onmouseout = function(e){
            try {
                var p = (this.compareDocumentPosition(e.relatedTarget) == 20);
            } catch(ex) {
                var p = false;
            }
            !(this === e.relatedTarget || (this.contains ? this.contains(e.relatedTarget) : p)) && boxout.call(this);
        };
    }
    /*moveTips();*/
};