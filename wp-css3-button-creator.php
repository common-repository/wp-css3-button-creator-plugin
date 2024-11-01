<?php
/*
Plugin Name: WP CSS3 Button Creator
Version: v1.0.1
Plugin URI: http://wp-popup.com/
Author: WP Popup
Author URI: http://wp-popup.com/
Description: This Wordpress Plugin allows you to create beautiful CSS3 buttons that you can use on your WP Site.
*/
include_once('class.wp-css3-button-creator.php');
define('WPCSS3BUTTONCREATOR_VER', '1.0.1');
add_action('plugins_loaded', 'load_wp_css3_button_creator_object');
function load_wp_css3_button_creator_object(){
	new WPCss3ButtonCreator();
}
