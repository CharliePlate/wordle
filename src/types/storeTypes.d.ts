interface WordObj {
	[index: number]: string[];
}

interface KeyboardRow {
	[index: number]: string[];
}
interface KeyColor {
	[index: string]: Color;
}

interface GameState {
	row: number;
	incrementRow: () => void;
}
