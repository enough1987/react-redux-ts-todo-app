import { Article } from './dictionery';

export enum ArticleActionsTypes {
    SET = 'ARTICLES_setArticles',
    ADD = 'ARTICLES_addArticle',
    DELETE = 'ARTICLES_deleteArticle',
}

// SYNC
export const setArticlesCreator = (articles: Article[]) => ({ type: ArticleActionsTypes.SET, payload: articles });
export const addArticleCreator = (article: Article) => ({ type: ArticleActionsTypes.ADD, payload: article });
export const deleteArticleCreator = (article: Article) => ({ type: ArticleActionsTypes.DELETE, payload: article.id });

// ASYNC
export const fatchArticlesCreator = () => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(setArticlesCreator([{ name: 'test', author: 'test'}]));
        }, 1000);
    };
};
