const prefixText = ( str, pre) => {
    let result = '';
    if( str == ''){
        result = pre;
        return result;
    }
    if( !str){
        return result;
    }
    if( !pre){
        result = str;
        return result;
    }

    if( str.startsWith(pre)){
        return str;
    }

    result = pre + " " + str;
    return result;
    
};

export { prefixText };
