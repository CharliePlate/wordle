import { Box, Button } from '@mantine/core';
import React, { useCallback } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import {
  handleColorSubmit,
  handleKeyColorSubmit,
} from '../../lib/gameControls/handleWordSubmit';
import isValidWord from '../../lib/gameControls/isValidWord';
import {
  useGameStore,
  usePersistedGameStore,
} from '../../lib/stores/gameStore';
import KeyBoard from '../Keyboard/KeyBoard';
import GameBoardRow from './GameBoardRow';
import GameBoardRowActive from './GameBoardRowActive';

type Props = {};

const Gameboard = (props: Props) => {
  // Props
  // Hooks
  const {
    solution,
    row,
    incrementRow,
    boardState,
    colorState,
    setColors,
    keyColors,
    resetGame,
  } = usePersistedGameStore();

  const { resetCol } = useGameStore();

  const handleEnter = useCallback(() => {
    const res = isValidWord(boardState[row]);
    if (res === 'valid') {
      const newColorState = handleColorSubmit(
        boardState[row],
        colorState,
        solution,
        row
      );
      const newKeyColors = handleKeyColorSubmit(
        boardState[row],
        newColorState[row],
        keyColors
      );
      setColors(newColorState, newKeyColors);
      resetCol();
      incrementRow();
    }
  }, [row, boardState, colorState, incrementRow, keyColors, resetCol, setColors, solution]);

  useKeyPress(['Enter'], () => {
    handleEnter();
  });
  // Component
  return (
    <Box sx={{ marginTop: '5vh' }}>
      {boardState.map((x, idx) =>
        idx === row ? (
          <GameBoardRowActive word={x} key={idx} />
        ) : (
          <GameBoardRow
            colorArr={colorState[idx]}
            word={x}
            key={idx}
          />
        )
      )}
      <KeyBoard keyColors={keyColors} handleEnter={handleEnter} />

      {(colorState.some((row) =>
        row.every((color) => color === 'correct')
      ) ||
        row > 5) && (
          <Button
            onClick={() => {
              resetGame();
              resetCol();
            }}
          >
            {solution}
          </Button>
        )}
    </Box>
  );
};

export default Gameboard;
