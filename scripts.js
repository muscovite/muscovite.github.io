	var opened, blanket;
	function init()
	{
		var img_links = document.getElementsByClassName("click_popup");
		for (var x = 0; x < img_links.length; x++)
		{
			img_links[x].addEventListener("click", showImage);
			if(img_links[x].hasAttribute("attachEvent"))
				img_links[x].attachEvent("onclick", showImage);
		}
		var imgs = document.getElementsByClassName("popup");
		for (var x = 0; x < img_links.length; x++)
		{
			imgs[x].addEventListener("click", closeImage);
			if(imgs[x].hasAttribute("attachEvent"))
				imgs[x].attachEvent("onclick", closeImage);
		}
		blanket = document.getElementById("blanket");
		blanket.addEventListener("click", closeImage);
		if(blanket.hasAttribute("attachEvent"))
			blanket.attachEvent("onclick", closeImage);
	};
	function showImage(event)
	{
		var name = event.target.title;
		opened = document.getElementById(name);
		blanket.style.display = "block";
		opened.style.display = "block";
		
		var x = window.innerWidth;
		var y = window.pageYOffset;
		if(document.body.hasAttribute("scrollTop"))
		{
			x = document.documentElement.clientWidth;
			y = document.body.scrollTop;
		}
		opened.style.top = y + opened.firstChild.height/4 + "px";
		opened.style.left = x/2 - opened.firstChild.width/2 + "px";
	};
	
	function closeImage(event)
	{
		event.stopPropagation();
		opened.style.display = "none";
		blanket.style.display = "none";
	};