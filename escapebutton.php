<?php
/**
 * @package Escape Button
 * @version 1.0.0
 */
/*
Plugin Name: Escape Button
Plugin URI: https://www.ourwave.org/developers
Description: We developed the Our Wave Escape Button (available in the bottom right of our website) to help protect our users in unsafe situations. It has been an important part of our platforms ever since. We hope the open source version is helpful for projects seeking to build safer experiences for survivors.
Version: 1.0.0
Author: Our Wave
Author URI: https://www.ourwave.org
License: GPLv2 or later
Text Domain: ourwave
*/

/***************************************************************************************
 * Constants
 **************************************************************************************/

define( 'ESCAPE_BUTTON_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'ESCAPE_BUTTON_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

// Render escape button in WP footer
function render_escape_button() {
	?>
		<div class="ow-screen-padding">
			<noscript>
				<a href="https://www.amazon.com/?search=newest-deals-today/490239040234023942342i04203904">
					<div class="ow-leave-page-fab animate ow-leave-fab">
						<div class="ow-fab-icon"></div>
						<h3>Safety Exit</h3>
					</div>
				</a>
			</noscript>
			<div class="ow-leave-page-fab animate script-enabled ow-leave-fab">
				<div class="ow-fab-icon"></div>
				<h3>Safety Exit</h3>
			</div>
		</div>
	<?php
}

// Add actions
add_action( 'wp_footer', 'render_escape_button' );

// Enqueue
wp_enqueue_style( 'escape-button-styles', ESCAPE_BUTTON_PLUGIN_URL . 'assets/css/escapebutton-styles.css', array(), '1.0.0' );
wp_enqueue_script( 'escape-button-main', ESCAPE_BUTTON_PLUGIN_URL . 'assets/js/escapebutton.js', array(), '1.0.0', true );