import { Box, Center, Group } from '@mantine/core';
import React from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import {
	handleKeyPressCol,
	handleKeyPressLetter,
} from '../../lib/gameControls/handleKeyPress';
import {
	useGameStore,
	usePersistedGameStore,
} from '../../lib/stores/gameStore';
import GameBoardItem from './GameBoardRowItem';

type Props = {
	word: string[];
};

const availableLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const GameBoardRowActive = (props: Props) => {
	// Props
	const { word } = props;

	// Hooks

	const { col, setCol, incrementCol, decrementCol } = useGameStore();
	const { setBoardState, boardState, row } = usePersistedGameStore();

	useKeyPress(
		[...availableLetters.split(''), 'Backspace', 'ArrowLeft', 'ArrowRight'],
		(k) => {
			setBoardState(handleKeyPressLetter(boardState, k, row, col));
			handleKeyPressCol(
				{ col, incrementCol, decrementCol },
				k,
				boardState[row]
			);
		}
	);

	// Component
	return (
		<Center>
			<Group sx={{ padding: 1, gap: '2px', flexWrap: 'nowrap' }}>
				{boardState[row].map((val, idx) => (
					<GameBoardItem
						status={col === idx ? 'typing' : 'undef'}
						letter={val}
						pos={idx}
						key={idx}
						onClick={setCol}
					/>
				))}
			</Group>
		</Center>
	);
};

export default GameBoardRowActive;
