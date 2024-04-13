const moveCharsForwardInAlphabet = (str) => {
    const asciiCode = str.charCodeAt(0) + 1;
    return String.fromCharCode(asciiCode);
};

export { moveCharsForwardInAlphabet };
