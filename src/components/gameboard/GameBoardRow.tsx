import { Center, Group } from '@mantine/core';
import React from 'react';
import GameBoardItem from './GameBoardItem';

type Props = {
	word: string[];
};

const GameBoardRow = (props: Props) => {
	// Props
	const { word } = props;

	// Hooks

	// Component
	return (
		<Center>
			<Group sx={{ padding: 1, gap: '2px' }}>
				{word.map((val, idx) => (
					<GameBoardItem pos={idx} letter={val} key={idx} />
				))}
			</Group>
		</Center>
	);
};

export default GameBoardRow;
