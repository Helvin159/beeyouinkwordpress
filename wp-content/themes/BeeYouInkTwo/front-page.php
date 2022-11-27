<?php get_header();
$components = array("hero", "testimonialSlider", "pageCollage","recentArticlesComponent");
foreach($components as $v){ 
?>
    <div id="<?php echo $v?>"></div>

<?php }  
get_footer(); 
?>