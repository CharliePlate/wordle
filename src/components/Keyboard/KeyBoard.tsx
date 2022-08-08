import { Center, Group, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
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
	const { height, width } = useViewportSize();

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
							/>
						))}
					</Group>
				))}
			</Stack>
		</Center>
	);
};

export default KeyBoard;
