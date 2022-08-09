import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { keyColor } from '../keyboard';
import { generateRandomWord } from '../words';

const emptyArr: String[] | Color[][] = [
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
];

const useGameStore = create<GameState>()(
	devtools((set) => ({
		col: 0,
		resetCol: () => set((state) => ({ col: 0 })),
		incrementCol: () => set((state) => ({ col: state.col + 1 })),
		decrementCol: () => set((state) => ({ col: state.col - 1 })),
		setCol: (col: number) => set((state) => ({ col: col })),
	}))
);

const usePersistedGameStore = create<PersistedGameStore>()(
	devtools(
		persist(
			(set) => ({
				solution: generateRandomWord(),

				row: 0,
				incrementRow: () => set((state) => ({ row: state.row + 1 })),

				boardState: emptyArr,
				setBoardState: (boardState) =>
					set(() => ({ boardState: boardState })),

				colorState: emptyArr,
				setColorState: (colorState) =>
					set(() => ({ colorState: colorState })),

				keyColors: keyColor,
				setKeyColors: (keyColors: KeyColor) => ({
					keyColors: keyColors,
				}),

				resetBoard: () => set(() => ({ boardState: [...emptyArr] })),

				resetGame: () =>
					set(() => ({
						boardState: [...emptyArr],
						colorState: [...emptyArr],
						keyColors: keyColor,
						row: 0,
						solution: generateRandomWord(),
					})),
			}),
			{ name: 'game-state' }
		)
	)
);

export { useGameStore, usePersistedGameStore };
