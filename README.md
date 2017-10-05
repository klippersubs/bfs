# @klippersubs/bfs

[![Travis CI](https://img.shields.io/travis/klippersubs/bfs.svg?style=flat-square)][ci]
[![NPM version](https://img.shields.io/npm/v/@klippersubs/bfs.svg?style=flat-square)][npm]

 >  BFS implementation for cyclic graphs without coloring.

````bash
yarn add @klippersubs/bfs
````

````javascript
import { flatten } from '@klippersubs/bfs';

const en = { name: 'en', fallback: [] };
const ru = { name: 'ru', fallback: [en] };
const be = { name: 'be', fallback: [ru] };
const uk = { name: 'uk', fallback: [be, ru] };

be.fallback = [ru, uk];

const beTarask = { name: 'be-tarask', fallback: [be, uk] };

const lookupList = flatten(null, beTarask, (_, language) => language.fallback);

console.log(lookupList);
// → Set {
//     { name: 'be-tarask', fallback: [ [Object], [Object] ] },
//     { name: 'be', fallback: [ [Object], [Object] ] },
//     { name: 'uk', fallback: [ [Object], [Object] ] },
//     { name: 'ru', fallback: [ [Object] ] },
//     { name: 'en', fallback: [] } }
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

### Export `flatten`

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
