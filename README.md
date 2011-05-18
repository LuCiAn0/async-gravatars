
## Quick Start

Load your Gravatar images like:

``` html

<img data-gravatar_hash="713072bbe89035a79c17d19e53dd5d9b"
    class="load-gravatar" height="64" width="64"
    src="https://secure.gravatar.com/avatar/00000000000000000000000000000000?s=64&d=mm" />

```

A PHP example of this would be:

``` php

<img data-gravatar_hash="<?php echo md5( strtolower( trim( $email ) ) ); ?>"
    class="load-gravatar" height="64" width="64"
    src="https://secure.gravatar.com/avatar/00000000000000000000000000000000?s=64&d=mm" />

```

Then trigger the real images to load via:

``` javascript

jQuery( document ).ready( function() {
    $( '.load-gravatar' ).async_gravatars( {
        ssl: true
    } );
} );

```

License is <a href="http://www.opensource.org/licenses/mit-license.php">MIT</a> style.
