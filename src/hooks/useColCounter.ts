import { useState } from 'react';

const useColCounter = (): ColCounter => {
	const [col, setCol] = useState(0);

	const increment = () => {
		setCol(col + 1);
	};

	const decrement = () => {
		setCol(col - 1);
	};

	const setCounterValue = (val: number) => {
		setCol(val);
	};

	return { col, increment, decrement, setCounterValue };
};

export default useColCounter;
