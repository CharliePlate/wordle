import { Box, Center, Group } from '@mantine/core';
import React from 'react';
import useColCounter from '../../hooks/useCounter';
import useKeyPress from '../../hooks/useKeyPress';
import handleKeyPress from '../../lib/gameControls/handleKeyPress';
import { usePersistedGameStore } from '../../lib/stores/gameStore';
import GameBoardItem from './GameBoardRowItem';

type Props = {
	word: string[];
	handleWord: (rowNum: number, position: number, val: string) => void;
};

const availableLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const GameBoardRowActive = (props: Props) => {
	// Props
	const { word, handleWord } = props;

	// Hooks
	const { row } = usePersistedGameStore();
	const colCounter = useColCounter();
	const { counter, setCounter } = colCounter;

	useKeyPress(
		[...availableLetters.split(''), 'Backspace', 'ArrowLeft', 'ArrowRight'],
		(k) => {
			handleKeyPress(colCounter, k, word);
			handleWord(row, counter, k);
		}
	);

	// Component
	return (
		<Center>
			<Group sx={{ padding: 1, gap: '2px', flexWrap: 'nowrap' }}>
				{word.map((val, idx) => (
					<GameBoardItem
						status={counter === idx ? 'typing' : 'undef'}
						letter={val}
						pos={idx}
						key={idx}
						onClick={setCounter}
					/>
				))}
			</Group>
		</Center>
	);
};

export default GameBoardRowActive;
