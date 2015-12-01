<!DOCTYPE html>

<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<title>About Me - Yvonne Chen</title>
</head>
<body onload = "init()">
<div id="popup_holder">
	<div class="popup" id = "chorus"><img src="images/chorus.jpg" width="400" height="310"/><p>At St. Mary's Church in Newark, NJ.</p></div>
	<div class="popup" id = "chikki"><img src="images/chikki.jpg" width="604" height="453"/><p>This is Chikki, my pet Muscovy duck (2003-2005). She had an equally adorable sister named Tom.</p></div>
</div>
<div id="blanket"></div>
	<?php
		include 'header.php';
	?>
<div id="outer">
	<div id="content">
		<a href="top"></a>
		<div class="center"><h3>about me</h3></div>
		<div class="dividertop"></div>
		<div id="normalcontent">
			<div class="contentarea">
				<!-- Normal content area start -->
				<img src="images/headshot_web.jpg" class="left" style="margin-bottom:150px" alt="A headshot of me" />
				<p>Hello! My name is <strong>Yvonne Chen</strong>. I'm a first-year graduate student working towards a
				Ph.D in Computer Science at the University of Washington.
				</p>
				<p>My current research interest is broadly in <strong>human-computer interaction</strong>.
				I want to understand why people use computing technology, how they use it, and what I can do to improve their experiences.
				Particularly, I am interested in the HCI aspects of music, language, interactive media and video games.
				</p>
				<p> My research experience is described in detail on the <a href="projects.php">research</a> page.
				For all else, take a look at my <a href="resume.php">resum&eacute</a>.</p>
				<p>I like to <a href="javascript:void(0)" class="click_popup" title="chorus">sing</a> and <a href="http://web.njit.edu/~alonso/halloween_web/NickRusso13b.htm" target="_blank">stay active</a> (#39),
				especially through weightlifting and badminton.
				Other times, I unwind with video games. I'm also fascinated by Russian literature, both classic and modern - my favorite is Sergei Lukyanenko's <em>World of Watches</em> series.
				After retirement, I'll buy a house with a garden and raise <a href="javascript:void(0)" class="click_popup" title = "chikki">ducks</a> again.
				</p>
                <p>I have a Twitter account dedicated to the scones (and other baked goods) of Seattle (and wherever my travels lead me). Follow me <a href="http://twitter.com/seattlescones" target="_blank">@SeattleScones</a> as I learn how to review food in 140 characters or less.</p>
				</br>
				<p>For academic inquiries: evechen@uw.edu</br>
                For everything else: yvonnechen.91@hotmail.com
                </p>
			</div>
		</div>
	</div>

	<?php
		include "footer.php";
	?>
</div>
</body>
</html>