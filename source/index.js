/**
 * @file General purpose BFS implementation.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright KlipperSubs, 2017
 * @flow
 */

/**
 * Returns children of the given vertex in the given graph.
 * @param {Graph} graph — graph containing the vertex.
 * @param {Vertex} vertex — vertex in the graph.
 * @return {Array<Vertex>} — children of the given vertex.
 */
export type ChildrenGetter<Graph, Vertex> = (graph: Graph, vertex: Vertex) => Array<Vertex>;

/**
 * Flattens cyclic graph starting from root vertex.
 * @param {Graph} graph — graph or forest.
 * @param {Vertex} root — vertex to start search.
 * @param {ChildrenGetter<Graph, Vertex>} getChildren — returns children of the given vertex.
 * @return {Set<Vertex>} — flat set of vertices.
 */
export const flatten = <Graph, Vertex>(graph: Graph, root: Vertex, getChildren: ChildrenGetter<Graph, Vertex>) => {
    const queue: Array<Vertex> = [root];
    const visited: Set<Vertex> = new Set(queue);

    do {
        for (const vertex of getChildren(graph, queue.shift())) {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                queue.push(vertex);
            }
        }
    } while (queue.length > 0);

    return visited;
};
