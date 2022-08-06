const handleKeyPress = (
	colCounter: ColCounter,
	keyPress: string,
	val: string[]
): void => {
	const { counter, decrement, increment } = colCounter;
	if (keyPress === 'ArrowLeft') {
		if (counter === 0) {
			return;
		} else {
			decrement();
			return;
		}
	} else if (keyPress === 'ArrowRight') {
		if (counter === 4) {
			return;
		} else {
			increment();
			return;
		}
	}
	if (keyPress === 'Backspace') {
		if (counter === 0 || val[counter] !== '') {
			return;
		} else {
			decrement();
			return;
		}
	} else {
		if (counter === 4) {
			return;
		} else {
			increment();
		}
	}
};

export default handleKeyPress;
