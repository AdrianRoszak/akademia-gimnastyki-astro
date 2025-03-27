export function applyFadeDownAnimation() {
	const elements = document.querySelectorAll('[data-animation="fade-down"]');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('fade-down');
						observer.unobserve(entry.target);
					}, index * 200);
				}
			});
		},
		{ threshold: 0.05 },
	);

	for (const element of elements) {
		observer.observe(element);
	}
}

export function applyFadeAnimation() {
	const elements = document.querySelectorAll('[data-animation="fade"]');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('fade');
						observer.unobserve(entry.target);
					}, index * 200);
				}
			});
		},
		{ threshold: 0.05 },
	);

	for (const element of elements) {
		observer.observe(element);
	}
}

export function applySlideLeftAnimation() {
	const elements = document.querySelectorAll('[data-animation="slide-left"]');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('slide-left');
						observer.unobserve(entry.target);
					}, index * 200);
				}
			});
		},
		{ threshold: 0.05 },
	);

	for (const element of elements) {
		observer.observe(element);
	}
}
