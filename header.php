<?php
/**
 * @ Lamosty.com 2015
 */

?>

<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>Lexi WordPress theme</title>

<?php
	wp_enqueue_style('styles', get_template_directory_uri() . '/dist/style.css', false, null, all);
?>

</head>

<body>
<?php

wp_head();

