
//Blog:http://www.frontopen.com/
var popWin = {
    scrolling: 'auto',
//是否显示滚动条 no,yes,auto

int: function() {
    this.mouseClose();
    this.closeMask();
//this.mouseDown();

},

showWin: function(width, height, title, src) {
    var iframeHeight = height - 70;
    var marginLeft = width / 2;
    var marginTop = height / 2;
    var inntHtml = '';
    inntHtml += '<div id="mask" style="width:100%; height:100%; position:fixed; top:0; left:0; z-index:999;background:#000; filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity:0.5; padding:20px;"></div>'
    inntHtml += '<div id="maskTop" style="width: ' + width + 'px; height: ' + height + 'px; background: #fff; color: #333; position: fixed; top: 50%; left: 50%; margin-left: -' + marginLeft + 'px; margin-top: -' + marginTop + 'px; z-index: 2999; -moz-box-shadow: 0 5px 15px rgba(0,0,0,.5); -webkit-box-shadow:0 5px 15px rgba(0,0,0,.5); box-shadow:0 5px 15px rgba(0,0,0,.5);border-radius: 6px;">'
    inntHtml += '<div id="maskTitle" style="font-size: 1.2em; color: #231815; padding: 15px; border-bottom: 1px solid #e5e5e5; position: relative;">'
    inntHtml += '' + title + ''
    inntHtml += '<div id="popWinClose" style="width: 12px; height: 12px; cursor: pointer; position: absolute; top: 23px; right: 20px; background-image: url(Content/images/close_off.svg);"></div>'
    inntHtml += '</div>'
    inntHtml += '<iframe width="' + width + '" height="' + iframeHeight + '" frameborder="0" scrolling="' + this.scrolling + '" src="' + src + '"></iframe>';

    $("body").append(inntHtml);
    this.int();
},

mouseClose: function() {
    $("#popWinClose").on('mouseenter', 
        function() {
            $(this).css("background-image", "url(Content/images/close.svg)");
        });

    $("#popWinClose").on('mouseleave', 
        function() {
            $(this).css("background-image", "url(Content/images/close_off.svg)");
        });
},

closeMask: function() {
    $("#popWinClose,#mask").on('click', 
        function() {
            $("#mask,#maskTop").fadeOut(function() {
                $(this).remove();
            });
        });
}

/*mouseDown : function(){
		var dragging = false;
		var iX, iY;
		//var elmen = $("div#maskTop");
		$("#maskTop").on('mousedown' , function(e){
			dragging = true;
                iX = e.clientX - this.offsetLeft;
                iY = e.clientY - this.offsetTop;
                this.setCapture && this.setCapture();
                return false;
		});
		document.onmousemove = function(e) {
                if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                var oY = e.clientY - iY;
                $("#maskTop").css({"left":oX + "px", "top":oY + "px"});
                return false;
                }
            };
            $(document).mouseup(function(e) {
                dragging = false;
                $("#maskTop")[0].releaseCapture();
                e.cancelBubble = true;
            })
        },*/

    };