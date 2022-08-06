const handleKeyPress = (
	colCounter: ColCounter,
	keyPress: string,
	val: string[]
): void => {
	const { col, decrement, increment } = colCounter;
	if (keyPress === 'Backspace') {
		if (col === 0 || val[col] !== '') {
			return;
		} else {
			colCounter.decrement();
			return;
		}
	} else {
		if (col === 4) {
			return;
		} else {
			colCounter.increment();
		}
	}
};

export default handleKeyPress;
