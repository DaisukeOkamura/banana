<?php if(is_home() || is_front_page()): ?>
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>" />
<?php else: ?>
	<title><?php wp_title( '|', true, 'right' ); ?><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>" />
<?php endif; ?>

<?php
///////////////////////////////////////
// canonicalタグの設定
//http://hirashimatakumi.com/blog/4613.html
///////////////////////////////////////
if(!is_404() && !is_search()){ // 404ページと検索ページでなければ表示
echo '<link rel="canonical" href="https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'].'">';

}?>
