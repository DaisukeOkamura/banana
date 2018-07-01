<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="format-detection" content="address=no,email=no">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php get_template_part('seo-header'); ?>
<?php get_template_part('ogp'); ?>
<link href="https://fonts.googleapis.com/earlyaccess/sawarabimincho.css" rel="stylesheet" />
<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
<?php wp_head();?>
</head>
<body id="top-body" itemscope itemtype="http://schema.org/WebPage" itemprop="mainContentOfPage">