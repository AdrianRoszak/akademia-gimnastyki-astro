export function imageParallax() {
	// Function that moves images parallax up or down when user scrolls
	// it should be applied only on screens larger than 1180px
	const images = document.querySelectorAll('[data-weirdo="images-move"]');
	// const windowWidth = window.innerWidth;

	window.addEventListener('load', () => {
		if (window.innerWidth >= 1180) {
			window.addEventListener('scroll', moveImages);
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1180) {
			window.addEventListener('scroll', moveImages);
		} else {
			window.removeEventListener('scroll', moveImages);
		}
	});

	function moveImages() {
		images.forEach((image, index) => {
			const speed = 0.25;
			//@ts-expect-error
			image.style.transform = `translateY(-${window.scrollY * speed}px) rotate(${index % 2 === 0 ? -5 : 5}deg)`;
		});
	}
}
