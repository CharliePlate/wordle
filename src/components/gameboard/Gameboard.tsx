import React, { useCallback, useState } from 'react';
import useWordArray from '../../hooks/useWordArray';
import useStore from '../../lib/store';
import GameBoardRow from './GameBoardRow';
import GameBoardRowActive from './GameBoardRowActive';

type Props = {};

const Gameboard = (props: Props) => {
	// Props
	const {} = props;

	// Hooks
	const { row } = useStore();
	const { arr, updateWord } = useWordArray();

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
					<GameBoardRow word={x} key={idx} />
				)
			)}
		</>
	);
};

export default Gameboard;
