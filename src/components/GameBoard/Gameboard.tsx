import { Box, Button } from '@mantine/core';
import React from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import { handleColorSubmit } from '../../lib/gameControls/handleWordSubmit';
import isValidWord from '../../lib/gameControls/isValidWord';
import {
	useGameStore,
	usePersistedGameStore,
} from '../../lib/stores/gameStore';
import KeyBoard from '../Keyboard/KeyBoard';
import GameBoardRow from './GameBoardRow';
import GameBoardRowActive from './GameBoardRowActive';

type Props = {};

const Gameboard = (props: Props) => {
	// Props
	// Hooks
	const {
		solution,
		row,
		incrementRow,
		boardState,
		colorState,
		setColorState,
		keyColors,
		resetGame,
	} = usePersistedGameStore();

	const { resetCol } = useGameStore();

	useKeyPress(['Enter'], (k) => {
		const res = isValidWord(boardState[row]);
		if (res === 'valid') {
			setColorState(
				handleColorSubmit(boardState[row], colorState, solution, row)
			);
			resetCol();
			incrementRow();
		}
	});

	// Component
	return (
		<Box sx={{ marginTop: '5vh' }}>
			{boardState.map((x, idx) =>
				idx === row ? (
					<GameBoardRowActive word={x} key={idx} />
				) : (
					<GameBoardRow
						colorArr={colorState[idx]}
						word={x}
						key={idx}
					/>
				)
			)}
			<KeyBoard keyColors={keyColors} />
			<Button
				onClick={() => {
					resetGame();
					resetCol();
				}}
			>
				New Game
			</Button>
		</Box>
	);
};

export default Gameboard;
