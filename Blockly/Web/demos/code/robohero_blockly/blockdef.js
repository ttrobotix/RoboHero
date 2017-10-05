Blockly.Blocks['set_robohero_url'] = {
  init: function() {
    this.appendValueInput("url")
        .setCheck("String")
        .appendField("RoboHero Url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Give A RoboHero URL to find robohero");
 this.setHelpUrl("http://robohero.ttorbotix.com");
  }
};

Blockly.Blocks['execute_sport_motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sport Motion")
        .appendField(new Blockly.FieldDropdown([["Wram Up","motion_wramup"], ["Strength","motion_strength"], ["Splits","motion_splits"], ["Squat Down","motion_squatdown"], ["Squat UP","motion_squatup"], ["To Push-UP","motion_topushup"], ["Push-UP UP","motion_pushupup"], ["Push-UP Down","motion_pushupdown"], ["End Push-UP","motion_endpushup"]]), "motion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("RoboHero Sport Motion");
 this.setHelpUrl("http://robohero.ttrobotix.com");
  }
};

Blockly.Blocks['execute_normal_motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Normal Motion")
        .appendField(new Blockly.FieldDropdown([["forward","motion_forward"], ["backward","motion_backward"], ["turn left","motion_turnleft"], ["turn right","motion_turnright"], ["moveleft","motion_moveleft"], ["moveright","motion_moveright"], ["get up","motion_getup"], ["stand up","motion_standup"], ["stand","motion_stand"]]), "basic_motion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("RoboHero Normal Motion");
 this.setHelpUrl("http://robohero.ttrobotix.com");
  }
};