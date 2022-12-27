<?php


// ROUTES
require get_theme_file_path('../../beeyouink-includes/routes.php');



// Files
function beeyou_files(){

  // ************************************ 
  // ******* CSS FILES ******************
  // ************************************ 
  // My Style
  wp_enqueue_style('styles', get_theme_file_uri('./static/css/main.1d2ea062.css'));
  
  // Bootstrap CSS
  wp_enqueue_style('bootstrap', '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css');

  // Slick Slider CSS
  wp_enqueue_style('slick-slider', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
  wp_enqueue_style('slick-slide-theme', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');

  // Font Awesome CSS



  // ************************************ 
  // ******* JS Script ******************
  // ************************************ 

  // Main Script
  wp_enqueue_script('main-script', get_theme_file_uri('./static/js/main.788e7f16.js'), NULL,'1.0',true );


  // Bootstrap Scripts
  wp_enqueue_script('bootstrap_script-component-script', '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', NULL,'1.0',true );
}

add_action('wp_enqueue_scripts', 'beeyou_files');

// Features
function beeyou_features(){
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');

  add_image_size('genericSquare', 300, 300, true);
  add_image_size('Hero Slide', 1300, 788, true);
  add_image_size('Recent Article Slide', 255, 275, true);
}

add_action('after_setup_theme', 'beeyou_features');


// Remove Admin Bar for All Other Users
add_action('after_setup_theme', 'remove_admin_bar');

function remove_admin_bar() {
if (!current_user_can('administrator') && !is_admin()) {
  show_admin_bar(false);
}
}


