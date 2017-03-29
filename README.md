## RoboHero Advance Resource
advance education resource for TTRobotix RoboHero.


## Scratch
Control RoboHero via MIT education programming language: Scratch.

go to RoboHero Scratch Plugin page.
<https://github.com/ttrobotix/RoboHero/tree/master/Scratch>

![Screen shot of Scratch Plugin](https://ttrobotix.github.com/RoboHero/img/scratch.png)




## HTTP API
Control RoboHero with Http API

RoboHero address is http://192.168.4.1/ default, if you disable Wifi ap mode (see Arduino for more information), your address will be http://robohero.local/ .

### Running Motion embed in RoboHero:

        http://192.168.4.1/controller?pm=?

| Motion  | pm  |
| :------------ |---------------:|
| Stand      | 99 |
| Forward      | 1 |
| Backward      | 2 |
| MoveLeft      | 5 |
| MoveRight      | 6 |
| TurnLeft      | 3 |
| TurnRight      | 4 |
| Stand UP      | 11 |
| Get UP      | 12 |


### Running Advance Motion embed in RoboHero:

        http://192.168.4.1/controller?pms=?

| Motion  | pms  |
| :------------ |---------------:|
| Bow | 1 |
| Pass | 2 |
| Strength | 3 |
| Attention | 4 |
| Balance | 5 |
| Warm-Up | 6 |
| Clap | 7 |
| Pray | 8 |
| Dance | 9 |

> Running a embed motion in RoboHero will block http service until motion is done.

### Control Single Servo

        http://192.168.4.1/controller?servo=?&value=?

| Params  | Description  |
| :------------ |:---------------|
| servo | the index of servo 0 ~ 15 |
| value | the degree of servo 0 ~ 270, take care of servo may block each other |


        http://192.168.4.1/controller?gpid=?&value=?

| Params  | Description  |
| :------------ |:---------------|
| gpid |  head servo connect at gpio 12, note it's 'gpid' not 'gpio' |
| value | the degree of servo 0 ~ 270, take care of servo may block each other |


### Motion Data

RoboHero's motion data is a JSON text, echo motion has multiple frame, each frame has 17 servo degress and 1 running time (in ms). You can generator share link from app, share to your Facebook or Friend.

motion data Sample:
```javascript
 {
	 name: "test motion",
	 motion: [
[102,129,141,116,107,97,200,116,154,60,173,137,200,198,118,119,90,102],
[134,135,87,74,151,97,200,116,154,60,173,137,200,198,118,119,90,79],
[152,137,93,76,155,97,200,116,154,60,173,159,199,194,130,146,90,118]
 ]
 }
 ```

open <http://api.ttrobotix.com/motion/129>  from phone and you can import this motion from url.



### Control By Single Frame

	 http://192.168.4.1/online?m0=?&m1=?&m2=?&m3=?&m4=?&m5=?&m6=?&m7=?&m8=?&m9=?&m10=?&m11=?m12=?&m13=?&m14=?&m15=?&m16=?&t1=?

App execute motion thought this api, send first frame and wait for t1, and send second frame ... until last frame.

| Params  | Description  |
| :------------ |:---------------|
| m0 | Servo degree |
| m1 | Servo degree |
| m2 | Servo degree |
| m3 | Servo degree |
| m4 | Servo degree |
| m5 | Servo degree |
| m6 | Servo degree |
| m7 | Servo degree |
| m8 | Servo degree |
| m9 | Servo degree |
| m10 | Servo degree |
| m11 | Servo degree |
| m12 | Servo degree |
| m13 | Servo degree |
| m14 | Servo degree |
| m15 | Servo degree |
| m16 | Servo head degree |
| t1 | Frame running time in ms |

 ![Screen of Servo Index](https://ttrobotix.github.com/RoboHero/img/servo_index.png)
