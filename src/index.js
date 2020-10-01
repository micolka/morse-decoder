const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
	let subArr = [];

    for(let k = 0; k < expr.length / 10; k++) {
    	arr.push(expr.substr(k * 10, 10));
    }

    for(let i = 0; i < arr.length; i++) {
    	subArr = [];
    	for(let j = 0; j < arr[i].length; j += 2) {
    		if (arr[i][j] === '1' && arr[i][j + 1] === '0') subArr.push('.');
    		if (arr[i][j] === '1' && arr[i][j + 1] === '1') subArr.push('-');
    	}    	
    	arr[i] = MORSE_TABLE[subArr.join('')];
    	if (!arr[i]) arr[i] = ' ';
    }
   return arr.join('');
}

module.exports = {
    decode
}