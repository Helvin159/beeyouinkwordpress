<?php get_header(); 
if(wp_get_post_parent_id(get_the_ID())){
    $components = array( "hero");
    foreach($components as $v){ 
?>
    <div id="<?php echo $v?>"></div>
<?php }  
}else{
    $components = array( "hero","testimonialSlider");
    foreach($components as $v){ 
?>
    <div id="<?php echo $v?>"></div>
<?php }
    }
?>

<?php get_footer(); ?>