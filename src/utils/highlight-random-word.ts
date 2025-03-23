export function highlightRandomWord(text: string) {
	const words = text.split(' ');
	const randomIndex = Math.floor(Math.random() * words.length);
	const colors = ['accent-1', 'accent-2', 'accent-3'];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	words[randomIndex] =
		`<span style="color: var(--weirdo-color-${randomColor});">${words[randomIndex]}</span>`;
	return words.join(' ');
}
