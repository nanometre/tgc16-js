function replaceNthCharacter(word, char, num) {
    let count = 0;
    let newWord = "";
    for (let w of word) {
        if (count != num) {
            newWord += w
            count += 1
        } else {
            newWord += char
            count += 1
        }
    }
    console.log(newWord)
}

replaceNthCharacter("ABC", "Z", 1)
replaceNthCharacter("Idea", "A", 3)
