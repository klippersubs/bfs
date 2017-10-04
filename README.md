# @klippersubs/bfs

[![Travis CI](https://img.shields.io/travis/klippersubs/bfs.svg?style=flat-square)][ci]
[![NPM version](https://img.shields.io/npm/v/@klippersubs/bfs.svg?style=flat-square)][npm]

 >  BFS implementation without coloring for directed graphs and forests.

````bash
yarn add @klippersubs/bfs
````

````javascript
import walk from '@klippersubs/bfs';

const languages = new Map([
    ['en', { messages: EN_MESSAGES, fallback: [], },],
    ['ru', { messages: RU_MESSAGES, fallback: ['en'], },],
    ['be', { messages: BE_MESSAGES, fallback: ['ru', 'uk'], },],
    ['be-tarask', { messages: BE_TARASK_MESSAGES, fallback: ['be', 'uk'], },],
    ['uk', { messages: UK_MESSAGES, fallback: ['be', 'ru'], },],
]);

const lookupList = walk(
    languages,
    'by-taras',
    (languages, language) =>
        (languages.get(language) ? languages.get(language).fallback : []),
);

console.log(lookupList);
// → Set { 'be-tarask', 'be', 'uk', 'ru', 'en' }
````

## Exported API

### Type export `ChildrenGetter`

 >  Returns children of the given vertex in the given graph.

Generic params:

 *  `Graph` — graph type.
 *  `Vertex` — vertex type.

Params:

 *  `graph: Graph` — graph containing the vertex.
 *  `vertex: Vertex` — vertex in the graph.

Return value:

 *  `Array<Node>` — flat array of vertices.

### Default export

 >  Flattens directed graph or forest starting from given vertex.

Generic params:

 *  `Graph` — graph type.
 *  `Vertex` — vertex type.

Params:

 *  `graph: Graph` — graph or forest.
 *  `entry: Vertex` — vertex to start search.
 *  `childrenGetter: ChildrenGetter<Graph, Vertex>` — returns children
    of the given vertex.

Return value:

 *  `Set<Vertex>` — flat set of vertices.

[ci]: https://travis-ci.org/klippersubs/bfs
[npm]: https://www.npmjs.com/package/@klippersubs/bfs

## License

MIT
