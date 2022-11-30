<?php get_header(); 
if(wp_get_post_parent_id(get_the_ID())){
    $field = get_field('page_components');
    // $component_id = array( "hero");
    foreach($field as $v){ 
        $component_id = get_post($v->ID);
        $post = get_field('component_div_name', $component_id, false);
?>
    <div id="<?php echo $post?>"></div>
<?php }  
}else{
    $field = get_field('page_components');
    // $component_id = array( "hero","testimonialSlider");
    foreach($field as $v){ 
        $component_id = get_post($v->ID);
        $post = get_field('component_div_name', $component_id, false);
?>
    <div id="<?php echo $post?>"></div>
<?php }
    }
?>

<?php get_footer(); ?>