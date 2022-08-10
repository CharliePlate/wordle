const handleKeyPressLetter = (
	wordArr: string[][],
	val: string,
	row: number,
	pos: number
) => {
	const newArr = [...wordArr];
	if (val === 'Backspace') {
		newArr[row][pos] = '';
		return newArr;
	}
	if (val.length > 1) {
		return newArr;
	}
	newArr[row][pos] = val.toUpperCase();
	return newArr;
};

const handleKeyPressCol = (
	columnStateHandler: ColumnStateHandler,
	keyPress: string,
	val: string[]
): void => {
	const { col, decrementCol, incrementCol } = columnStateHandler;
	if (keyPress === 'ArrowLeft') {
		if (col === 0) {
			return;
		} else {
			decrementCol();
			return;
		}
	} else if (keyPress === 'ArrowRight') {
		if (col === 4) {
			return;
		} else {
			incrementCol();
			return;
		}
	} else if (keyPress === 'Backspace') {
		if (col === 0 || val[col] !== '') {
			return;
		} else {
			decrementCol();
			return;
		}
	} else {
		if (col === 4) {
			return;
		} else {
			incrementCol();
		}
	}
};

export { handleKeyPressCol, handleKeyPressLetter };
