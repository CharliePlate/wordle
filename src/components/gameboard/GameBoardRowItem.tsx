import { Box } from '@mantine/core';
import React, { memo } from 'react';
import useStore from '../../lib/store';

type Props = {
	letter?: string;
	pos?: number;
	status?: string;
	onClick?: (pos: number) => void;
};

const GameBoardItem = memo((props: Props) => {
	// Props
	const { letter, pos, status, onClick } = props;

	// Hooks
	const { row } = useStore();

	// Component
	return status ? (
		<Box
			sx={{
				backgroundColor: 'hsla(111, 0%, 77%, 1)',
				height: 75,
				width: 75,
				border: `${
					status === 'typing' ? '5px dashed black' : '2px solid black'
				}`,
				borderRadius: `${status === 'typing' ? '5px' : '0px'}`,
				fontSize: 50,
				color: 'black',
			}}
			key={pos}
			onClick={() => onClick!(pos!)}
		>
			{props.letter}
		</Box>
	) : (
		<Box
			sx={{
				backgroundColor: 'hsla(111, 0%, 77%, 1)',
				height: 75,
				width: 75,
				border: '2px solid black',
				borderRadius: '0',
				fontSize: 50,
				color: 'black',
			}}
		>
			{props.letter}
		</Box>
	);
});

export default GameBoardItem;
