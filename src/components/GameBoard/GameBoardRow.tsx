import { Center, Group } from '@mantine/core';
import React, { memo } from 'react';
import GameBoardItem from './GameBoardRowItem';

type Props = {
  word: string[];
  colorArr: string[];
};

const GameBoardRow = memo((props: Props) => {
  // Props
  const { word, colorArr } = props;

  // Component
  return (
    <Center>
      <Group
        sx={{
          padding: 1,
          gap: '2px',
          flexWrap: 'nowrap',
          flexShrink: 1,
        }}
      >
        {word.map((val, idx) => (
          <GameBoardItem
            status={colorArr[idx]}
            pos={idx}
            letter={val}
            key={idx}
          />
        ))}
      </Group>
    </Center>
  );
});

export default GameBoardRow;
