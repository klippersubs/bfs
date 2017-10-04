/**
 * @file Breadth-first flatten algorithm without coloring for directed graphs and forests.
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
 * Flattens directed graph or forest starting from given vertex.
 * @param {Graph} graph — graph or forest.
 * @param {Vertex} entry — vertex to start search.
 * @param {ChildrenGetter<Graph, Vertex>} childrenGetter — returns children of the given vertex.
 * @return {Set<Vertex>} — flat set of vertices.
 */
export default <Graph, Vertex>(graph: Graph, entry: Vertex, childrenGetter: ChildrenGetter<Graph, Vertex>) => {
    const queue: Array<Vertex> = [entry];
    const visited: Set<Vertex> = new Set(queue);

    do {
        for (const node of childrenGetter(graph, queue.shift())) {
            if (!visited.has(node)) {
                visited.add(node);
                queue.push(node);
            }
        }
    } while (queue.length > 0);

    return visited;
};
