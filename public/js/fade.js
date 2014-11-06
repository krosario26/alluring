$(document).ready(function() {
	$("body").css('display','none');

	$("body").fadeIn(1400);

	$("a").click(function(event) {
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(700, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});