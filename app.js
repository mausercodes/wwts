	$(function() {

		$(".theme").on("click", function() {
			$( "ul li a.character1" ).addClass( "funkyLinks1 funkyLinks" );
			$( "ul li a.character2" ).addClass( "funkyLinks2 funkyLinks" );
			$( "ul li a.character3" ).addClass( "funkyLinks3 funkyLinks" );
			$( "ul li a.character4" ).addClass( "funkyLinks4 funkyLinks" );
			$( "ul li a.character5" ).addClass( "funkyLinks5 funkyLinks" );
			
		});
		$(".themeOg").on("click", function() {
			$( "ul li a.character1" ).removeClass( "funkyLinks1 funkyLinks" );
			$( "ul li a.character2" ).removeClass( "funkyLinks2 funkyLinks" );
			$( "ul li a.character3" ).removeClass( "funkyLinks3 funkyLinks" );
			$( "ul li a.character4" ).removeClass( "funkyLinks4 funkyLinks" );
			$( "ul li a.character5" ).removeClass( "funkyLinks5 funkyLinks" );
			
		});

		$("a").on("click", function(){
			var image = $(this).data("image");
			var name = $(this).text();
			$('.mainImage').empty();
			$('.quoteContainer').empty();
			$(image).appendTo(".mainImage");
			$('p.title').html('Click my face.');
			$('h1.title').html('What would ' + name + ' say?');
		});

		$(".mainImage").on("click", function() {
			var imageClass = $(this).find("img").attr("class");
			if (imageClass === "image3"){
				peterGriffin.talk();
			}
			else if (imageClass === "image4"){
				cartman.talk();
			}
			else if (imageClass === "image2"){
				mrT.talk();
			}
			else if (imageClass === "image1"){
				homer.talk();
			}
			else if (imageClass === "image5"){
				robFord.talk();
			}
		});
	});

	var homer = {
		quote: ["'I'd be a vegetarian if bacon grew on trees'",
		"'The information superhighway showed the average person what some nerd thinks about Star Trek.'",
		"'Pffft. Who needs English? I'm never going to England.'",
		"'Shut up, brain, or I'll stab you with a Q-Tip!'",
		"'To Start Press Any Key'. Where's the ANY key?'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	};

	var mrT = {
		quote: ["'I pity the FOOL!'",
		"'You aint hurt, you pathetic!'",
		"'Quit yo Jibba Jabba!'",
		"'Shut up, fool!'",
		"'You're gonna meet my friend, PAIN!'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	};


	var peterGriffin = {
		quote: ["'You know what really grinds my gears?'",
		"'Oh my god, Brian, there's a message in my Alphabits. It says, Oooooo.'",
		"'Huh, you know somthing? I always thought that dogs laid eggs. So, yeah. I learned something today.'",
		"'Oh, I thought you wanted us to murder the children and harvest their organs for beer money.'", 
		"'Sorry Meg. Daddy loves ya, but Daddy also loves Star Trek, and in all fairness, Star Trek was here first.'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	};

	var cartman = {
		quote: ["'I'm not fat, I'm festively plump.'", 
		"'Respect my authoritah!'", 
		"'I don't make up the rules. I just think them up and write them down.'", 
		"'I wasn't sleeping, I was just thinking real hard.'", 
		"'Screw you guys, I'm goin' home!'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	};

	var robFord = {
		quote: ["'I've just got to maybe slow down on my drinking.'",
		"'These allegations are 100% lies.'",
		"'I don't want to brag, but when I go out people treat me like a rock star.'",
		"'I was very inebriated'",
		"'I didn’t lie. I don’t smoke crack, I haven’t smoked crack in OVER A YEAR.'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	};