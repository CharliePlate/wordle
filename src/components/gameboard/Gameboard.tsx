import React, { useCallback, useState } from 'react';
import useStore from '../../store';
import GameBoardRow from './GameBoardRow';

type Props = {};

const Gameboard = (props: Props) => {
	// Props
	const {} = props;

	// Hooks
	const [arr, setArr] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	] as string[][]);

	const { row } = useStore();

	const handleWord = useCallback(
		(row: number, position: number, val: string) => {
			setArr((arr: string[][]) => {
				const newArr = [...arr];
				newArr[row][position] = val;
				return newArr;
			});
		},
		[]
	);

	// Component

	return (
		<>
			{arr.map((x, idx) => (
				<GameBoardRow
					word={x}
					active={idx === row}
					handleWord={handleWord}
				/>
			))}
		</>
	);
};

export default Gameboard;
