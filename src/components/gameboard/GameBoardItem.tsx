import { Box } from '@mantine/core';
import React, { memo, useEffect } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import useStore from '../../store';

type Props = {
	letter: string;
	pos: number;
	handleWord: (rowNum: number, position: number, val: string) => void;
};

const GameBoardItem = memo((props: Props) => {
	const { row } = useStore();

	return (
		<Box
			sx={{
				height: 75,
				width: 75,
				backgroundColor: 'blue',
				border: '4px solid black',
			}}
			onClick={() => {
				props.handleWord(row, props.pos, 'a');
			}}
		>
			{props.letter}
		</Box>
	);
});

export default GameBoardItem;
