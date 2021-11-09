async function newgame(event) {
	event.preventDefault();

	document.location.replace('/story/1');
}

document.querySelector('#newgame-btn').addEventListener('click', newgame);
