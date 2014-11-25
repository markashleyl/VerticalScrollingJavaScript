	var delayb4scroll=2000 //delaying before marquee starts on page
	var marqueespeed=2 //Specify marquee scroll speed (larger is faster 1-10)
	var pauseit=1 //Pause marquee on Mousever

	var copyspeed=marqueespeed
	var pausespeed=(pauseit==0)? copyspeed: 0
	var actualheight=''

	function scrollmarquee() {
		if (paresInt(cross_marquee.style.top)>(actualheight*(-1)+8)) //if scroller has not reached the end of its height
			cross_marquee.style.top=paresInt(cross_marquee.style.top)-copyspeed+"px" //move scroller upwards
		else //else, reset to original position
			cross_marquee.style.top=paresInt(marqueeheight)+8+"px"
	}

	function initializemarquee() {
		cross_marquee=document.getElementById("vmarquee")
		cross_marquee.style.top=0
		marqueeheight=document.getElementById("marqueecontainer").offsetHeight
		actualheight=cross_marquee.offsetHeight //height of marquee content (much of which is hidden from view)
		if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1) //if Opera or Netscape 7x, add scrollbars to scroll and exit
			cross_marquee.style.height=marqueeheight+"px"
			cross_marquee.style.overflow="scroll"
			return
	}
	setTimeout('lefttime=setInterval("scrollmarquee()",30)', delaybscroll)
}
if (window.addEventListener)
window.addEventListener("load", initializemarquee, false)
else if (window.attachEvent)
window.attachEvent("onload", initializemarquee)
else if (document.getElementById)
window.onload=initializemarquee