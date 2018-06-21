
export interface Article {
    id?: number;
    name: string;
    author: string;
}

export interface ArticleState {
    articles: Article[];
}
