import { Center, Group } from '@mantine/core';
import React from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import {
  handleKeyPressCol,
  handleKeyPressLetter,
} from '../../lib/gameControls/handleKeyPress';
import {
  useGameStore,
  usePersistedGameStore,
} from '../../lib/stores/gameStore';
import GameBoardItem from './GameBoardRowItem';

type Props = {
  word: string[];
};

const availableLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const GameBoardRowActive = (props: Props) => {
  // Props

  // Hooks

  const { col, setCol, incrementCol, decrementCol } = useGameStore();
  const { setBoardState, boardState, row } = usePersistedGameStore();

  useKeyPress(
    [...availableLetters.split(''), 'Backspace', 'ArrowLeft', 'ArrowRight'],
    (k) => {
      handleKeyPressCol(
        { col, incrementCol, decrementCol },
        k,
        boardState[row]
      );
      setBoardState(handleKeyPressLetter(boardState, k, row, col));
    }
  );

  // Component
  return (
    <Center>
      <Group sx={{ padding: 1, gap: '2px', flexWrap: 'nowrap' }}>
        {boardState[row].map((val, idx) => (
          <GameBoardItem
            status={col === idx ? 'typing' : 'undef'}
            letter={val}
            pos={idx}
            key={idx}
            onClick={setCol}
          />
        ))}
      </Group>
    </Center>
  );
};

export default GameBoardRowActive;
