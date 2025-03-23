export function applyFadeDownAnimation() {
	const elements = document.querySelectorAll('[data-animation="fade-down"]');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.add('fade-down');
					observer.unobserve(entry.target);
				}, index * 100); // Adjust the delay as needed
			}
		});
	});

	for (const element of elements) {
		observer.observe(element);
	}
}
