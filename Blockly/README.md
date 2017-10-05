
## TTRobotix RoboHero Blockly Support

With this plug you can control your RoboHero with Google Blockly.

### RoboHero Blockly
<http://api.ttrobotix.com/blockly/demos/robohero/index.html?lang=en>
![](https://ttrobotix.github.io/RoboHero/Blockly/img/screen1.png)  


You can select language with select on the top-right, and click 'Change'.

### How To Use RoboHero Blockly

1. Connect to Internet and open   <http://api.ttrobotix.com/blockly/demos/robohero/index.html?lang=en> .  
![](https://ttrobotix.github.io/RoboHero/Blockly/img/full.png)  

2. Connect to RoboHero's Wifi
Connect your PC to RoboHero's Wifi AP, your RoboHero's IP will be "http://192.168.4.1/", or you can enable the wifi client mode, your RoboHero's ip will be "http://robohero.local/" ( see [Arduino](https://github.com/ttrobotix/RoboHero/tree/master/Arduino) for more information).

3. Switch to RoboHero Category, you will see the RoboHero blocks.

![](https://ttrobotix.github.io/RoboHero/Blockly/img/blocks.png)

4. Using 'RoboHero Url' ![](https://ttrobotix.github.io/RoboHero/Blockly/img/roboherourl.png) to set the ip you used. You must use this block first.


### Menu
![](https://ttrobotix.github.io/RoboHero/Blockly/img/menu.png)

#### Run Blocks:
Press 'Run' Button to execute your code.

#### Undo/Redo:
You can press Undo/Redo when you edit blocks.

#### Save/Load Blocks:
Press save to save the blocks in XML, press open to load project.

#### Preview :
You can get RoboHero Movement Preview in 3D.

#### Remove All Block:
Press this button to remove all block in the workspace.

#### Change Language:
Support Multipal Language, select your language and press Change, new language will open in new window, bookmark your new link.

for example:
English: <http://api.ttrobotix.com/blockly/demos/robohero/index.html?lang=en> .  
zh-tw: <http://api.ttrobotix.com/blockly/demos/robohero/index.html?lang=zh-hant> .  
Japan: <http://api.ttrobotix.com/blockly/demos/robohero/index.html?lang=jp> .  

if the language is not changed, press Refresh to reload.

### RoboHero Blocks

1. RoboHero URL:
![](https://ttrobotix.github.io/RoboHero/Blockly/img/roboherourl.png)
Set RoboHero's url/address. You must use this block first.

2. Normal Motion、Sport Motion、Dance Motion:
![](https://ttrobotix.github.io/RoboHero/Blockly/img/motions.png)
you can run different motion on RoboHero.

3. Execute Motion(JSON):
![](https://ttrobotix.github.io/RoboHero/Blockly/img/json.png)
You can run motion from RoboHero App's Motion Editor
press Share in the Motion-Editor
![](https://ttrobotix.github.io/RoboHero/Blockly/img/appsharebtn.png)
Copy the url from Share function
![](https://ttrobotix.github.io/RoboHero/Blockly/img/appshareurl.png)

Open the Url from app, copy the motion json here.
![](https://ttrobotix.github.io/RoboHero/Blockly/img/appshare.png)

4. Execute Frame:
![](https://ttrobotix.github.io/RoboHero/Blockly/img/frame.png)
you can set RoboHero 17 servo with by single Frame in ms.

Servo index reference:
 ![Screen of Servo Index](https://ttrobotix.github.io/RoboHero/img/servo_index.png)

### Google Blockly:
<https://developers.google.com/blockly/>
