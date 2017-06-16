<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{
  // if( ! is_single( 75 ) ) {
	// 	return;
	// }

  wp_register_script( 'app-chart', plugins_url( '../js/Chart.js', __FILE__ ) );
  wp_enqueue_script( 'app-chart', '', array(), false, true );

  wp_register_script( 'app-js', plugins_url( '../js/main.js', __FILE__ ) );
  wp_enqueue_script( 'app-js', '', array( 'jquery' ), false, true );

  wp_register_style( 'own-lib', plugins_url( '../style/plugin_lib.css', __FILE__ ), array(), '', 'all' );
  wp_enqueue_style( 'own-lib' );

  wp_register_style( 'app-style', plugins_url( '../style/plugin_style.css', __FILE__ ), array(), '', 'all' );
  wp_enqueue_style( 'app-style' );

}
