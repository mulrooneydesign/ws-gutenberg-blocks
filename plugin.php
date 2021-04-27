<?php
/**
 * Plugin Name: Windy Shore Blocks
 * Plugin URI: http://www.mulrooneydesign.ie
 * Description: Blocks for the Windy Shore
 * Author: Barry Mulrooney
 * Aurhor URI: http://www.mulrooneydesign.ie
 */

 if( ! defined( 'ABSPATH' ))  {
     exit;
 }

function ws_block_register_block_type($block_name, $options = array()) {
    register_block_type(
        'ws-blocks/' . $block_name,
            array_merge(
                array(
                    'editor_script' => 'ws-blocks-editor-script',
                    'editor_style' => 'ws-blocks-editor-style',
                    'script' => 'ws-blocks-script',
                    'style' => 'ws-blocks-style'
                ),
                $options
            )
        );
} 

function ws_blocks_register() {

    //Scripts and Styles for Editor
    wp_register_script(
        'ws-blocks-editor-script', 
        plugins_url('dist/editor.js', __FILE__),
        //Array of dependencies
        array('wp-blocks','wp-i18n','wp-element')
    );

    wp_register_style(
        'ws-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        //Array of dependencies - our stylesheet is loaded after this one
        array('wp-edit-blocks')
    );

    //Scripts and Styles for Front End
    wp_register_script(
        'ws-blocks-script', 
        plugins_url('dist/script.js', __FILE__),
        //load after jquery
        array('jquery')
    );

    wp_register_style(
        'ws-blocks-style', 
        plugins_url('dist/style.css', __FILE__)
    );

    ws_block_register_block_type('firstblock');
    ws_block_register_block_type('secondblock');
}

 add_action('init', 'ws_blocks_register');