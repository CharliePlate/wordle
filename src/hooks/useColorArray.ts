import { useState } from 'react';

const useColorArray = () => {
	const [colorArr, setArr] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	] as Color[][]);

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
			if (correctArr[idx]) {
				return correctArr[idx];
			} else if (ansArr.includes(letter)) {
				ansArr[idx] = '';
				return 'present';
			} else {
				return 'wrong';
			}
		});
		const updatedArr = [...colorArr];
		updatedArr[row] = newArr;
		console.log(updatedArr);
		setArr(updatedArr);
	};
	return { colorArr, updateColors };
};

export default useColorArray;
