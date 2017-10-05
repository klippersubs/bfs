/**
 * @file General purpose BFS implementation. (Tests.)
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright KlipperSubs, 2017
 */

/*
 eslint-env jest
 */

import { flatten } from './index';

describe('`flatten` tests', () => {
    test('connected vertices should be flattened correctly', () => {
        const en = { name: 'en', fallback: [] };
        const ru = { name: 'ru', fallback: [en] };
        const be = { name: 'be', fallback: [ru] };
        const uk = { name: 'uk', fallback: [be, ru] };

        be.fallback = [ru, uk];

        const beTarask = { name: 'be-tarask', fallback: [be, uk] };

        const flat = flatten(null, beTarask, (_, vertex) => vertex.fallback);

        expect(flat).toEqual(new Set([beTarask, be, uk, ru, en]));
    });

    test('disconnected vertices should not be in included in resulting set', () => {
        const graph = {
            en: [],
            ja: ['en'],
            ru: ['en'],
        };

        const flat = flatten(graph, 'ja', (graph, vertex) => graph[vertex] || []);

        expect(flat).toEqual(new Set(['ja', 'en']));
    });
});
