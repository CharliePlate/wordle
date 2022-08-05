import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface GameState {
	row: number;
	setRow: () => void;
}

const useStore = create<GameState>()(
	devtools((set) => ({
		row: 0,
		setRow: () => set((state) => ({ row: state.row + 1 })),
	}))
);

export default useStore;
