import { Center, Group } from '@mantine/core';
import React, { memo } from 'react';
import GameBoardItem from './GameBoardRowItem';

type Props = {
	word: string[];
};

const GameBoardRow = memo((props: Props) => {
	// Props
	const { word } = props;
	console.log('rerender');
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
});

export default GameBoardRow;
