<?php
include_once (dirname(__FILE__).'/libs/class.plugin-base.php');
class  WPCss3ButtonCreator extends WPCss3ButtonCreatorBase{
	var $admin_js = array('jquery','jquery.dependClass','jquery.miniColors','jquery.slider','wp-css3-button-creator-admin');
    var $admin_css = array('jquery.miniColors','jslider','jslider.ie6','jslider.plastic','jslider.plastic.ie6','jslider.round.plastic','jslider.round.plastic.ie6','wp-css3-button-creator-admin');
	var $front_css = array();
    function __construct(){
        $pages = self::get_page_list();    	
        $config = new stdClass();
        $config->plugin_name = "WP CSS3 Button Creator";        
        $config->version = WPCSS3BUTTONCREATOR_VER;
        $config->plugin_base_file= 'wp-css3-button-creator.php';
        $config->pages = $pages;
        $config->default_page = 'setting_page';
        $config->menu_type = 'option_page';
        parent::__construct($config);        	
    }
    function setting_page(){	
	    if(isset($_POST[$this->plugin_id.'_setting_submit'])){
	        $this->set_options(array('setting'=>$_POST['setting']));
//	        $this->message = '<div id="message" class="updated fade"><p>Detailed Profile Page URL Value Saved!</p></div>';
	    }
    	$setting = $this->options['setting'];
    	include_once($this->plugin_path.'/views/settings.php');
    }

    static function get_page_list(){
        $pages = array('setting_page'=>array('title'=>"WP CSS3 Button Creator"));
        return json_decode(json_encode($pages));
    }
}
