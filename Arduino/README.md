TTRobotix RoboHero Arduino Source
===============================

With these source, you can custom your robohero everything!

Setup Guide
---------------------

1.install usb driver
2.install arduino
3.setup board support
4.install servo lib
5.open and run

### 1.Install USB Driver
You need install PL2303 Driver for your computer first.
http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041


### 2.Install Arduino

Download lastest Arduino from arduino.cc:


### 3.setup board support



### 4.install servo lib

PCA9685
### 5.open and run




### Change RoboHero to a Wifi Client
open Config.h change
> #define AP_MODE 1
to
> #define AP_MODE 0
and change SSID And Password,
when you Disable AP_MODE, you RoboHero will enable mdns service with url: http://robohero.local/
