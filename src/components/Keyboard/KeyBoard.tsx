import { Center, Group, Stack } from '@mantine/core';
import React from 'react';
import { keyboardRows } from '../../lib/keyboard';
import KeyboardKey from './KeyboardKey';

type Props = {
	keyColors: KeyColor;
};

const KeyBoard = (props: Props) => {
	// Props
	const { keyColors } = props;

	// Hooks
	// Component
	return (
		<Center sx={{ marginTop: 10 }}>
			<Stack>
				{[0, 1, 2].map((row) => (
					<Center key={row}>
						<Group sx={{ gap: 10 }} key={row}>
							{keyboardRows[row].map((letter) => (
								<KeyboardKey
									color={keyColors[letter]}
									letter={letter}
									key={letter}
								/>
							))}
						</Group>
					</Center>
				))}
			</Stack>
		</Center>
	);
};

export default KeyBoard;
