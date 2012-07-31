/**
 * @author Mack
 */

(function($) {

$(document).ready(function() {

    var shops     = $('div.container_shop');
    var SCROLL_TIME       = 700;

    init();

    function init()
    {
        setBody();
        setEvents();
        resizeWindow();
    }

    function setBody() {
        var windowWidth = $(window).width();

	    /*
        var maxHeight = 0;
        shops.each(function(idx) {
            var curHeight = $(this).height();
            if (maxHeight == 0) {
                maxHeight = curHeight;
            } else {
                if (maxHeight < curHeight) {
                    maxHeight = curHeight;
                }
            }
            if (idx == shops.size() - 1) {
                for (var i = 0; i < shops.size(); i++) {
                    $('#container_' + shopName[i] + '_in').height(maxHeight + 16);
                }
            }
        });
        */
    }

    function resizeWindow() {
        $(window).resize(function() {
            setBody();
        });
    }

	function setEvents() {
		var nav = document.getElementById("nav_list");
		var about = document.getElementById("about");
		var a_elems = nav.getElementsByTagName("a");
		
		alert(a_elems.length);
		for (i = 0; i < a_elems.length; i++) {
			alert(a_elems[i]);
			a_elems[i].addEventListener("click", scrollToAnchor, false);
		}
		
	}	
    function scrollToAnchor() {
    	var pTop = 0;
    	var pLeft = 0;
		var mTop = [0, 1000, 2000];
		var mLeft = [0, 1100, 2200];		
		
		var anchor  = $(this).attr('href');
		pLeft = mLeft[1];
				
		$('html,body').animate({
		    scrollTop: pTop,
		    scrollLeft: pLeft
		}, {
		    duration: SCROLL_TIME,
		    easing: 'easeOutCubic',
		    queue: false
		});
		
		return false;
		
		
		
		
		
		
		
		
		
		
		
		
		/*		
		var tgtContent = anchor.match(/^#(.+?)$/);
		var tgtCode = '';
		var code    = '';
		var sName   = '';
		var tgt     = [];
		var objTgt  = null;
		var pTop    = 0;
		var pLeft   = 0;
		
		
		if (tgtContent) {
		  tgtCode = tgtContent[1];
		}
		for(var i=0; i<tgtContent.length; i++) {
		  console.log(tgtContent[i]);
		};
		
		tgt = tgtCode.split('_');
		if (tgt[1]) {
		    code  = tgt[0] + '_';
		    sName = tgt[1];
		} else {
		    code = tgt[0];
		}

		objTgt = $('a[name="' + code + sName + '"]');
		
		if (code.indexOf('top') > -1) {
		    pTop = 0;
		} else {
		    pTop = parseInt(Math.ceil(objTgt.position().top));
		}
		
		if (sName == '') {
		    pLeft = shopLeft[0];
		} else if (sName == 'sora') {
		    pLeft = shopLeft[1];
		} else {
		    pLeft = shopLeft[2];
		}
		
		$('html,body').animate({
		    scrollTop: pTop,
		    scrollLeft: pLeft
		}, {
		    duration: SCROLL_TIME,
		    easing: 'easeOutCubic',
		    queue: false
		});
		
		return false;
		*/
    }
});

})(jQuery);