var npcUser = {
	"bug" : {
		"id" : "bug",
		"name" : "嫉妒北",
		"gender" : "F"
	},
	"cloud" : {
		"id" : "cloud",
		"name" : "雨雲",
		"gender" : "M"
	},
	"essential" : {
		"id" : "essential",
		"name" : "飛天豬豬",
		"gender" : "M"
	},
	"grin" : {
		"id" : "grin",
		"name" : "陰笑",
		"gender" : "M"
	},
	"kiki" : {
		"id" : "kiki",
		"name" : "小茶",
		"gender" : "F"
	},
	"kira" : {
		"id" : "kira",
		"name" : "殘風朔夜",
		"gender" : "M"
	},
	"mount" : {
		"id" : "mount",
		"name" : "('．ω．`)",
		"gender" : "M"
	},
	"orange" : {
		"id" : "orange",
		"name" : "橘",
		"gender" : "F"
	},
	"qoo" : {
		"id" : "qoo",
		"name" : "低低地",
		"gender" : "F"
	},
	"small" : {
		"id" : "small",
		"name" : "小龍仔",
		"gender" : "M"
	},
	"zeta" : {
		"id" : "zeta",
		"name" : "淆底獸",
		"gender" : "M"
	}
}




var myChar = null;

function showUsers() {
	var returnValue = "在線的玩家有(假的)︰\n";
	var key = new Array();
	for (var userName in npcUser)
	{
		key.push(userName+"");
	}
	key = key.sort();

	for (var i = 0; i < key.length; i ++) {
		returnValue += "    " + npcUser[key[i]].name + " (" + key[i] + ")\n"
	}
	return returnValue.replace(/ /g, "&nbsp;");
}

function query_self(player) {
	return (player.gender == "F"?"妾身":"在下");
}

function query_self_rude(player) {
	return (player.gender == "F"?"本姑娘":"大爺我");
}

function query_self_close(player) {
	return (player.gender == "F"?"小妹我":"小弟我");
}

function query_close(player) {
	return (player.gender == "F"?"妹妹":"弟弟");
}

function query_respect(player) {
	return (player.gender == "F"?"姑娘":"壯士");
}

function query_rude(player) {
	return (player.gender == "F"?"賊婆娘":"臭賊");
}

function setMyChar(myId, myName, myGender) {
	npcUser[myId] = {
		"id" : myId,
		"name" : myName,
		"gender" : myGender
	};
	myChar = npcUser[myId];
}