import { Box } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import useColorArray from '../../hooks/useColorArray';
import useKeyPress from '../../hooks/useKeyPress';
import useWordArray from '../../hooks/useWordArray';
import isValidWord from '../../lib/gameControls/isValidWord';
import {
	useGameStore,
	usePersistedGameStore,
} from '../../lib/stores/gameStore';
import { generateRandomWord } from '../../lib/words';
import KeyBoard from '../Keyboard/KeyBoard';
import GameBoardRow from './GameBoardRow';
import GameBoardRowActive from './GameBoardRowActive';

type Props = {};

const Gameboard = (props: Props) => {
	// Props
	// Hooks
	const { solution, row, incrementRow } = usePersistedGameStore();
	const { colorArr, updateColors, keyColorArr } = useColorArray();
	const { arr, updateWord } = useWordArray();

	useKeyPress(['Enter'], (k) => {
		const res = isValidWord(arr[row]);
		if (res === 'valid') {
			updateColors(solution, arr[row], row);
			incrementRow();
		}
	});

	// Component
	return (
		<Box sx={{ marginTop: '5vh' }}>
			{arr.map((x, idx) =>
				idx === row ? (
					<GameBoardRowActive
						handleWord={updateWord}
						word={x}
						key={idx}
					/>
				) : (
					<GameBoardRow colorArr={colorArr[idx]} word={x} key={idx} />
				)
			)}
			<KeyBoard keyColors={keyColorArr} />
		</Box>
	);
};

export default Gameboard;
