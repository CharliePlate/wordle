import { Box } from '@mantine/core';
import React, { memo } from 'react';

type Props = {
	letter: string;
	color: Color;
	width: number;
};

const KeyboardKey = memo((props: Props) => {
	// Props
	const { letter, color, width } = props;

	// Hooks
	// Component
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 0,
				width: parseInt(
					`${
						['ENTER', 'DELETE'].includes(letter)
							? width * 1.7
							: width
					}`
				),
				maxWidth: parseInt(
					`${['ENTER', 'DELETE'].includes(letter) ? 100 : 45}`
				),
				borderRadius: '5px',
				height: '55px',
				backgroundColor: `${
					{
						correct: 'green',
						wrong: 'hsla(111, 0%, 50%, 1)',
						present: 'orange',
						'': 'hsla(111, 0%, 77%, 1)',
					}[color]
				}`,
				color: 'black',
			}}
		>
			{letter}
		</Box>
	);
});

export default KeyboardKey;
