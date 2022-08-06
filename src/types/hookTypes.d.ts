interface ColCounter {
	col: number;
	increment: () => void;
	decrement: () => void;
	setCounterValue: (val: number) => void;
}
