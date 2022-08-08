import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { generateRandomWord } from '../words';

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
		persist((set) => ({
			solution: generateRandomWord(),
			setSolution: (genSolution: string) => ({ solution: genSolution }),

			row: 0,
			incrementRow: () => set((state) => ({ row: state.row + 1 })),
		}))
	)
);

export { useGameStore, usePersistedGameStore };
