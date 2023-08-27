let p1 = localStorage.getItem('p1')
let p2 = localStorage.getItem('p2')

function startGame() {
	p1 = document.getElementById('player-1').value;
	localStorage.setItem('p1', p1);
	p2 = document.getElementById('player-2').value;
	localStorage.setItem('p2', p2);

	if (!p1 || !p2) {
		if (!p1) {
			document.getElementById('player-1').style.background = "#ffbaba";
		}
		if (!p2) {
			document.getElementById('player-2').style.background = "#ffbaba";
		}
	} else {
		window.open("./game.html", "_self");
	}
}

function resetNames() {
	p1 = null;
	p2 = null;
}