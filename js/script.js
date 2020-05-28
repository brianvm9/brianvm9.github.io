$( ".cta" ).click(function() {
  $( ".transition").toggleClass( "anim-trans" );
});

$(".menuSlide").click(function() {
	$(".navi").click(function() {
		$("ul").slideToggle();
	});
})

