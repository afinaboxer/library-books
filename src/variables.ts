import type { BookType } from "./types/book";


export const  username: string = 'Afina';
export let age: number = 15;
export let isTeacher: boolean = false;

export const initialBooks: BookType[] = [
    {
    id: 1,
    title: 'Преступление и Наказание',
    author: 'Ф.Достоевский',
    status: 'read',
    rating: 4.5,
    note: 'Книга хорошая, но понравится не всем. Хороша для осмысления.',
    cover: 'https://ndc.book24.ru/resize/820x1180/pim/products/images/0d/47/01973a0c-16ef-7502-9805-153301550d47.jpg'
    },

    {
    id: 2,
    title: 'Война и Мир',
    author: 'Л.Толстой',
    status: 'to-read-now',
    rating: 4.8,
    note: 'Одназначно не могу оценить, так как не дочитала.',
    cover: 'https://content.img-gorod.ru/pim/products/images/48/0d/019ac11a-61f2-798c-92d5-2645bcd9480d.jpg'
    },

    {
    id: 3,
    title: 'Мечта длиною в лето',
    author: 'И.Богданова',
    status: 'read',
    rating: 4.6,
    note: 'Любимая книга',
    cover: 'https://chitatel.by/storage/thumbs/18/h1001_w1001_18757876be58f9edcc0aba764daaebcb.jpg'
    },
];

