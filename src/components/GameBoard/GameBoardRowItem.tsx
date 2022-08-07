import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import React, { memo } from 'react';

type Props = {
	letter?: string;
	pos?: number;
	status: string;
	onClick?: (pos: number) => void;
};

const GameBoardItem = memo((props: Props) => {
	// Props
	const { letter, pos, status, onClick } = props;

	// Component
	return status === 'typing' || status === 'undef' ? (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
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
			{letter}
		</Box>
	) : (
		<Box
			sx={{
				backgroundColor: `${
					{
						correct: 'green',
						wrong: 'hsla(111, 0%, 50%, 1)',
						present: 'orange',
					}[status] || 'hsla(111, 0%, 77%, 1)'
				}`,
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
				height: 75,
				width: 75,
				border: '2px solid black',
				borderRadius: '0',
				fontSize: 50,
				color: 'black',
			}}
		>
			{letter}
		</Box>
	);
});

export default GameBoardItem;
