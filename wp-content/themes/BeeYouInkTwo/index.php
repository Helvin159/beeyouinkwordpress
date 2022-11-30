<?php get_header();
$components = array( "hero","testimonialSlider");
$field = get_field('page_components');

foreach($components as $v){ 
?>
    <div id="<?php echo $v?>"></div>

<?php }  
get_footer(); 
?>