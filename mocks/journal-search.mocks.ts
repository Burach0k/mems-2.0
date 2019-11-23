import { journalSearchResponse } from './models';

export const journalSearchResponses: journalSearchResponse[] = [
    {
        authors: ['первый автор', 'второй автор'],
        author_cors: ['супер автор'],
        title: 'журнал успешной жизни',
        keywords: ['вау', 'шок']
    },
    {
        authors: ['другой автор', 'необычный автор'],
        author_cors: ['лучший парень', 'лучшая девушка'],
        title: 'журнал о прекрасных людях',
        keywords: ['доброта', 'тепло']
    },
    {
        authors: ['мрачный автор', 'пессимистичный автор'],
        author_cors: ['потервяший смысл жизни автор'],
        title: 'журнал о прокрастинации',
        keywords: ['боль', 'страх', 'ненависть']
    },
]