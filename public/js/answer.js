const newAnswer = async (event) => {
	//  CHOICE option has ID attribute

	if (event.target.hasAttribute('data-id')) {
		const choices_id = event.target.getAttribute('data-id');
		const route_id = event.target.getAttribute('data-route');

		const response = await fetch('/api/answers/', {
			method: 'POST',
			body: JSON.stringify({ choices_id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok && choices_id > 33) {
			document.location.replace('/dashboard');
		} else if (response.ok && choices_id < 34) {
			document.location.replace(`/story/${route_id}`);
		} else {
			alert('Failed to record answer.');
		}
	}
};

document.querySelector('#story-choices').addEventListener('click', newAnswer);
