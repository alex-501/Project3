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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'reactPress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jiKbyx4,U m:5-iaVm/ }n0G8H@|CY4KdO=KF@8dI_*+{A,vuU*,qOOA?}>c6?5y');
define('SECURE_AUTH_KEY',  '7;]`^ E[j~mdJqGS6[UCq{17H`KbX|Jk91`+tICGYHg~ve_F v]CIA{<UTf(CIRD');
define('LOGGED_IN_KEY',    '*~R]VO+VuU>vw]FB>7TNGKnhN4M}3&pRo|4Z9(Qu?:q@l+w[fThOD9!Zih(Z+;{f');
define('NONCE_KEY',        'HD*Itg#!N-l(M+ tQHw)*M 1*fD]$4sgpNO:$1X.U_d.ti,+b|)p>xLJt<kM7GeD');
define('AUTH_SALT',        ']vG^4Qi31J=^<srUMm~hRv+:%T97!GwF7SpKmy6)*3fhTg%z}DsMUWaJ3RVz&pMQ');
define('SECURE_AUTH_SALT', 'hvQdq7kvh$^<uXi$t@(h/gfsHwAf+4qM5)FM#/vjNi_RVPoYYOpuE:d`VE??+L4*');
define('LOGGED_IN_SALT',   '.IeQ4KVM|o%|#W(-^.%h:)?}4Z]`C2r,=U=T#JFB##3pPt^`[%4D}`p{1:<|/M%Z');
define('NONCE_SALT',       '2#L1R^)@}?1{P`9 $RNi[G.kO M.G/m&7V-zzv/FLLV{r(`0q$dld{yy,B~s<&J}');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
