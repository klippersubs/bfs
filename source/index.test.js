/**
 * @file BFS implementation for cyclic graphs without coloring. (Tests.)
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright KlipperSubs, 2017
 */

/*
 eslint-env jest
 */

import walk from '.';

describe('default test suite', () => {
    test('connected vertices should be flattened correctly', () => {
        const graph = {
            en: [],
            ru: ['en'],
            be: ['ru', 'uk'],
            'be-tarask': ['be', 'uk'],
            uk: ['be', 'ru'],
        };

        const flat = walk(graph, 'be-tarask', (graph, vertex) => graph[vertex] || []);

        expect(flat).toEqual(new Set(['be-tarask', 'be', 'uk', 'ru', 'en']));
    });

    test('disconnected vertices should not be in included in resulting array', () => {
        const graph = {
            en: [],
            ja: ['en'],
            ru: ['en'],
        };

        const flat = walk(graph, 'ja', (graph, vertex) => graph[vertex] || []);

        expect(flat).toEqual(new Set(['ja', 'en']));
    });
});
