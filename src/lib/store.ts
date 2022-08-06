import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create<GameState>()(
	devtools((set) => ({
		row: 0,
		incrementRow: () => set((state) => ({ row: state.row + 1 })),
	}))
);

export default useStore;
