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
	useKeyPress([], (k) => alert(k));
	const { row } = useStore();

	return (
		<Center>
			<Group sx={{ padding: 2 }}>
				{props.word.map((val, idx) => (
					<GameBoardItem
						pos={idx}
						handleWord={props.handleWord}
						letter={val}
					/>
				))}
			</Group>
		</Center>
	);
};

export default GameBoardRow;
