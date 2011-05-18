( function( $ ) {
$.fn.async_gravatars = function( args ) {
	var opt = {
		'default_img'	: 'identicon',
		'hash_attr'		: 'data-gravatar_hash',
		'rating'		: 'pg',
		'size'			: 64,
		'ssl'			: false
	};

	return this.each( function() {
		if ( args ) {
			$.extend( opt, args );
		}

		var host = 'http://www.gravatar.com/avatar/';
		if ( opt.ssl == true ) {
			host = 'https://secure.gravatar.com/avatar/';
		}

		var email_hash = $( this ).attr( opt.hash_attr );

		var grav_url = host + encodeURIComponent( email_hash ) + '.jpg?';
		grav_url += 's=' + encodeURIComponent( opt.size );
		grav_url += '&d=' + encodeURIComponent( opt.default_img );
		grav_url += '&r=' + encodeURIComponent( opt.rating );

		$( this ).attr( 'src', grav_url );
	} );
};
} )( jQuery );
