//for debug
function checking()
{
	var counter = 0;
	var list = "";
	for (var record in emote)
	{
		if (emote[record][1] == 0) {
			counter++;
			list += record + "\n";
		}
	}
	//console.log(counter + ": " + list);
}

function showResponse()
{
	var inputValue = $.trim($("#txtInput").val());
	if (inputValue != ""){
		var response = "";
		var inputValues = inputValue.split(" ");
		if (inputValues.length > 1) inputValue = inputValues[0];
		switch (inputValue)
		{
			case "help":
				response = "暫時只有 3 個指令︰ help, semote, who";
				break;
			case "semote":
				response = showEmote((inputValues.length > 1?inputValues[1]:null));
				break;
			case "who":
				response = showUsers();
				break;
			default:
				response = praseEmote(inputValues.join(" "));
		}
		
		if (!response || response == "") {
				response = "甚麼?";
		}
		response = inputValues.join(" ") + "\n" + response;
		$("#displayArea").append(response.replace(/\n/g, "<br/>") + "<br class='newLine'/>> ");
	}
	else {
		$("#displayArea").append("<br class='newLine'/>> ");
	}
	
	$("#displayArea").attr("scrollTop", $("#displayArea")[0].scrollHeight);
	$("#txtInput").select();
}

$("#txtInput").keypress(function(e){
	try {
		if (e.which == 13) showResponse();
	}
	catch (err) {
		//console.log(err);
	}
});

$("#btnLogin").click(function(){
	var myId = $("#txtMyID").val();
	var myName = $("#txtMyName").val();
	var myGender = "M";
	setMyChar(myId, myName, myGender);
	$("#loginArea").hide();
	$("#txtInput").removeAttr("disabled");
	$("#txtInput").focus();
	return false;
});

$(document).ready(function(){
	$("#displayArea").append("> ");
});