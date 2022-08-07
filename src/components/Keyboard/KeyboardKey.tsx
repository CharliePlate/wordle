import { Box } from '@mantine/core';
import React from 'react';

type Props = {
	letter: string;
	color: Color;
};

const KeyboardKey = (props: Props) => {
	// Props
	const { letter, color } = props;

	// Hooks
	// Component
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 0,
				minWidth: `${
					letter === 'ENTER' || letter === 'DELETE' ? '75px' : '30px'
				}`,
				maxWidth: '35px',
				borderRadius: '5px',
				height: '45px',
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
};

export default KeyboardKey;
