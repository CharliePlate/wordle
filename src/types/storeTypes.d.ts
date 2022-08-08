interface WordObj {
	[index: number]: string[];
}

interface KeyboardRow {
	[index: number]: string[];
}
interface KeyColor {
	[index: string]: Color;
}

type VoidFunction = () => void;

interface GameState {
	col: number;
	resetCol: VoidFunction;
	incrementCol: VoidFunction;
	decrementCol: VoidFunction;
	setCol: (col: number) => void;
}

interface PersistedGameStore {
	solution: string;
	setSolution: (genSolution: string) => void;

	row: number;
	incrementRow: VoidFunction;
}
