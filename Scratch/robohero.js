// Scratch Extension to demonstrate some simple web browser functionality
// 2014 Shane M. Clements


// set robohero url
// ap mode: 192.168.4.1
// client & ddns mode: robohero.local ;

var robohero_ap_url = "http://192.168.4.1/"; ;
var robohero_mdns_url = "http://robohero.local/";

var robohero_url = robohero_ap_url ;

// motion embeded in robohero firmware and it's execute time ;
var controllerPM = [ 99,1,2,3, 5,4,6,11,12 ]
var controllerPM_time = [100,2900,2540,5250,560,5250,560,6400,4200]


// 這三個list是分別對應的
var controllerPMS = [1,2,3,4,5,6,7,8] ;
var controllerPMS_time = [2300, 3300, 4800, 3800, 6600, 9300, 2990, 3300, 19750] ;
var pmsMotionNames = [ "Bow", "Pass", "Strength", "Attention", "Balance", "Warm-Up", "Clap", "Pray", "Dance"] ;


var isRoboheroAlive = false ; // check robohero is alive or not
var lastCheckTime = 0
var checkRoboheroAlive = function() {

  // check every 10 seconds
  if ((new Date().getTime() / 1000 - lastCheckTime) < 10 ) {
    return ;
  }

  lastCheckTime = new Date().getTime() / 1000 ;
  $.ajax({
      url: robohero_url + "eeprom" ,
      type: 'get',
      cache: false,
      success: function(){
        isRoboheroAlive = true ;
      },
      error: function(){
        isRoboheroAlive = false ;
      }
  });
} ;


var runPMcallback = function(pm, callback ) {
  var url = robohero_url + "controller?pm=" + pm ;
  $.get( url, function() {

  });

  for (i = 0; i < controllerPM.length; i++) {
      if ( controllerPM[i] == pm ) {
        window.setTimeout( function() {
          callback() ;
        }, controllerPM_time[i] * 1.1 + 100 ) ; // longer time for its execute
        break ;
      }
  }
} ;

// advance motion
var runPMScallback = function(pms, callback ) {
  var url = robohero_url + "controller?pms=" + pms ;
  $.get( url, function() {
  });

  for (i = 0; i < controllerPMS.length; i++) {
      if ( controllerPMS[i] == pms ) {
        window.setTimeout( function() {
          callback() ;
        }, controllerPMS_time[i] * 1.1 + 100 ) ; // longer time for its execute
        break ;
      }
  }
} ;

var findRobohero = function(callback) {
  console.log("Find robohero start") ;

  $.ajax({
      url: robohero_ap_url + "eeprom" ,
      type: 'get',
      cache: false,
      timeout: 300,
      success: function(){
        callback(robohero_ap_url) ;
      },
      error: function(){
        console.log( robohero_ap_url + " fail, try mdns url") ;

        // find again
        $.ajax({
            url: robohero_mdns_url + "eeprom" ,
            type: 'get',
            cache: false,
            timeout: 300,
            success: function(){
              console.log(" using mdns url") ;
              callback( robohero_mdns_url ) ;
            },
            error: function(){
              console.log(robohero_mdns_url + "fail, can't find robohero") ;
              callback( robohero_ap_url ) ;
            }
        });
      }
  });
} ;


var controllerServo = function( arr, callback) {
  console.log("controllerServo func run") ;
  var url = robohero_url + "online?" ;
  url = url + "m0=" + arr[0] ;
  for ( var j = 1 ; j <= 16 ; j++ ) {
      url = url + "&m" + j + "=" + arr[j] ;
  }
  url = url + "&t1=" + arr[17] ;

  console.log("Control Servo raw url=" + url ) ;
  $.ajax({
    url: url,
    timeout: 1000,
    type: 'get'
  }).done(function(data){
    console.log("controlServo Done data= " + data)
    if ( callback != undefined ) {
        callback() ;
    }
  });
}


var breakMotion = false ; // 中斷動作用
var executeMotion_global = function( data, callback ) {
  breakMotion = false ;
  var motionIndex = 0 ;
  var motion = data["motion"] ;

  var loopSendMotion = function() {
    console.log("lopSendMotion looped at frame = " + motionIndex) ;
    if (motion[motionIndex] != undefined ) {
      if ( motion[motionIndex].length == 18 ) {
        controllerServo( motion[motionIndex] ) ;
        var ms = motion[motionIndex][17] ;
        motionIndex = motionIndex + 1 ;
        setTimeout( loopSendMotion, ms) ;
      }
      else {
        console.log("server count error @@" + motion[motionIndex].length ) ;
        console.log("error row = " + JSON.stringify( motion[motionIndex] )) ;
      }
    }
    else {
      // running end
      callback() ;
    }
  }
  loopSendMotion() ;

}

/*
  set servo degree
*/
var controlServo = function( servo, value ) {
  var url = "" ;
  if ( servo >= 0 && servo <= 15) { // is servo from wire
    url = robohero_url + "controller?servo=" + servo + "&value=" + value  ;
  }
  else { // servo from head
    url = robohero_url + "controller?gpid=12&value=" + value ;
  }

  $.get( url, function() {
  });
} ;

(function(ext) {
    ext.setRoboheroUrl = function(url ) {
        robohero_url = url ;
        runPMcallback( 99, function(){} ) ;
    };

    ext.findRobohero_ext = function(callback) {
      findRobohero(callback) ;
      runPMcallback( 99, function(){} ) ;
    } ;

    ext.motionStand = function(callback) {
        runPMcallback( 99, callback) ;
    };

    ext.motionForward = function(callback) {
        runPMcallback( 1, callback) ;
    };
    ext.motionBackward = function(callback) {
        runPMcallback( 2, callback) ;
    };

    ext.motionMoveLeft = function(callback) {
        runPMcallback( 5, callback) ;
    };
    ext.motionMoveRight = function(callback) {
        runPMcallback( 6, callback) ;
    };


    ext.motionTurnRight = function(callback) {
        runPMcallback( 3, callback) ;
    };
    ext.motionTurnLeft = function(callback) {
        runPMcallback( 4, callback) ;
    };


    ext.motionStandUp = function(callback) {
        runPMcallback( 11, callback) ;
    };
    ext.motionGetUp = function(callback) {
        runPMcallback( 12, callback) ;
    };

    ext.setServo = function(servo, degree) {
      controlServo( servo, degree) ;
    } ;

    ext.runPmsByName = function( name, callback ) {
        for ( i = 0 ; i < pmsMotionNames.length ; i++ ) {
            if ( name == pmsMotionNames[i] ) {
                runPMScallback( controllerPMS[i], callback ) ;
            }
        }
    };

    ext._shutdown = function() {
        console.log('Shutting down...');
    };

    ext.executeMotion = function( str, callback) {
        console.log("Run Motion") ;
        console.log("string len = " + str.length ) ;

        try {
            var dic = JSON.parse( str ) ;
            executeMotion_global( dic, callback ) ;
        } catch(e) {
            console.log("json format error") ;
            alert("JSON Format Error") ;
            callback() ;
        }
    } ;

    ext.executeFrame = function( frameStr, callback) {
        console.log("Run Frame 5") ;
        console.log("string len = " + frameStr.length ) ;
        var line = "{ \"arr\":[" + frameStr + "] }" ;

        try {
            var arr = JSON.parse(line);
            console.log("get executeFrame Arr, run it:") ;
            console.log( arr.arr ) ;
            controllerServo( arr.arr, callback ) ;
        } catch(e) {
            console.log("frame format error" + e )
            alert("Frame Format Error" + e) ;
            callback() ;
        }
    } ;

    ext._getStatus = function() {
      checkRoboheroAlive() ;
      if ( isRoboheroAlive == true ) {
        return {status: 2, msg: 'RoboHero Found:' + robohero_url };
      }
      else {
        return {status: 1, msg: 'Search for RoboHero...'};
      }
    };

    var descriptor = {
        blocks: [
            ['R', 'Find Robohero', 'findRobohero_ext'],
            [' ', 'RoboHero Address %s', 'setRoboheroUrl', robohero_url ],
            ['w', 'Stand', 'motionStand'],

            ['w', 'Forward', 'motionForward'],
            ['w', 'Backward', 'motionBackward'],
            ['w', 'MoveLeft', 'motionMoveLeft'],
            ['w', 'MoveRight', 'motionMoveRight'],

            ['w', 'TurnRight', 'motionTurnRight'],
            ['w', 'TurnLeft', 'motionTurnLeft'],

            ['w', 'Stand Up', 'motionStandUp'],
            ['w', 'Get Up', 'motionGetUp'],

            ['w', 'AdvanceMotion %m.pmsMotion', 'runPmsByName', pmsMotionNames[0] + "" ],



            /*
            ['w', 'Sport Motion %m.pmsMotion', 'runPmsByName', 'Bow'],
            ['w', 'Dance AdvanceMotion %m.pmsMotion', 'runPmsByName', 'Bow'],
            ['w', 'Combat AdvanceMotion %m.pmsMotion', 'runPmsByName', 'Bow']
            */

            ['w', 'Execute Frame: %s', 'executeFrame', "135, 135, 135, 135, 135, 135, 200, 135, 135, 60, 135, 135, 135, 135, 135, 135, 90 ,500" ],
            ['w', 'Execute Motion (JSON): %s', 'executeMotion', "" ],
            [' ', 'Set Servo, index: %n (0~16), degree: %n (0~270)', 'setServo', 0, 135]

        ],
        menus: {
          basicMotion: ['this way', 'that way', 'reverse'],
          pmsMotion: pmsMotionNames,
        },
          url: 'http://robohero.ttrobotix.com'
    };

    ScratchExtensions.register('RoboHero Basic:', descriptor, ext);
})({});
