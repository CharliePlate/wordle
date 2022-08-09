const handleColorSubmit = (
	guess: string[],
	colorArr: Color[][],
	solution: string,
	row: number
) => {
	const solutionArr = solution.split('');

	const correctArr = guess.map((_, idx) => {
		if (guess[idx] === solutionArr[idx]) {
			solutionArr[idx] = '';
			return 'correct';
		}
		return '';
	});

	const newArr = guess.map((letter, idx) => {
		if (correctArr[idx]) {
			return correctArr[idx];
		} else if (solutionArr.includes(letter)) {
			solutionArr[solutionArr.indexOf(letter)] = '';
			return 'present';
		} else {
			return 'wrong';
		}
	});
	const updatedArr = [...colorArr];
	updatedArr[row] = newArr;
	return updatedArr;
};

const handleKeyColorSubmit = (
	colorArr: Color[],
	keyColors: KeyColor,
	guess: string[]
) => {
	const createKeyObject = (guess: string[], colorArr: Color[]) => {
		const colorObj: KeyColor = {};
		guess.forEach((key, idx) => {
			if (colorObj[key]) {
				if (colorObj[key] === 'correct') {
					return;
				} else if (
					colorObj[key] === 'present' &&
					guess[idx] !== 'correct'
				) {
					return;
				} else {
					colorObj[key] = colorArr[idx];
				}
			} else {
				colorObj[key] = colorArr[idx];
			}
		});
		return colorObj;
	};

	const newObj = { ...keyColors };
	const keysToUpdate = createKeyObject(guess, colorArr);

	Object.keys(keysToUpdate).forEach((key) => {
		if (newObj[key] === 'correct') {
			return;
		}
		if (newObj[key] === 'present' && keysToUpdate[key] !== 'correct') {
			return;
		}
		newObj[key] = keysToUpdate[key];
	});

	return newObj;
};

export { handleColorSubmit, handleKeyColorSubmit };
