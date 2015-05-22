var main = function () {
  "use strict";
	
$(".thema1").on('click',function(){
	$(".themapage1").removeClass('hidden');
	$(".homepage").addClass('hidden');
	$(".driehoekbruno1").removeClass('hidden');
});
$(".thema2").on('click',function(){
	$(".themapage2").removeClass('hidden');
	$(".homepage").addClass('hidden');
	$(".driehoekbruno2").removeClass('hidden');
});
$(".thema3").on('click',function(){
	$(".themapage3").removeClass('hidden');
	$(".homepage").addClass('hidden');
	$(".driehoekbruno3").removeClass('hidden');
});
$(".thema4").on('click',function(){
	$(".themapage4").removeClass('hidden');
	$(".homepage").addClass('hidden');
	$(".driehoekbruno4").removeClass('hidden');
});
$(".thema5").on('click',function(){
	$(".themapage5").removeClass('hidden');
	$(".homepage").addClass('hidden');
	$(".driehoekbruno5").removeClass('hidden');
});






$(".sponsors").on('click',function(){
	$(".homepage").addClass('hidden');
	$(".sponsoredby").removeClass('hidden');
});
$(".home0").on('click',function(){
	$(".sponsoredby").addClass('hidden');
	$(".homepage").removeClass('hidden');
});



$(".home1").on('click',function(){
	$(".themapage1").addClass('hidden');
	$(".homepage").removeClass('hidden');
});

$(".home2").on('click',function(){
	$(".themapage2").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".home3").on('click',function(){
	$(".themapage3").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".home4").on('click',function(){
	$(".themapage4").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".home5").on('click',function(){
	$(".themapage5").addClass('hidden');
	$(".homepage").removeClass('hidden');
});



$(".linkspot11").on('click',function(){
	$(".themapage1").addClass('hidden');
	$(".thema1spot1").removeClass('hidden');
});
$(".homespot1").on('click',function(){
	$(".thema1spot1").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".terugspot1").on('click',function(){
	$(".thema1spot1").addClass('hidden');
	$(".themapage1").removeClass('hidden');
});


$(".linkspot12").on('click',function(){
	$(".themapage1").addClass('hidden');
	$(".thema1spot2").removeClass('hidden');
});
$(".homespot2").on('click',function(){
	$(".thema1spot2").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".terugspot2").on('click',function(){
	$(".thema1spot2").addClass('hidden');
	$(".themapage1").removeClass('hidden');
});

$(".linkspot13").on('click',function(){
	$(".themapage1").addClass('hidden');
	$(".thema1spot3").removeClass('hidden');
});
$(".homespot3").on('click',function(){
	$(".thema1spot3").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".terugspot3").on('click',function(){
	$(".thema1spot3").addClass('hidden');
	$(".themapage1").removeClass('hidden');
});

$(".linkspot14").on('click',function(){
	$(".themapage1").addClass('hidden');
	$(".thema1spot4").removeClass('hidden');
});
$(".homespot4").on('click',function(){
	$(".thema1spot4").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".terugspot4").on('click',function(){
	$(".thema1spot4").addClass('hidden');
	$(".themapage1").removeClass('hidden');
});

$(".linkspot15").on('click',function(){
	$(".themapage1").addClass('hidden');
	$(".thema1spot5").removeClass('hidden');
});
$(".homespot5").on('click',function(){
	$(".thema1spot5").addClass('hidden');
	$(".homepage").removeClass('hidden');
});
$(".terugspot5").on('click',function(){
	$(".thema1spot5").addClass('hidden');
	$(".themapage1").removeClass('hidden');
});


  



$(".thema1").on("mouseover", function () {
     {$(".driehoekbruno1home").removeClass("hidden");}
    });
	$(".thema1").on("mouseout", function(){
  		$(".driehoekbruno1home").addClass("hidden");
  	});
$(".thema2").on("mouseover", function () {
     {$(".driehoekbruno2home").removeClass("hidden");}
    });
	$(".thema2").on("mouseout", function(){
  		$(".driehoekbruno2home").addClass("hidden");
  	});
$(".thema3").on("mouseover", function () {
     {$(".driehoekbruno3home").removeClass("hidden");}
    });
	$(".thema3").on("mouseout", function(){
  		$(".driehoekbruno3home").addClass("hidden");
  	});
$(".thema4").on("mouseover", function () {
     {$(".driehoekbruno4home").removeClass("hidden");}
    });
	$(".thema4").on("mouseout", function(){
  		$(".driehoekbruno4home").addClass("hidden");
  	});
$(".thema5").on("mouseover", function () {
     {$(".driehoekbruno5home").removeClass("hidden");}
    });
	$(".thema5").on("mouseout", function(){
  		$(".driehoekbruno5home").addClass("hidden");
  	});



};

$("document").ready(main);