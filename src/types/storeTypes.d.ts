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

	row: number;
	incrementRow: VoidFunction;

	boardState: string[][];
	setBoardState: (boardState: string[][]) => void;

	colorState: Color[][];
	setColorState: (colorState: Color[][]) => void;

	keyColors: KeyColor;
	setKeyColors: (keyColors: KeyColor) => void;

	setColors: (colorState: Color[][], keyColors: KeyColor) => void;
	resetGame: VoidFunction;
}

interface ColumnStateHandler {
	col: number;
	incrementCol: VoidFunction;
	decrementCol: VoidFunction;
}
