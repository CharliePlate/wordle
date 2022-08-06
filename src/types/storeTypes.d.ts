interface WordObj {
	[index: number]: string[];
}

interface GameState {
	row: number;
	incrementRow: () => void;
}
