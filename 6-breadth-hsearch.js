const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
}

function breadthSearch(graph, start, end) {
    let queue = [start];
}