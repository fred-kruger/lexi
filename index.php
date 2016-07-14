<?php
/**
 * @ Lamosty.com 2015
 */

get_header();

?>

<div id="root"></div>

<?php

wp_enqueue_script('script', get_template_directory_uri() . '/dist/bundle.js', null, null, true);

get_footer();
