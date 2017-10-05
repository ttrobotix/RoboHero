/*
	put all Custom RoboHero block and RoboHero with this js

*/

var langMenu = {} ;


var en = {
	// default to all do not mod anything
}

var tw = {
	"Run": "執行",
	"Save": "儲存",
	"Open": "打開",
	"Undo": "復原",
	"Redo": "重作",
	"Preview": "預覽",
	"Remove All Block": "刪除所有方塊",
	"Change": "改變語言",
	"Help": "說明",
	
	"RoboHero Url": "RoboHero位子",
	"Normal Motion": "普通動作",
	"Sport Motion": "運動動作",
	"Dance Motion": "跳舞動作",
	"Execute Motion (JSON):": "執行動作(JSON)",
	"Control Servo , Index=": "控制伺服機, 編號=",
	"Degree": "角度",
	"Execute Frame": "執行影格",
	"Head": "頭",
	"Left Hand": "左手",
	"Right Hand": "右手",
	"Left Leg": "左腳",
	"Right Leg": "右腳"
}

langMenu["zh-hant"] = tw ;

var toggleLang = function( key ) {
	console.log("Call toggleLang=" + key) ;
	if ( Code.getLang() != undefined ) {
		if (langMenu[Code.getLang()] != undefined ) {
			var lang = langMenu[Code.getLang()] ;
			if ( lang[key] != undefined ) {
				return lang[key] ; 
			}
		}
	}
	console.log("toggleLang Error:" + key ) ;
	return key ;
}

var initManuLang = function() {
	var lang = langMenu["zh-hant"] ;
	$("#runButton").html( $("#runButton").html().replace("Run", lang["Run"]))  ;
	$("#openButton").html( $("#openButton").html().replace("Open", lang["Open"]))  ;
	$("#saveButton").html( $("#saveButton").html().replace("Save", lang["Save"]))  ;
	$("#undoButton").html( $("#undoButton").html().replace("Undo", lang["Undo"]))  ;
	$("#redoButton").html( $("#redoButton").html().replace("Redo", lang["Redo"]))  ;
	$("#previewButton").html( $("#previewButton").html().replace("Preview", lang["Preview"]))  ;
	$("#removeButton").html( $("#removeButton").html().replace("Remove All Block", lang["Remove All Block"]))  ;
	$("#langButton").html( $("#langButton").html().replace("Change", lang["Change"]))  ;
			
}