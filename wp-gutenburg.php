<?php

/**
 * Plugin Name: A WP Gutenberg
 * Description: Gutenberg block
 * Author: Azizul Hasan
 *
 */

if ( ! defined( 'ABSPATH' ) ) exit;


function engueue_scripts () {

	wp_enqueue_script('wp-gutenberg' , plugin_dir_url(__FILE__) . 'build/wp-gutenberg.js' , array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor') , true, true);

	wp_enqueue_style('wp-gutenberg-style' , plugin_dir_url(__FILE__) . 'build/wp-gutenberg.css' , [] , false, 'all' );
}

add_action( 'enqueue_block_editor_assets', 'engueue_scripts' );