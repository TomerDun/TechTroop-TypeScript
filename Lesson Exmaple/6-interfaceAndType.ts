// Using Types

type personId = string | number | null;
type apartement = [personId, number];

const street : apartement[] = [
    [,] , [,], [,], [,]
]


// Using Interface

export interface TweetInterface {
    title:string,
    content: string,
    userId?: personId,
    created: Date,
    edited: Date,
    textColor: '#FFFFFF' | '#000000'    
}