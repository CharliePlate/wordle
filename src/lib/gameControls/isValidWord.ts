import { allWords } from '../words';

const isValidWord = (wordArr: string[]): string => {
	const word = wordArr.join('').toLowerCase();
	if (word.length < 5) {
		return 'Please use a 5 letter word!';
	} else if (!allWords.has(word)) {
		return 'Word not in dictionary!';
	} else {
		return 'valid';
	}
};

export default isValidWord;
