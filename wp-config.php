<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */


 if($_SERVER['SERVER_NAME'] === 'beeyouink.local'){
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
 }else{
	// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kmmkcamy_beeyouink' );

/** MySQL database username */
define( 'DB_USER', 'kmmkcamy_mrrymer' );

/** MySQL database password */
define( 'DB_PASSWORD', 'DoRa0411!?!' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
 }


/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xkmaJdiBQMfEoa9Hk9+QXXL23gg5lCS2gagzMJnERGSEEcIhvqvy+qWWiq3h1R7yu7T5m/VCwShfev4UW2KaZg==');
define('SECURE_AUTH_KEY',  'USpmt6FC3P7WSsDGqbM4pOUT90WZPprb3WLGKzzXP9NCzqjXz5BpYqkGBPLXVGG8LISAjOt0MwEQL1XdDOKstQ==');
define('LOGGED_IN_KEY',    '8KlAKwdOw1gc0reDt+NW9KDeDKqQ7E6r0cWlgEatce/wNaM7T4GRgM4Wpb88iu9v/nIZEZrdaTR387NbVH4bYg==');
define('NONCE_KEY',        'oQR2q8y5GsKsVEvbBQ8bXmkPLYyv+BmYrPsiVZM7oYtUYhCMwCU4pSnLF263Zw6ck94DrliHXujZ0P84hTqHiA==');
define('AUTH_SALT',        'JdklrpWE2OjmVaL4nWE3s0pr5LMLOM/S9e1Kz2txf0hDqSGSF/UNGMg9YEqTXsjL426Uq2R/hiRfX5xZ0zzUlw==');
define('SECURE_AUTH_SALT', 'jIt/DOmWYwTbTTL0AzSvk4t2b16mkQkUURUGlu3GYM2ee/GABKAix1wYjW1enTyZaOxsDfDFmexxElGJPxv4ow==');
define('LOGGED_IN_SALT',   'hO/pSxlBTP1O7yPVVwMdJRBKJOWG0cuj0o9VdPVOthTsi5meQw6tbVf3H3oJT9EXgfPLM2GxIerUwtcDCyOcxg==');
define('NONCE_SALT',       '0+RdS/K292IFfqGMvmfLRuhfyUPDByHlz6Vw5IOqh9G/m0CikrKJR90GXbMheI5gLh4oTtqgVcc7NZohHwV+aQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
