export function highlightRandomWord(text: string) {
	const words = text.split(' ');
	const longWords = words.filter((word) => word.length > 2);
	if (longWords.length === 0) return text;
	const randomIndex = Math.floor(Math.random() * longWords.length);
	const colors = ['accent-1', 'accent-2', 'accent-3'];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	const wordToHighlight = longWords[randomIndex];
	const highlightedWord = `<span style="color: var(--weirdo-color-${randomColor});">${wordToHighlight}</span>`;
	return words.map((word) => (word === wordToHighlight ? highlightedWord : word)).join(' ');
}
