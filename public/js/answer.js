const newAnswer = async (event) => {
	//  CHOICE option has ID attribute

	if (event.target.hasAttribute('data-id')) {
		console.log('Found answer to create');
		const choices_id = event.target.getAttribute('data-id');
		// const choices_id = event.target.getAttribute('id');

		const response = await fetch(`/api/answers/`, {
			method: 'POST',
			body: JSON.stringify({ choices_id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.reload;
		} else {
			alert('Failed to record answer.');
		}
	}
};

document.querySelector('#story-choices').addEventListener('click', newAnswer);
