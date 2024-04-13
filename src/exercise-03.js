const moveCharsForwardInAlphabet = (str, pos = 1) => {
    let result = '';
    if(!str || str == ''){
        return result;
    }
    for(let i=0; i<str.length; i++) {
        
        let asciiCode = str.charCodeAt(i);
        for(let j=0; j<pos; j++) {
            asciiCode += 1;
            if(asciiCode == 123)
            {
                asciiCode = 97;
            }
        }
        result += String.fromCharCode(asciiCode);
        // const asciiCode = str.charCodeAt(i) + pos;
    }
    return result;
};

export { moveCharsForwardInAlphabet };
