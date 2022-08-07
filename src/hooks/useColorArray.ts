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
		console.log(updatedArr);
		setArr(updatedArr);
	};
	return { colorArr, updateColors };
};

export default useColorArray;
