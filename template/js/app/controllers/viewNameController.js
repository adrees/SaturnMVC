/**
 * @copyright Sky Webadm Innovations
 * @extends libs.sky.mvc.superiorController 
 * @author Adam Rees ( adam.rees@bskyb.com )
 */
 
 /**
  * @controllerName@
  * @constructor @appName@.controllers.@controllerName@
  * @requires jQuery @see http://jquery.com
  * @requires events object containing event constants
  * @param $ object - instance of jQuery
  * @param $ object - instance of events object
  */
 var @controllerName@ = function( $, events ){
 
 	if(!events){ throw("Missing Dependency")};
	if(!$){ throw("Missing Dependency") };	
	/**
	 * Private vars
	 * Create base object from superior 
	 */ 
	var _cntrl = superiorController();
  	_cntrl.setProp = function( ev ){
  			_cntrl.getModel().setModelProp();
   	}

    return _cntrl;
}