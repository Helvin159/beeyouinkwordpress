<?php get_header();
$components = array( "hero","testimonialSlider");
foreach($components as $v){ 
?>
    <div id="<?php echo $v?>"></div>

<?php }  
get_footer(); 
?>