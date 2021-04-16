// 399. Evaluate Division

var calcEquation = function(equations, values, queries) {
    const graph = buildGraph(equations, values);
    
    return queries.map(query => {
        const [cash1, cash2] = query;

        let result = exchanger(cash1, cash2, graph, new Set())

        graph[cash1] = { ...graph[cash1], [cash2]: result } || { [cash2]: result };
        graph[cash2] = { ...graph[cash2], [cash1]: 1/result } || { [cash1]: 1/result }
 
        return result;
    // return exchanger(queries[0], queries[1], graph, new Set())
    })
};

const exchanger = (cash1, cash2, graph, visited) => {
    
    if (!graph[cash1] || !graph[cash2]) return -1;
    if (cash2 === cash1) return 1;
    if (cash2 in graph[cash1]) return graph[cash1][cash2];
    
    for (const money in graph[cash1]) {
        if (visited.has(money)) continue;
        visited.add(money);
        
        let temp = exchanger(money, cash2, graph, visited);
        if (temp !== -1) {
            return graph[cash1][money] * temp;
        }
        
    }
    
    return -1
}

const buildGraph = (equations, values) => {
    const graph = {};
    
    // for i loop because we need to grab from 2 different arrays (equations and values)
    for (let i = 0; i < values.length; i++) {
        // pretending currency exchange for bloomberg
        const [cash1, cash2] = equations[i];
        const exchange = values[i];
        
        
        graph[cash1] = { ...graph[cash1], [cash2]: exchange } || { [cash2]: exchange };
        graph[cash2] = { ...graph[cash2], [cash1]: 1/exchange } || { [cash1]: 1/exchange }
    }
    return graph;
}

const equations1 = [['USD', 'JPY'], ['USD', 'AUD'], ['JPY', 'GBP']]
const exchange1 = [110.0, 1.45, 0.0070]
// const quer = ['GBP', 'AUD']
const quer = [['GBP', 'AUD']]

console.log(calcEquation(equations1, exchange1, quer))