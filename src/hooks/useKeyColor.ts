import { useState } from 'react';
import { keyColor } from '../lib/keyboard';

const useKeyColor = () => {
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
		console.log(colorObj);
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
	return { createKeyObject, keyColorArr, updateKeyColors };
};

export default useKeyColor;
