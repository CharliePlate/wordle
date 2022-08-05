import { Box, Center, Group } from '@mantine/core';
import React, { memo, useEffect, useState } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import useStore from '../../store';
import GameBoardItem from './GameBoardItem';

type Props = {
	word: string[];
	handleWord: (rowNum: number, position: number, val: string) => void;
	active: boolean;
};

const GameBoardRow = (props: Props) => {
	// Props
	const { word, handleWord, active } = props;

	// Hooks
	useKeyPress([], (k) => {
		if (active) {
			alert(k);
		}
		return;
	});

	// Component
	return (
		<Center>
			<Group sx={{ padding: 2 }}>
				{word.map((val, idx) => (
					<GameBoardItem
						pos={idx}
						handleWord={handleWord}
						letter={val}
					/>
				))}
			</Group>
		</Center>
	);
};

export default GameBoardRow;
