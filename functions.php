<?php

/**
 * headに出力されるタグを消去
 */
remove_action( 'wp_head', 'wp_generator' ); //WordPressのバージョン情報
remove_action( 'wp_head', 'rsd_link' ); //外部ツールを使ったブログ更新用のURL
remove_action( 'wp_head', 'wlwmanifest_link' ); //wlwmanifestWindows Live Writerを使った記事投稿URL
remove_action( 'wp_head', 'wp_shortlink_wp_head' ); //短縮URL
remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); //絵文字対応のスクリプト
remove_action( 'wp_print_styles', 'print_emoji_styles'); //絵文字対応のスタイル
/**
 * デフォルトのcanonicalタグ削除・seo-header.phpに定義記入済
 */  
remove_action('wp_head', 'rel_canonical');
/**
 * 絵文字の DNS プリフェッチだけを削除
 */
add_filter( 'emoji_svg_url', '__return_false' );

/**
 * ヘッダーに以下のようなタグが挿入されるWP4.4からの機能を解除
 * <link rel='https://api.w.org/' href='http:/xxxx/wordpress/wp-json/' />
 */
remove_action( 'wp_head', 'rest_output_link_wp_head' );

/**
 * head内にprevとnextのリンクを自動生成する機能の停止
 */ 
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

/**
 * アップグレード関係(メジャーは手動で更新すること)
 */
//プラグインの自動更新を有効化
add_filter( 'auto_update_plugin', '__return_true' );
//マイナーアップグレードの自動更新を有効化
add_filter( 'allow_minor_auto_core_updates', '__return_true' );

/**
 * wordpressのjqueryを解除した後、再度読み込み、
 */
if (!is_admin()) {
   function deregister_script(){  //　登録解除の項目
        wp_deregister_script('jquery');
    }
 
   function register_script(){  //　登録の項目
        wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', false, '1.11.1', true );
        wp_register_script( 'init', get_template_directory_uri() . '/js/init.js', array( 'jquery' ), '', true);
        wp_register_script( 'cookie', get_template_directory_uri() . '/js/cookie.js', array( 'jquery' ), '', true);
        wp_register_script( 'userAgent', get_template_directory_uri() . '/js/userAgent.js', array( 'jquery' ), '', true);
        }
    function add_script() {  // 装備の項目
        deregister_script();
        register_script();
        wp_enqueue_script('jquery');
        wp_enqueue_script('init');
        wp_enqueue_script('cookie');
        wp_enqueue_script('userAgent');
        }
    add_action('wp_enqueue_scripts', 'add_script');
}
/**
 * 外部ファイルのURLに付加されるver=を取り除く
 */
function vc_remove_wp_ver_css_js( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
/**
 * セルフピンバック禁止
 */
function sp_no_self_ping( &$links ) {
    $home = home_url();
    foreach ( $links as $l => $link )
        if ( 0 === strpos( $link, $home ) )
            unset($links[$l]);
}
add_action( 'pre_ping', 'sp_no_self_ping' );

/**
 * 特殊文字の自動変換を解除
 */
add_filter( 'run_wptexturize', '__return_false' );

/**
 * svgファイルをアップロードできるようにする。
 * https://inthecom.net/1582
 */
function my_ext2type($ext2types) {
    array_push($ext2types, array('image' => array('svg', 'svgz')));
    return $ext2types;
}
add_filter('ext2type', 'my_ext2type');
  
function my_mime_types($mimes){
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'my_mime_types');
  
function my_mime_to_ext($mime_to_ext) {
    $mime_to_ext['image/svg+xml'] = 'svg';
    return $mime_to_ext;
}
add_filter('getimagesize_mimes_to_exts', 'my_mime_to_ext');

/**
 * svgファイルを管理画面内で見れるようにする
 * http://tm-b.hatenablog.com/entry/2017/01/09/224753
 */
add_filter('wp_generate_attachment_metadata' , function($metadata, $attachment_id) {
    if ('image/svg+xml' === get_post_mime_type($attachment_id))
        return array('sizes'=>array(0));
    return $metadata;
}, 10, 2);