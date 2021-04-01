const func = () => {
	$('.icon').on('mouseenter', (event) => {
		$(event.currentTarget).addClass('hover-icon');
	} ).on('mouseleave', (event) => {
		$(event.currentTarget).removeClass('hover-icon');
	});
	
	/* add more code here */
	
}

$(document).ready(func);