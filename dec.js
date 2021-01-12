const fs = require('fs');
const original = fs.readFileSync(process.argv[2] || './example.jpg.fun');
const dest = process.argv[3] || './example-re.jpg';
const key = Buffer(process.argv[4] || 'dooly');

for(i=0, p=0; i<original.length; i++, p=((p+1) & (key.length-1))) {
	var byte = original[i];
	var kb = key[p];
	
	original[i] = (byte - kb) & 0xFF;
}

fs.writeFileSync(dest, original);
