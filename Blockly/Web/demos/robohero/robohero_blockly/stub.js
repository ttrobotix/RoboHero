Blockly.JavaScript['set_robohero_url'] = function(block) {
  var text_robohero_url = block.getFieldValue('robohero_url');
  console.log("set Robohero AT " + text_robohero_url) ; 
  robohero_url = text_robohero_url ;
  var code = 'Normal_Motion( "motion_stand"); \n';
  return code ;
};

Blockly.JavaScript['execute_sport_motion'] = function(block) {
  var dropdown_motion = block.getFieldValue('motion');
 
  var code = 'Normal_Motion( "' + dropdown_motion + '" ) ; \n';
  return code; 
};
 
Blockly.JavaScript['execute_normal_motion'] = function(block) { 
  var dropdown_normal_motion = block.getFieldValue('normal_motion');
  var code = 'Normal_Motion( "' + dropdown_normal_motion + '" ) ; \n';
  return code;
};

Blockly.JavaScript['execute_dance_motion'] = function(block) { 
  var motion = block.getFieldValue('motion');
  console.log(" get dance motion = " + motion) ;
  var code = 'Normal_Motion( "' + motion + '" ) ; \n';
  return code;
};



Blockly.JavaScript['execute_motion_json'] = function(block) {
	var text_json = block.getFieldValue('JSON');
	console.log("call execute_motion_json string" + text_json ) ;
	try {
		var dic = JSON.parse(text_json);
		if ( dic["motion"] != undefined ) {
			motionDic["temp_json"] = dic ;
		}
		
	} catch(e) {
		motionDic["temp_json"] = undefined ;
		alert(e); // error in the above string (in this case, yes)!
	}
  
    var code = 'Normal_Motion( "temp_json" ) ; \n';
	return code;
};

Blockly.JavaScript['control_servo'] = function(block) {
  var index = block.getFieldValue('servo_index');
  var degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 
  var code = 'controlServo( ' + index + ', ' + degree + '); \n ';
  return code;
};

Blockly.JavaScript['execute_frame'] = function(block) { 
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_head = Blockly.JavaScript.valueToCode(block, 'head', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lefthand_arr = Blockly.JavaScript.valueToCode(block, 'lefthand_arr', Blockly.JavaScript.ORDER_ATOMIC);
  var value_righthand_arr = Blockly.JavaScript.valueToCode(block, 'righthand_arr', Blockly.JavaScript.ORDER_ATOMIC);
  var value_leftleg_arr = Blockly.JavaScript.valueToCode(block, 'leftleg_arr', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rightleg_arr = Blockly.JavaScript.valueToCode(block, 'rightleg_arr', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  value_lefthand_arr = value_lefthand_arr.slice(1, -1); 
  value_lefthand_arr = JSON.parse( value_lefthand_arr ) ;
  
  value_righthand_arr = value_righthand_arr.slice(1, -1); 
  value_righthand_arr = JSON.parse( value_righthand_arr ) ;
  
  value_leftleg_arr = value_leftleg_arr.slice(1, -1); 
  value_leftleg_arr = JSON.parse( value_leftleg_arr ) ;
  
  value_rightleg_arr = value_rightleg_arr.slice(1, -1); 
  value_rightleg_arr = JSON.parse( value_rightleg_arr ) ;
  
  console.log(" Execut Frame now ") ;
  console.log(" MS = " + value_name) ;
  console.log(" head = " + value_head) ;
  console.log("dummy array3 = @" + value_lefthand_arr[0] + "," + value_lefthand_arr[1] + "," + value_lefthand_arr[2] + "@ type= " + typeof( value_lefthand_arr) ) ;
  
  var frame = [ 
  value_leftleg_arr[0], value_leftleg_arr[1], value_leftleg_arr[2], value_leftleg_arr[3], value_leftleg_arr[4],
  value_lefthand_arr[0],value_lefthand_arr[1],value_lefthand_arr[2],
  value_righthand_arr[2],value_righthand_arr[1],value_righthand_arr[0],
  value_rightleg_arr[0], value_rightleg_arr[1], value_rightleg_arr[2], value_rightleg_arr[3], value_rightleg_arr[4],
  value_head, parseInt(value_name) 
  ] ;
  
  var tempVarName = "temp_name" + Math.floor((Math.random() * 10000) + 1) ;
   
  var motion = { motion:[ frame ]} ;
  motionDic[tempVarName] = motion ;
  var code = 'Normal_Motion( "' + tempVarName + '") ; \n';
  return code;
};

Blockly.JavaScript['dummy_array3'] = function(block) {
  var value_arr1 = Blockly.JavaScript.valueToCode(block, 'arr1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arr2 = Blockly.JavaScript.valueToCode(block, 'arr2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arr3 = Blockly.JavaScript.valueToCode(block, 'arr3', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code =  JSON.stringify( [ value_arr1, value_arr2, value_arr3] )  ;
  console.log("dummy array3 raw=@" + code + "@") ;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dummy_array5'] = function(block) {
  var value_arr1 = Blockly.JavaScript.valueToCode(block, 'arr1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arr2 = Blockly.JavaScript.valueToCode(block, 'arr2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arr3 = Blockly.JavaScript.valueToCode(block, 'arr3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arr4 = Blockly.JavaScript.valueToCode(block, 'arr4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arr5 = Blockly.JavaScript.valueToCode(block, 'arr5', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code =  JSON.stringify( [ value_arr1, value_arr2, value_arr3,value_arr4,value_arr5] )  ;
  console.log("dummy array5 raw=@" + code + "@") ;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// working 
Blockly.JavaScript['wait_ms'] = function(block) { 
  var seconds = Number(block.getFieldValue('MS'));
  var code = 'waitForMS(' + MS + ');\n';
  return code;
};

/**
 * Generator for wait block creates call to new method
 * <code>waitForSeconds()</code>.
 */
Blockly.JavaScript['wait_seconds'] = function(block) {
  var seconds = Number(block.getFieldValue('SECONDS'));
  var code = 'waitForSeconds(' + seconds + ');\n';
  return code;
};

/**
 * Register the interpreter asynchronous function
 * <code>waitForSeconds()</code>.
 */
function initInterpreterWaitForSeconds(interpreter, scope) {
	  // Ensure function name does not conflict with variable names.
	  Blockly.JavaScript.addReservedWords('waitForSeconds');

	  var wrapper = interpreter.createAsyncFunction(
		function(timeInSeconds, callback) {
		  // Delay the call to the callback.
		  console.log("in waitForSeconds loop wait=" + timeInSeconds) ;
		  setTimeout(callback, timeInSeconds * 1000);
		});
	  interpreter.setProperty(scope, 'waitForSeconds', wrapper);
  
	  
	  // for waitForMS( 200 );
	  Blockly.JavaScript.addReservedWords('waitForMS');
	  var wrapper = interpreter.createAsyncFunction(
		function(timeInSeconds, callback) {
		  // Delay the call to the callback.
		  console.log("in waitForMS loop wait=" + timeInSeconds) ;
		  setTimeout(callback, timeInSeconds );
		});
	  interpreter.setProperty(scope, 'waitForMS', wrapper);
	  
  
	Blockly.JavaScript.addReservedWords('controlServo');
	var wrapper = interpreter.createAsyncFunction(
	function(arg1, arg2 , callback) {
		// Delay the call to the callback.
		console.log("controlServo = " + arg1 + "," + arg2 ) ;
		controlServo( arg1, arg2) ;
		setTimeout(callback, 1 ); // callback rightaway 
	});
	interpreter.setProperty(scope, 'controlServo', wrapper);
  
  
}

