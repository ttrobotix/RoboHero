console.log("Black Def JS File Start") ;

Blockly.Blocks['set_robohero_url'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(toggleLang("RoboHero Url"));
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("http://192.168.4.1/"), "robohero_url");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Give A RoboHero URL to find robohero");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.Blocks['execute_sport_motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(toggleLang("Sport Motion") )
        .appendField(new Blockly.FieldDropdown([["Wram Up","motion_wramup"], ["Strength","motion_strength"], ["Splits","motion_splits"], ["Squat Down","motion_squatdown"], ["Squat UP","motion_squatup"], ["To Push-UP","motion_topushup"], ["Push-UP UP","motion_pushupup"], ["Push-UP Down","motion_pushupdown"], ["End Push-UP","motion_endpushup"]]), "motion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("RoboHero Sport Motion");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.Blocks['execute_normal_motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(toggleLang("Normal Motion"))
        .appendField(new Blockly.FieldDropdown([["forward","motion_forward"], ["backward","motion_backward"], ["turn left","motion_turnleft"], ["turn right","motion_turnright"], ["moveleft","motion_moveleft"], ["moveright","motion_moveright"], ["get up","motion_getup"], ["stand up","motion_standup"], ["stand","motion_stand"]]), "normal_motion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("RoboHero Normal Motion");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.Blocks['execute_motion_json'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(toggleLang("Execute Motion (JSON):"));
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("{}"), "JSON");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Motion JSON come from App 'share' function");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.Blocks['control_servo'] = {
  init: function() {
    this.appendValueInput("degree")
        .setCheck("Number")
        .appendField(toggleLang("Control Servo , Index="))
        .appendField(new Blockly.FieldNumber(0, 0, 16), "servo_index")
        .appendField(toggleLang("Degree") + "=");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("https://camo.githubusercontent.com/bff30f42c1cafcb4cb809163247dd8b6244e0fdc/68747470733a2f2f7474726f626f7469782e6769746875622e696f2f526f626f4865726f2f696d672f736572766f5f696e6465782e706e67");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.Blocks['execute_frame'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(toggleLang("Execute Frame"))
        .appendField( "ms:" );
    this.appendValueInput("head")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(toggleLang("Head") + "(16):");
    this.appendValueInput("lefthand_arr")
        .setCheck("dummy_array3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(toggleLang("Left Hand") + "(5,6,7):");
    this.appendValueInput("righthand_arr")
        .setCheck("dummy_array3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(toggleLang("Right Hand") + "(10,9,8):");
    this.appendValueInput("leftleg_arr")
        .setCheck("dummy_array5")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(toggleLang("Left Leg") + "(0,1,2,3,4):");
    this.appendValueInput("rightleg_arr")
        .setCheck("dummy_array5")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(toggleLang("Right Leg") + "(11,12,13,14,15):");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.Blocks['dummy_array3'] = {
  init: function() {
    this.appendValueInput("arr1")
        .setCheck("Number");
    this.appendValueInput("arr2")
        .setCheck("Number");
    this.appendValueInput("arr3")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "dummy_array3");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dummy_array5'] = {
  init: function() {
    this.appendValueInput("arr1")
        .setCheck("Number");
    this.appendValueInput("arr2")
        .setCheck("Number");
    this.appendValueInput("arr3")
        .setCheck("Number");
    this.appendValueInput("arr4")
        .setCheck("Number");
    this.appendValueInput("arr5")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "dummy_array5");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['execute_dance_motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(toggleLang("Dance Motion"))
        .appendField(new Blockly.FieldDropdown([["Victory","motion_victory"], ["Bow","motion_bow"], ["Clap","motion_clap"], ["Pass","motion_pass"], ["Attention","motion_attention"], ["Twist","motion_twist"], ["Fly","motion_fly"], ["Shake Hand","motion_shakehand"], ["Balance","motion_balance"]]), "motion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("RoboHero Dance Motion");
 this.setHelpUrl("https://github.com/ttrobotix/RoboHero/tree/master/Blockly");
  }
};

Blockly.defineBlocksWithJsonArray([{
  "type": "wait_seconds",
  "message0": " wait %1 seconds",
  "args0": [{
    "type": "field_number",
    "name": "SECONDS",
    "min": 0,
    "max": 600,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

Blockly.defineBlocksWithJsonArray([{
  "type": "wait_ms",
  "message0": " wait %1 ms",
  "args0": [{
    "type": "field_number",
    "name": "SECONDS",
    "min": 0,
    "max": 1000000,
    "value": 1000
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

