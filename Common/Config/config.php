<?php
/**
 * 模块配置文件
 * wangbaoqing@imooly.com
 * 2015-05-15
 */
require_once('host.config.php');
require_once('db.config.php');

return array(
	'HOST' => $HOST,
	
	//默认语言
	'DEFAULT_LANG'  => 'zh-cn',
	
	//数据库配置信息 支持多数据库配置
	'DB_CONFIG'     => $database,
	//mongodb配置信息
	'MONGO'         => $mongo,
	
	//SESSION配置信息
	'SESSION_TYPE'       => '',
	'SESSION_PREFIX'     => 'KeyCabinet',
	'VAR_SESSION_ID'     => 'sessionid',
	'SESSION_OPTIONS'    => array(
		'name'   => 'KeyCabinet',
		'expire' => 7200 //session默认过期时间 2小时=7200秒
	),

	//加载扩展配置文件 引用方式C('x.x')
	'LOAD_EXT_CONFIG' => array(
		//支付配置
		// 'PAY'   => 'pay.config',
	),

	//视频web地址
	'VIDEO_HOST' => 'http://localhost/',
	//快照web地址
	'PHOTO_HOST' => 'http://localhost/',
);