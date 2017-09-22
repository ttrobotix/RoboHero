## TTRobotix RoboHero Scratch Plug (Under construction)

With this plug you can control your RoboHero by Scratch.

### RoboHero Scratch
You can start Scratch with RoboHero.   
<http://scratchx.org/?url=https://ttrobotix.github.io/RoboHero/Scratch/robohero.js#scratch>

### How To Use Scratch with RoboHero



1. Connect to Internet and open   <http://scratchx.org/?url=https://ttrobotix.github.io/RoboHero/Scratch/robohero.js#scratch> .  
![](https://ttrobotix.github.io/RoboHero/Scratch/img/all.png)  


2. Connect to RoboHero's Wifi
Connect your PC to RoboHero's Wifi AP, your RoboHero's IP will be "http://192.168.4.1/", or you can enable the wifi client mode, your RoboHero's ip will be "http://robohero.local/" ( see [Arduino](https://github.com/ttrobotix/RoboHero/tree/master/Arduino) for more information).

3. Switch to More Blocks, you will see the RoboHero blocks.

![](https://ttrobotix.github.io/RoboHero/Scratch/img/blocks.png)

4. Open RoboHero Scratch Plug page, you will see the light behind the plug:

> green: found RoboHero ![](https://ttrobotix.github.io/RoboHero/Scratch/img/online.png)  
yellow: search for RoboHero ![](https://ttrobotix.github.io/RoboHero/Scratch/img/search.png)  

Using 'RoboHero Address' ![](https://ttrobotix.github.io/RoboHero/Scratch/img/RoboHeroAddress.png) to set the ip you used , or "FindRoboHero", which will find your RoboHero in local network.

![](https://ttrobotix.github.io/RoboHero/Scratch/img/roboheroAddr_findRobo.png)



5. if the light turn green ![](https://ttrobotix.github.io/RoboHero/Scratch/img/online.png) you can control RoboHero with Scratch now!


### Demo

Drag "When Green-Flag Click"，set up ![](https://ttrobotix.github.io/RoboHero/Scratch/img/RoboHeroAddress.png) First, you can set wait or for-loop with a AdvanceMotion ![](https://ttrobotix.github.io/RoboHero/Scratch/img/Advance.png)  .

there are many Motions in AdvanceMotion:
![](https://ttrobotix.github.io/RoboHero/Scratch/img/advance_open.png)

Drag "When direction key pressd" with four directions or motions,![](https://ttrobotix.github.io/RoboHero/Scratch/img/Forward.png) or ![](https://ttrobotix.github.io/RoboHero/Scratch/img/Stand.png) .



Done. you can control your RoboHero with keyboard now.

### More about this Plug:
http://scratchx.org/

Native scratch have no HTTP functions, Scratch X is a modified for JavaScript Plug.

### How to save/load Project:
Press the Save Project from the Top-Right 'Save Project' to save sbx with plug.

![Top-Right](https://ttrobotix.github.io/RoboHero/Scratch/img/save.png)

if the RoboHero block in "undefined" please click "Load Experimental Extension" and input url: "https://ttrobotix.github.io/RoboHero/Scratch/robohero.js", the undefined block will working again.

![](https://ttrobotix.github.io/RoboHero/Scratch/img/loadext.png)
