const handleKeyPress = (
	colCounter: ColCounter,
	keyPress: string,
	val: string[]
): void => {
	const { counter, decrement, increment } = colCounter;
	if (keyPress === 'Backspace') {
		if (counter === 0 || val[counter] !== '') {
			return;
		} else {
			colCounter.decrement();
			return;
		}
	} else {
		if (counter === 4) {
			return;
		} else {
			colCounter.increment();
		}
	}
};

export default handleKeyPress;
