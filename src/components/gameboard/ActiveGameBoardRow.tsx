import { Center, Group } from '@mantine/core';
import React from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import GameBoardItem from './GameBoardItem';

type Props = {
	word: string[];
	handleWord: (rowNum: number, position: number, val: string) => void;
};

const availableLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ActiveGameBoardRow = (props: Props) => {
	// Props
	const { word, handleWord } = props;

	// Hooks
	useKeyPress([...availableLetters.split('')], (k) => {
		alert(k);
	});

	// Component
	return (
		<Center>
			<Group sx={{ padding: 1, gap: '2px' }}>
				{word.map((val, idx) => (
					<GameBoardItem
						status={'typing'}
						letter={val}
						pos={idx}
						key={idx}
					/>
				))}
			</Group>
		</Center>
	);
};

export default ActiveGameBoardRow;
