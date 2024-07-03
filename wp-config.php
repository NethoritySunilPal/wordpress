<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dxbrealt_obg' );

/** Database username */
define( 'DB_USER', 'dxbrealt_obg' );

/** Database password */
define( 'DB_PASSWORD', 'Xtr(rvRF&=!3' );

/** Database hostname */
define( 'DB_HOST', '111.118.212.158' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>yc$LrTm!2uV*da%d|eFcFD#9H)PyA|O /Jt>P4)o;#Z`*&O?MS~gpV#(}@i6oGm' );
define( 'SECURE_AUTH_KEY',  ';M^qBhMS~-.CU_$wW/j6ys8H`m|P-06Wx+;)y3S#0NBS}H-S6$Puzk>QBC&OjIaN' );
define( 'LOGGED_IN_KEY',    'lSV}}IeG+q=a35J$Ws2[}II3D@Fv/+1w=rlYIrd-,bHOh.g!aDoOP.q/fYeYt}`d' );
define( 'NONCE_KEY',        'V^5t1UHt4<qIj>GRu-M*,8I$;a2]U=Q_vUNil ]Q%6?mjz^0geQ#nbU|:Q:9(nba' );
define( 'AUTH_SALT',        'wo&o0S{M:nq*7BcUCela_/ 1uF1s{s]m+t.h}zHnjL+GV`OA^<6roWelN*xl37#_' );
define( 'SECURE_AUTH_SALT', '9oFdeA<Wn+6w.U[4fIq_C.owJ.gllt)v;)q-hYA1-qMR0isVi5*/1Y)$X%#Hy$P3' );
define( 'LOGGED_IN_SALT',   'BM`lIa7FCk%ak*K~~fAyX8+e>.NQzXLApN#g4=O1M~XGJjmb}uS7m[FX_|=VA[$}' );
define( 'NONCE_SALT',       '%Glx~n=NnxnV;x$ZsV+fvSHaak{;qIsyKY:|!vX}y5(NL0wK^!b?`Gd0/W?.ALj9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

define( 'WP_HOME', 'http://localhost/obg-project' ); define( 'WP_SITEURL', 'http://localhost/obg-project' );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
