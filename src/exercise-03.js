const moveCharsForwardInAlphabet = (str, pos = 1) => {
    let result = '';
    for(let i=0; i<str.length; i++) {
        const asciiCode = str.charCodeAt(i) + pos;
        result += String.fromCharCode(asciiCode);
    }
    return result;
};

export { moveCharsForwardInAlphabet };
