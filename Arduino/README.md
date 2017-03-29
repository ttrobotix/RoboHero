## TTRobotix RoboHero Arduino Source

With these source, you can custom your robohero everything!


## Setup Guide

* Install USB Driver
* Install Arduino IDE
* Setup Board Support
* Install Servo Library
* Compile And Run

### 1.Install USB Driver
You need install PL2303 Driver for your computer first.
http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041
choose mac or windows by your OS is.


### 2.Install Arduino

Download and install lastest Arduino IDE from arduino.cc:
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino1.png)


### 3.setup board support

We need add RoboHero Board support to Arduino IDE.
Open Arduino IDE, go to Preferences...
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino2.png)

in "Additional Board Manager URLs: " enter
> http://arduino.esp8266.com/stable/package_esp8266com_index.json

![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino3.png)

Go to Board Manager
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino4.png)

Search with chip name "esp8266", install it.
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino5.png)

Now your arduino ide has support, change Board to "Generic ESP8266 Module":
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino6.png)

Change these value to make sure you have the right setting.
| Field  | Description  |
| :------------ |:---------------|
| Board  | Generic ESP8266 Module  |
| Flash Size  | 2M (1M SPIFFS)  |
| CPU Frequency| 80 MHZ  |
| Reset Method | nodemcu  |
| Upload Speed | 115200  |
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino_setting.png)


### 4.Install Servo Library

RoboHero has a PCA9685 16-way PWM chip, you need install library for it

There are two ways to install Servo Drive.
* install from arduino and modify #define youself.
* download modified zip


#### install from arduino and modify #define youself.
go to Manage Libraries.
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino_lib.png)
search "adafruit servo" and you will see "Adafruit PWM Servo Drive Library", install it.
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino_servo.png)

Go to forder which the driver installed.
> Mac: /home/yourname/Arduino/libraries/Adafruit_PWM_Servo_Driver_Library
>  Windows: C:\users\yourname\Arduino\libraries\Adafruit_PWM_Servo_Driver_Library

Open "Adafruit_PWMServoDriver.cpp"
add // to the other #define but leave "#define WIRE Wire" uncomment ;
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino_wire.png)

#### download modified zip
Download <http://ttrobotix.github.io/RoboHero/Arduino/Adafruit_PWM_Servo_Driver_Library.zip>
Add from Sketch -> Include Library -> Add. ZIP Library...
![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino_addlib.png)

### 5.open and run

Plug RoboHero with a USB Cable to PC, a new Port will appear.

> Select Port:
> Mac: /dev/cu.usbserial
> Windows: COM1 ~ COMX, a new COM Port will add when you plug RoboHero

![Arduino Download Web](http://ttrobotix.github.io/RoboHero/img/arduino_addport.png)
if you have any problem leave comment let me now




### Change RoboHero to a Wifi Client
> open Config.h, change
> &#35;define AP_MODE 1
to
> &#35;define AP_MODE 0

and change SSID And Password,
when you Disable AP_MODE, you RoboHero will enable mdns service with url: http://robohero.local/
