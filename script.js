function rpsGame(yourChoice) {
	console.log(yourChoice);
	var humanChoice, botChoice;
	humanChoice = yourChoice.id;

	botChoice = numberToChoice(ranRpsInt());
	console.log(botChoice);

	result = decideWinner(humanChoice, botChoice);
	console.log(result);

	massage = finalMassage(result);
	console.log(massage);

	rpsFontEnd(yourChoice.id, botChoice, massage);
}
function ranRpsInt() {
	return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
	return ["rock", "paper", "scissor"][number];
}
function decideWinner(yourChoice, computerChoice) {
	var rpsDatabase = {
		rock: { scissor: 1, rock: 0.5, paper: 0 },
		paper: { rock: 1, paper: 0.5, scissor: 0 },
		scissor: { paper: 1, scissor: 0.5, rock: 0 },
	};
	var yourScore = rpsDatabase[yourChoice][computerChoice];
	var computerScore = rpsDatabase[computerChoice][yourChoice];
	return [yourScore, computerScore];
}
function finalMassage([yourScore, computerScore]) {
	if (yourScore === 0) {
		return { massage: "You Lost", color: "red" };
	} else if (yourScore === 0.5) {
		return { massage: "You Tied", color: "yellow" };
	} else {
		return { massage: "You Won", color: "green" };
	}
}
function rpsFontEnd(humanImageChoice, botImageChoice, finalMassage) {
	var imageDatabase = {
		rock: document.getElementById("rock").src,
		paper: document.getElementById("paper").src,
		scissor: document.getElementById("scissor").src,
	};
	document.getElementById("rock").remove();
	document.getElementById("paper").remove();
	document.getElementById("scissor").remove();

	var humanDiv = document.createElement("div");
	var botDiv = document.createElement("div");
	var massageDiv = document.createElement("div");

	humanDiv.innerHTML =
		"<img src='" +
		imageDatabase[humanImageChoice] +
		"' style='box-shadow: 0 10px 50px rgba(37,50,233,1); border-radius:50%;'>";
	massageDiv.innerHTML =
		"<h1 style= 'color: " +
		finalMassage["color"] +
		"; font-size:60px; padding:30px;'>" +
		finalMassage["massage"] +
		"</h1>";
	botDiv.innerHTML =
		"<img src='" +
		imageDatabase[botImageChoice] +
		"' style='box-shadow: 0 10px 50px rgba(243,38,24,1); border-radius:50%;'>";
	document.getElementById("flex-box-rps-div").appendChild(humanDiv);
	document.getElementById("flex-box-rps-div").appendChild(massageDiv);
	document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
