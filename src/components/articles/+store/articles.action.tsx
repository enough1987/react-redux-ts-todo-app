import { Article } from './dictionery';

export enum ArticleActionsTypes {
    ADD = 'addArticle',
    DELETE = 'deleteArticle',
}

export const addArticleCreator = (article: Article) => ({ type: ArticleActionsTypes.ADD, payload: article });
export const deleteArticleCreator = (article: Article) => ({ type: ArticleActionsTypes.DELETE, payload: article.id });
