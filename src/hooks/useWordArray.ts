import { useCallback, useState } from 'react';

const useWordArray = () => {
	const [arr, setArr] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	] as string[][]);

	const updateWord = useCallback((row: number, pos: number, val: string) => {
		setArr((arr: string[][]) => {
			const newArr = [...arr];
			if (val === 'Backspace') {
				newArr[row][pos] = '';
				return newArr;
			}
			if (val.length > 1) {
				return newArr;
			}
			newArr[row][pos] = val.toUpperCase();
			return newArr;
		});
	}, []);

	return { arr, updateWord };
};

export default useWordArray;
