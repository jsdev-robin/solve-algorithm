class Codec {
  encode(strs) {
    let result = '';
    for (let s of strs) {
      result += s.length + '#' + s;
    }
    return result;
  }

  decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      result.push(str.substring(j + 1, j + 1 + length));
      i = j + 1 + length;
    }

    return result;
  }
}

// Test
const codec = new Codec();
const input = ['hello', 'world', 'leet', 'code'];
const encoded = codec.encode(input);
console.log('Encoded:', encoded); // "5#hello5#world4#leet4#code"
const decoded = codec.decode(encoded);
console.log('Decoded:', decoded); // ["hello", "world", "leet", "code"]

// Edge case - string with # inside
const input2 = ['he#llo', 'wor#ld'];
const encoded2 = codec.encode(input2);
console.log('Encoded:', encoded2); // "6#he#llo6#wor#ld"
const decoded2 = codec.decode(encoded2);
console.log('Decoded:', decoded2); // ["he#llo", "wor#ld"]
