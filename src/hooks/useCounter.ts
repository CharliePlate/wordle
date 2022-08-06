import { useState } from 'react';

const useCounter = (): ColCounter => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	return { counter, setCounter, increment, decrement };
};

export default useCounter;
