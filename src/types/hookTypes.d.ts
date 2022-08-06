interface ColCounter {
	counter: number;
	increment: () => void;
	decrement: () => void;
	setCounter: (val: number) => void;
}

type Color = 'correct' | 'present' | 'wrong' | '';
