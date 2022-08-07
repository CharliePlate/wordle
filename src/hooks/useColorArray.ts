import { useState } from 'react';
import { keyColor } from '../lib/keyboard';

const useColorArray = () => {
	const [colorArr, setArr] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	] as Color[][]);

	const [keyColorArr, setKeyColorArr] = useState(keyColor);

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

	const updateKeyColors = (keysToUpdate: KeyColor) => {
		const newObj = { ...keyColorArr };
		Object.keys(keysToUpdate).forEach((key) => {
			if (newObj[key] === 'correct') {
				return;
			}
			if (newObj[key] === 'present' && keysToUpdate[key] !== 'correct') {
				return;
			}
			newObj[key] = keysToUpdate[key];
		});
		setKeyColorArr(newObj);
	};

	const updateColors = (ans: string, guess: string[], row: number): void => {
		const ansArr = ans.split('');

		const correctArr = guess.map((_, idx) => {
			if (guess[idx] === ansArr[idx]) {
				ansArr[idx] = '';
				return 'correct';
			}
			return '';
		});

		const newArr = guess.map((letter, idx) => {
			console.log(ansArr);
			if (correctArr[idx]) {
				console.log('here');
				return correctArr[idx];
			} else if (ansArr.includes(letter)) {
				ansArr[ansArr.indexOf(letter)] = '';
				return 'present';
			} else {
				return 'wrong';
			}
		});
		const updatedArr = [...colorArr];
		updatedArr[row] = newArr;

		console.log(createKeyObject(guess, updatedArr[row]));
		updateKeyColors(createKeyObject(guess, updatedArr[row]));

		setArr(updatedArr);
	};
	return { colorArr, updateColors, keyColorArr };
};

export default useColorArray;
