import { Article } from './dictionery';

export enum ArticleActionsTypes {
    ADD = 'addArticle',
    DELETE = 'deleteArticle',
}

export const addArticle = (article: Article) => ({ type: ArticleActionsTypes.ADD, payload: article });
export const deleteArticle = (article: Article) => ({ type: ArticleActionsTypes.DELETE, payload: article.id });
