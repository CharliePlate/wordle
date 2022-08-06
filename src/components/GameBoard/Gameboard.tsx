import { Button } from '@mantine/core';
import React, { useState } from 'react';
import useColorArray from '../../hooks/useColorArray';
import useKeyPress from '../../hooks/useKeyPress';
import useWordArray from '../../hooks/useWordArray';
import isValidWord from '../../lib/gameControls/isValidWord';
import useStore from '../../lib/store';
import GameBoardRow from './GameBoardRow';
import GameBoardRowActive from './GameBoardRowActive';

type Props = {};

const Gameboard = (props: Props) => {
	// Props

	// Hooks
	const [ans, setAns] = useState('CLEAN');
	const { row, incrementRow } = useStore();
	const { colorArr, updateColors } = useColorArray();
	const { arr, updateWord } = useWordArray();
	useKeyPress(['Enter'], (k) => {
		const res = isValidWord(arr[row]);
		if (res === 'valid') {
			incrementRow();
			updateColors(ans, arr[row], row);
		}
	});

	// Component

	return (
		<>
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
			<Button onClick={() => incrementRow()}>Increment Row</Button>
		</>
	);
};

export default Gameboard;
