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
			newArr[row][pos] = val;
			return newArr;
		});
	}, []);

	return { arr, updateWord };
};

export default useWordArray;
