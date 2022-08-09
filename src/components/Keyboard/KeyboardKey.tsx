import { Box } from '@mantine/core';
import React, { memo, useCallback } from 'react';
import {
	handleKeyPressCol,
	handleKeyPressLetter,
} from '../../lib/gameControls/handleKeyPress';
import {
	handleColorSubmit,
	handleKeyColorSubmit,
} from '../../lib/gameControls/handleWordSubmit';
import isValidWord from '../../lib/gameControls/isValidWord';
import {
	useGameStore,
	usePersistedGameStore,
} from '../../lib/stores/gameStore';

type Props = {
	letter: string;
	color: Color;
	width: number;
	handleKeyPress: (letter: string) => void;
};

const KeyboardKey = memo((props: Props) => {
	// Props

	const { letter, color, width, handleKeyPress } = props;

	// Hooks

	const { boardState, row, setBoardState } = usePersistedGameStore();

	// Component
	console.log(letter);
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
				userSelect: 'none',
			}}
			onClick={() => {
				handleKeyPress(letter);
			}}
		>
			{letter}
		</Box>
	);
});

export default KeyboardKey;
