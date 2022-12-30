<?php 

add_action('rest_api_init', 'beeYouRoute');

function beeYouRoute(){
    register_rest_route('beeYouInk/v1', 'mainData', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'beeYouInkData'
    ) );    
    
    register_rest_route('beeYouInk/v1', 'articles', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'beeYouInkArticles'
    ) );
    
    register_rest_route('beeYouInk/v1', 'tattoos', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'beeYouInkTattoos'
    ) );
}

function beeYouInkData($data){



    $components = new WP_Query(array(
        'post_type'=>'components'
    ));
    wp_reset_query();    
    
    $posts = new WP_Query(array(
        'post_type'=>'post'
    ));
    wp_reset_query();

    $pages = new WP_Query(array(
        'post_type' => 'page',
        'order'=>'ASC'
    ));
    wp_reset_query();

    $hero = new WP_Query(array(
        'post_type' => 'hero'
    ));
    wp_reset_query();

    $storyText = new WP_Query(array(
        'post_type' => 'story_text'
    ));
    wp_reset_query();

    $articles = new WP_Query(array(
        'post_type' => 'articles',
        'order'=>'DESC'
    ));
    wp_reset_query();

    $testimonials = new WP_Query(array(
        'post_type' => 'testimonial'
    ));
    wp_reset_query();

    $tattooWork = new WP_Query(array(
        'post_type' => 'tattoo_work'
    ));
    wp_reset_query();
    
    $team = new WP_Query(array(
        'post_type' => 'team',
        'order'=>'DESC'
    ));
    wp_reset_query();

    $homeId = get_option('page_on_front');

    $results = array(
        'tattoo_shop_details'=>array(
            'name'=>get_bloginfo(),
            'url' => get_site_url(),
            'home_page_id'=>$homeId,
            'featured_img' => get_field('featured_image', $homeId)
        ),
        'pages'=>array(
            'all_pages'=>array(),
            'featured_pages'=>array(),
            'collage_pages'=>array(
                'single'=>array(),
                'quad'=>array()
            )
        ),
        'blog_posts'=>array(),
        'hero'=>array(),
        'story_text'=>array(),
        'articles'=>array(),
        'testimonials'=>array(),
        'tattoo_work'=>array(),
        'team'=>array()
    );


    while($pages->have_posts()){
        $pages->the_post();
        global $post;

        if(get_the_title() === 'Home'){
            $homePageFeatuedImg = get_field('featured_image'); 
        }
        array_push($results['pages']['all_pages'], array(
                'page'=>get_the_title(),
                'url'=>get_the_permalink(),
                'slug'=> $post->post_name,
                'page_components' => get_field('page_components'),
                'featured_page' => get_field('featured_page'),
                'page_collage_single' => get_field('page_collage_single'),
                'featured_image' => get_field('featured_image'),
            ));
            
            if(get_field('featured_page') == true){
                array_push($results['pages']['featured_pages'], array(
                    'page'=>get_the_title(),
                    'url'=>get_the_permalink(),
                    'slug'=> $post->post_name,
                    'page_components' => get_field('page_components'),
                    'featured_page' => get_field('featured_page'),
                    'page_collage_single' => get_field('page_collage_single'),
                    'featured_image' => get_field('featured_image'),
                ));
            }
            
            if(get_field('page_collage_single') == true){
                array_push($results['pages']['collage_pages']['single'], array(
                    'page'=>get_the_title(),
                    'url'=>get_the_permalink(),
                    'slug'=> $post->post_name,
                    'page_components' => get_field('page_components'),
                    'featured_page' => get_field('featured_page'),
                    'page_collage_single' => get_field('page_collage_single'),
                    'featured_image' => get_field('featured_image'),
                ));
            }
    }
    
    while($hero->have_posts()){
        $hero->the_post();
        global $post;
        global $author_id;
        array_push($results['hero'], array(
            'title'=>get_the_title(),      
            'home_hero_image' => get_field('home_hero_image'),
            'intro_text' => get_field('intro_text'),
            'heading' => get_field('heading'),
            'url' => get_field('url'),
            'slug'=> $post->post_name,
        ));
    }
    
    while($storyText->have_posts()){
        $storyText->the_post();
                        array_push($results['story_text'], array(
                            'title'=>get_the_title(),      
                            'story_content' => get_field('story_content'),
                            'show_story' => get_field('show_story'),
                            'author' => get_field('author'),
                            'quoted_artist' => get_field('quoted_artist'),
                ));
    }
    
    while($articles->have_posts()){
        $articles->the_post();
        global $post;
        global $author_id;
        array_push($results['articles'], array(
            'title'=>get_the_title(),      
            'article_date' => get_field('article_date'),
            'article_image' => get_field('article_image'),
            'show_img_in_article'=>get_field('show_image_in_article'),
            'author_first_name'=>get_the_author_meta('first_name'),
            'author_last_name'=>get_the_author_meta('last_name'),
            'author'=>get_the_author(),
            'custom_author'=>get_field('custom_author'),
            'content'=>get_the_content(),
            'url'=>get_the_permalink(),
            'post_id'=>get_the_ID(),
            'slug'=>$post->post_name,


        ));
    } 
    
    while($posts->have_posts()){
        $posts->the_post();
        global $post;
        global $author_id;
        array_push($results['blog_posts'], array(
            'post_id'=>get_the_ID(),
            'title'=>get_the_title(),      
            'content'=>get_the_content(),
            'author'=>get_the_author(),
            'image'=>get_the_post_thumbnail_url(),
            'author_first_name'=>get_the_author_meta('first_name'),
            'author_last_name'=>get_the_author_meta('last_name'),
            'slug'=>$post->post_name,
            'url'=>get_the_permalink(),


        ));
    }

    while($testimonials->have_posts()){
        $testimonials->the_post();
        array_push($results['testimonials'], array(
            'title'=>get_the_title(),      
            'content' =>get_the_content(),
        ));
    }
    
    while($tattooWork->have_posts()){
        $tattooWork->the_post();
        global $post;
        array_push($results['tattoo_work'], array(
            'title'=>get_the_title(),      
            'artist' => get_post(get_field('tattoo_artist')),
            'content' =>get_the_content(),
            'image' => get_field('image'),
            'tatt_shots_one' => get_field('tatt_shots_one'),
            'tatt_shots_two' => get_field('tatt_shots_two'),
            'show_tattoo_in_gallery' => get_field('show_tattoo_in_gallery'),
            'slug'=> $post->post_name,
            'slug_namespace' => 'tattoo/'
        ));
    }
    
    while($team->have_posts()){
        $team->the_post();
                global $post;

        array_push($results['team'], array(
            'name'=>get_the_title(),
            'position'=>get_field('position'),
            'about' =>get_the_content(),
        
            'img_url' =>get_the_post_thumbnail_url(),
            'profile_url'=>get_the_permalink(),
            'slug'=> $post->post_name,
        ));
    }

    return $results;
}

function beeYouInkArticles($data){
    $articles = new WP_Query(array(
        'post_type' => 'articles',
        'order'=>'DESC'
    ));
    wp_reset_query();


    $results = array(
        'tattoo_shop_details'=>array(
            'name'=>get_bloginfo(),
            'url' => get_site_url()
        ),
        'articles'=>array(),
    );

    while($articles->have_posts()){
        $articles->the_post();
        global $post;
        global $author_id;
        array_push($results['articles'], array(
            'title'=>get_the_title(),      
            'article_date' => get_field('article_date'),
            'article_image' => get_field('article_image'),
            'show_img_in_article'=>get_field('show_image_in_article'),
            'author_first_name'=>get_the_author_meta('first_name'),
            'author_last_name'=>get_the_author_meta('last_name'),
            'author'=>get_the_author(),
            'custom_author'=>get_field('custom_author'),
            'content'=>get_the_content(),
            'url'=>get_the_permalink(),
            'post_id'=>get_the_ID(),
            'slug'=>'article/' .''.$post->post_name,


        ));
    }
    return $results;
}

function beeYouInkTattoos($data){

    $tattooWork = new WP_Query(array(
        'post_type' => 'tattoo_work'
    ));
    wp_reset_query();
    

    $results = array(
        'tattoo_shop_details'=>array(
            'name'=>get_bloginfo(),
            'url' => get_site_url()
        ),
        'tattoo_work'=>array(),

    );
    
    while($tattooWork->have_posts()){
        $tattooWork->the_post();
        $tattooWork->the_post();
        array_push($results['tattoo_work'], array(
            'title'=>get_the_title(),      
            'content' =>get_the_content(),
            'image' => get_field('image'),
            'tatt_shots_one' => get_field('tatt_shots_one'),
            'tatt_shots_two' => get_field('tatt_shots_two'),
            'show_tattoo_in_gallery' => get_field('show_tattoo_in_gallery'),
            'slug'=> 'tattoo/'.''.$post->post_name,
            'slug_namespace' => 'tattoo/',
        ));
    }

    return $results;
}