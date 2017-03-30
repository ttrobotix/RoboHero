## RoboHero Advance Resource
Advance education resource for TTRobotix RoboHero. include:.

+ Arduino Compatible
+ Scratch
+ Http API

![RoboHero](http://ttrobotix.github.io/RoboHero/img/robohero_stand.png)

## Arduino Compatible

Follow these steps you can programming your RoboHero By Arduino IDE.

How To Programming RoboHero By Arduino:  
> <https://github.com/ttrobotix/RoboHero/tree/master/Arduino>


## Scratch
Control RoboHero via MIT education programming language: Scratch.
![Screen shot of Scratch Plugin](https://ttrobotix.github.io/RoboHero/img/scratch.png)

How To Control RoboHero Scratch Plugin page:
> <https://github.com/ttrobotix/RoboHero/tree/master/Scratch>






## HTTP API
Control RoboHero with HTTP API

RoboHero address is http://192.168.4.1/ default, if you disable Wifi ap mode (see ![Arduino](https://github.com/ttrobotix/RoboHero/tree/master/Arduino) for more information), your address will be http://robohero.local/ .

### Running Motion embed in RoboHero:

        http://192.168.4.1/controller?pm=?

| Motion  | pm  |
| :------------ |---------------:|
| Stand      | 99 | this command will enable all your servo |
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

RoboHero's motion data is a JSON text, echo motion has multiple frame-array, each frame has 17 servo and 1 running time (in ms). You can generator share link from app, share to your Facebook or Friend.

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

open <http://api.ttrobotix.com/motion/129>  from phone and you can import this motion to your app from url.



### Control By Single Frame

	 http://192.168.4.1/online?m0=?&m1=?&m2=?&m3=?&m4=?&m5=?&m6=?&m7=?&m8=?&m9=?&m10=?&m11=?m12=?&m13=?&m14=?&m15=?&m16=?&t1=?

App execute motion thought this api, send first frame and wait for t1, and send second frame ... until last frame.

| Params  | Description  |
| :------------ |:---------------|
| m0 | Servo 0 degree, left leg |
| m1 | Servo 1 degree, left leg  |
| m2 | Servo 2 degree, left leg  |
| m3 | Servo 3 degree, left leg  |
| m4 | Servo 4 degree, left leg  |
| m5 | Servo 5 degree, left hand |
| m6 | Servo 6 degree, left hand |
| m7 | Servo 7 degree, left hand |
| m8 | Servo 8 degree, right hand |
| m9 | Servo 9 degree, right hand |
| m10 | Servo 10 degree, right hand|
| m11 | Servo 11 degree, right leg|
| m12 | Servo 12 degree, right leg |
| m13 | Servo 13 degree, right leg |
| m14 | Servo 14 degree, right leg |
| m15 | Servo 15 degree, right leg |
| m16 | Servo 16 degree, head |
| t1 | Frame running time in ms |

Servo index reference:
 ![Screen of Servo Index](https://ttrobotix.github.io/RoboHero/img/servo_index.png)
