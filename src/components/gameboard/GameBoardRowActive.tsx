import { Box, Center, Group } from '@mantine/core';
import React from 'react';
import useColCounter from '../../hooks/useColCounter';
import useKeyPress from '../../hooks/useKeyPress';
import handleKeyPress from '../../lib/gameControls/handleKeyPress';
import GameBoardItem from './GameBoardRowItem';

type Props = {
	word: string[];
	handleWord: (rowNum: number, position: number, val: string) => void;
};

const availableLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ActiveGameBoardRow = (props: Props) => {
	// Props
	const { word, handleWord } = props;

	// Hooks
	const colCounter = useColCounter();
	useKeyPress([...availableLetters.split(''), 'Backspace'], (k) => {
		handleKeyPress(colCounter, k, word);
	});

	// Component
	return (
		<Center>
			<Group sx={{ padding: 1, gap: '2px' }}>
				{word.map((val, idx) => (
					<Box>
						<GameBoardItem
							status={colCounter.col === idx ? 'typing' : 'undef'}
							letter={val}
							pos={idx}
							key={idx}
							onClick={colCounter.setCounterValue}
						/>
					</Box>
				))}
			</Group>
		</Center>
	);
};

export default ActiveGameBoardRow;
