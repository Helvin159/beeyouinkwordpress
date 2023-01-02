<?php 



function bee_you_ink_post_types(){


  if(is_user_logged_in()){
    $user = wp_get_current_user();
    $roles = ( array ) $user->roles;
    
    if($roles[0] == 'administrator' OR $roles[0] == 'Administrator'){
      $isAdmin = true;
    }else {
      $isAdmin = false;
    }
  }


  register_post_type('components', array(
    'show_in_rest' => true,
    'supports' => array(
        'title', 'excerpt',
      ),
    'public' => $isAdmin,
    'labels'=>array(
      'name' => 'Components',
      'add_new_item' => 'Add New Component',
      'edit_items' => 'Edit Component',
      'all_items' => 'All Components',
      'singular_name' => 'Component',
    ),
    'menu_icon' => 'dashicons-index-card', 
    
    // 'capabilities'=> array(
    // 'edit_post' => false,
    // 'edit_published_posts'=> false,
    // 'edit_private_posts' => false
    // )
  ));

  register_post_type('hero', array(
    'show_in_rest' => true,
    'supports' => array(
        'title', 'excerpt','thumbnail'
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
  
  register_post_type('story_text', array(
    'show_in_rest' => true,
    'supports' => array(
        'title', 'excerpt',
      ),
    'public' => true,
    'labels'=>array(
      'name' => 'Story Text',
      'add_new_item' => 'Add New Story Text',
      'edit_items' => 'Edit Story Text',
      'all_items' => 'All Stories',
      'singular_name' => 'Story Text',
    ),
    'menu_icon' => 'dashicons-text-page',
    
    
  ));
  
  register_post_type('articles', array(
      'show_in_rest' => true,
      'supports' => array(
        'title', 'editor', 'excerpt',
      ),
    'public' => true,
    'has_archive'=>true,
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
    'supports'=>array('title', 'editor', 'excerpt','thumbnail'),
    'labels'=>array(
      'name' => 'Testimonials',
      'add_new_item' => 'Add New Testimonial',
      'edit_items' => 'Edit Testimonial',
      'all_items' => 'All Testimonials',
      'singular_name' => 'Testimonial',
    ),
    'has_archive'=>true,
    'menu_icon' => 'dashicons-groups',
    'show_in_rest' => true
  ));
  
  register_post_type('tattoo_work', array(
    'show_in_rest' => true,
    'public' => true,
    'supports'=>array(
      'title', 'editor', 'excerpt',
    ),
    'labels'=>array(
      'name' => 'Tattoos',
      'add_new_item' => 'Add New Tattoo',
      'edit_items' => 'Edit Tattoo',
      'all_items' => 'All Tattoos',
      'singular_name' => 'Tattoo',
    ),
    'has_archive'=>true,
    'menu_icon' => 'dashicons-admin-customizer',
    
  ));
  
  register_post_type('team', array(
    'show_in_rest' => true,
    'public' => true,
    'supports'=>array(
      'title', 'editor', 'excerpt','thumbnail'
    ),
    'labels'=>array(
      'name' => 'Team',
      'add_new_item' => 'Add New Team Member',
      'edit_items' => 'Edit Team Member',
      'all_items' => 'All Team Members',
      'singular_name' => 'Team Member',
    ),
    'has_archive'=>true,
    'menu_icon' => 'dashicons-groups',
    
  ));

  remove_post_type_support('page', 'editor');

}

add_action('init', 'bee_you_ink_post_types');