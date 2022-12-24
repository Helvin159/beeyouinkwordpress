<?php

// Files
function beeyou_files(){

  // ************************************ 
  // ******* CSS FILES ******************
  // ************************************ 
  // My Style
  wp_enqueue_style('styles', get_theme_file_uri('./assets/app.css'));
  
  // Bootstrap CSS
  wp_enqueue_style('bootstrap', '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css');

  // Slick Slider CSS
  wp_enqueue_style('slick-slider', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
  wp_enqueue_style('slick-slide-theme', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');

  // Font Awesome CSS



  // ************************************ 
  // ******* JS Script ******************
  // ************************************ 
  wp_enqueue_script('build-script', get_theme_file_uri('./build/index.js'), NULL,'1.0',true );

  // Font Awesome
  // wp_enqueue_script('fontawesome-script', get_theme_file_uri('//kit.fontawesome.com/3f2d85e662.js'), NULL,'1.0',false );

  // ************************************ 
  // ******* Components *****************
  // ************************************ 
  // Header Script
  wp_enqueue_script('header-component-script', get_theme_file_uri('./components/header/static/js/main.e10b99fe.js'), NULL,'1.0',true );

  // Footer Script
  wp_enqueue_script('footer-component-script', get_theme_file_uri('./components/footer/static/js/main.8d8c88b6.js'), NULL,'1.0',true );

  // Testimonial Script
  wp_enqueue_script('testimonial-component-script', get_theme_file_uri('./components/testimonials/static/js/main.db06d0c6.js'), NULL,'1.0',true );
  
  // Portfolio Gallery Script
  wp_enqueue_script('portfolio-gallery-component-script', get_theme_file_uri('./components/portfoliogallery/static/js/main.ced8a450.js'), NULL,'1.0',true );

  // Hero Script
  wp_enqueue_script('hero-component-script', get_theme_file_uri('./components/hero/static/js/main.87cd8445.js'), NULL,'1.0',true );

  // Recent Articles Script
  wp_enqueue_script('recent_articles-component-script', get_theme_file_uri('./components/recentarticlescomponent/static/js/main.ca163e83.js'), NULL,'1.0',true );  

  // Page Collage
  wp_enqueue_script('page_collage-component-script', get_theme_file_uri('./components/pagecollage/static/js/main.a17c9c8d.js'), NULL,'1.0',true );  
  
  // Story Text
  wp_enqueue_script('story_text-component-script', get_theme_file_uri('./components/storytext/static/js/main.9f24623c.js'), NULL,'1.0',true );  

  // Bootstrap Scripts
  wp_enqueue_script('bootstrap_script-component-script', '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', NULL,'1.0',true );



  wp_localize_script('hero-component-script','heroData',array(
    'root_url' => get_site_url(),
  ));


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


