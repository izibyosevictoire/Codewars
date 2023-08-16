export function solve(s: string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const word = s.split(/[aeiou]+/);
    
    const arr = word.map(consoants => {
      const letters = consoants.split('');
      return letters.reduce(
        (acum, letter) => acum + alphabet.indexOf(letter) + 1,
        0
      );    
    });
    return arr.sort((a, b) => b - a)[0];
  }