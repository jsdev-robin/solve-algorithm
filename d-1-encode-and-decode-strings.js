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

const codec = new Codec();
const input = ['hello', 'world', 'leet', 'code'];
const encoded = codec.encode(input);
const decoded = codec.decode(encoded);
console.log('Decoded:', decoded);
