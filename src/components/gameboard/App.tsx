import React, { useCallback, useState } from 'react';
import useStore from '../../store';
import GameBoardRow from './GameBoardRow';

type Props = {};

const App = (props: Props) => {
	const [arr, setArr] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	] as string[][]);

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

	const { row } = useStore();

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

export default App;
