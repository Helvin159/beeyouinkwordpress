<?php

// Files
function beeyou_files(){

  // ************************************ 
  // ************************************ 
  // ************ CSS FILES *************
  // ************************************ 
  // ************************************ 
  // My Style
  wp_enqueue_style('styles', get_theme_file_uri('/static/css/main.1d2ea062.css'));
  
  // Bootstrap CSS
  wp_enqueue_style('bootstrap', '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css');

  // Slick Slider CSS
  wp_enqueue_style('slick-slider', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
  wp_enqueue_style('slick-slide-theme', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');



  // JS Build Folder Script
  wp_enqueue_script('build-script', get_theme_file_uri('./build/index.js'), NULL,'1.0',true );


  // ************************************ 
  // ************************************ 
  // ******** Component Scripts *********
  // ************************************ 
  // ************************************ 
  // Header Script
  wp_enqueue_script('header-component-script', get_theme_file_uri('./components/header.72b263c7.js'), NULL,'1.0',true );

  // Footer Script
  wp_enqueue_script('footer-component-script', get_theme_file_uri('./components/footer.ebd39c87.js'), NULL,'1.0',true );

  // Testimonial Script
  wp_enqueue_script('testimonial-component-script', get_theme_file_uri('./components/testimonials.38147750.js'), NULL,'1.0',true );

  // Hero Script
  wp_enqueue_script('hero-component-script', get_theme_file_uri('./components/hero.260cd40b.js'), NULL,'1.0',true );

  // Recent Articles Script
  wp_enqueue_script('recent_articles-component-script', get_theme_file_uri('./components/recentArticlesComponent.6593bd1f.js'), NULL,'1.0',true );  

  // Page Collage
  wp_enqueue_script('page_collage-component-script', get_theme_file_uri('./components/pagecollage.bee60ba5.js'), NULL,'1.0',true );  
  
  // Story Text
  wp_enqueue_script('story_text-component-script', get_theme_file_uri('./components/storytext.df89e1c6.js'), NULL,'1.0',true );  

  // Bootstrap Scripts
  wp_enqueue_script('bootstrap_script-component-script', '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', NULL,'1.0',true );


}

add_action('wp_enqueue_scripts', 'beeyou_files');

// Features
function beeyou_features(){
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');

  add_image_size('genericSquare', 300, 300, true);
}

add_action('after_setup_theme', 'beeyou_features');


// Remove Admin Bar for All Other Users
add_action('after_setup_theme', 'remove_admin_bar');

function remove_admin_bar() {
if (!current_user_can('administrator') && !is_admin()) {
  show_admin_bar(false);
}
}


