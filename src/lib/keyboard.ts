const keyColor: KeyColor = {
	Q: '',
	W: '',
	E: '',
	R: '',
	T: '',
	Y: '',
	U: '',
	I: '',
	O: '',
	P: '',
	A: '',
	S: '',
	D: '',
	F: '',
	G: '',
	H: '',
	J: '',
	K: '',
	L: '',
	Z: '',
	X: '',
	C: '',
	V: '',
	B: '',
	N: '',
	M: '',
	ENTER: '',
	DELETE: '',
};

const keyboardRows: KeyboardRow = {
	0: 'QWERTYUIOP'.split(''),
	1: 'ASDFGHJKL'.split(''),
	2: ['ENTER', ...'ZXCVBNM'.split(''), 'DELETE'],
};

export { keyColor, keyboardRows };
