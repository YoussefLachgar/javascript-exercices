const moveCharsForwardInAlphabet = (str) => {
    let result = '';
    for(let i=0; i<str.length; i++) {
        const asciiCode = str.charCodeAt(i) + 1;
        result += String.fromCharCode(asciiCode);
    }
    return result;
};

export { moveCharsForwardInAlphabet };
