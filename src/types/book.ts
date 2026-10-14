export type BookType = {
    id: number,
    title: string,
    author: string,
    status: StatusType,
    rating: number,
    note: string,
    cover: string,
};

export type StatusType = 'planned' | 'to-read-now' | 'read'