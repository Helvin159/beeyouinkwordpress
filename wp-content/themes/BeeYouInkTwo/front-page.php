<?php get_header();
$field = get_field('page_components');
foreach($field as $v){ 
    $components = get_post($v->ID);
    $post = get_field('component_div_name', $component_id, false);
    $component_post_name = get_field('component_name', $component_id, false);
?>
    <div id="<?php echo $post?>" data-component="<?php echo $component_post_name ?>"></div>

<?php }  
get_footer(); 
?>