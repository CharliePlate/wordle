import { Center, Group, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { memo } from 'react';
import {
	handleKeyPressCol,
	handleKeyPressLetter,
} from '../../lib/gameControls/handleKeyPress';
import { keyboardRows } from '../../lib/keyboard';
import {
	useGameStore,
	usePersistedGameStore,
} from '../../lib/stores/gameStore';
import KeyboardKey from './KeyboardKey';

type Props = {
	keyColors: KeyColor;
	handleEnter: VoidFunction;
};

const KeyBoard = (props: Props) => {
	// Props
	const { keyColors, handleEnter } = props;

	// Hooks
	const { width } = useViewportSize();

	// Component
	return (
		<Center sx={{ marginTop: 10 }}>
			<Stack sx={{ gap: 7 }}>
				{[0, 1, 2].map((row) => (
					<Group
						sx={{
							gap: 1,
							flexWrap: 'nowrap',
							width: width * 0.9,
							justifyContent: 'center',
						}}
						key={row}
					>
						{keyboardRows[row].map((letter) => (
							<KeyboardKey
								width={width / keyboardRows[row].length}
								color={keyColors[letter]}
								letter={letter}
								key={letter}
								handleEnter={handleEnter}
							/>
						))}
					</Group>
				))}
			</Stack>
		</Center>
	);
};

export default memo(KeyBoard);
