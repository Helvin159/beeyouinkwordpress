<?php 

function bee_you_ink_post_types(){
  register_post_type('hero', array(
    'show_in_rest' => true,
    'supports' => array(
        'title', 'excerpt',
      ),
    'public' => true,
    'labels'=>array(
      'name' => 'Hero',
      'add_new_item' => 'Add New Hero Slide',
      'edit_items' => 'Edit Hero Slide',
      'all_items' => 'All Hero Slides',
      'singular_name' => 'Hero Slide',
    ),
    'menu_icon' => 'dashicons-laptop',
  ));
  
  register_post_type('articles', array(
      'show_in_rest' => true,
      'supports' => array(
        'title', 'editor', 'excerpt',
      ),
    'public' => true,
    'labels'=>array(
      'name' => 'Articles',
      'add_new_item' => 'Add New Article',
      'edit_items' => 'Edit Article',
      'all_items' => 'All Articles',
      'singular_name' => 'Article',
    ),
    'menu_icon' => 'dashicons-slides',
  ));

  register_post_type('testimonial', array(
    'public' => true,
    'labels'=>array(
      'name' => 'Testimonials',
      'add_new_item' => 'Add New Testimonial',
      'edit_items' => 'Edit Testimonial',
      'all_items' => 'All Testimonials',
      'singular_name' => 'Testimonial',
    ),
    'menu_icon' => 'dashicons-groups',
    'show_in_rest' => true
  ));
  
  register_post_type('tattoo_work', array(
      'show_in_rest' => true,
    'public' => true,
    'labels'=>array(
      'name' => 'Tattoos',
      'add_new_item' => 'Add New Tattoo',
      'edit_items' => 'Edit Tattoo',
      'all_items' => 'All Tattoos',
      'singular_name' => 'Tattoo',
    ),
    'menu_icon' => 'dashicons-admin-customizer',
  ));
}

add_action('init', 'bee_you_ink_post_types');