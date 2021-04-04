var generateParenthesis = function(n) {
    const output = [];
    
    function comboMaker(open, close, combo) {
        if (open > close) return;
        if (!open && !close) output.push(combo);
        
        if (open > 0) comboMaker(open-1, close, combo + '(');
        if (close > 0) comboMaker(open, close-1, combo + ')')
    }
    
    comboMaker(n, n, '')
    
    return output;
};