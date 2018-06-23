import { ArticleActionsTypes } from './articles.action';
import { Article } from './dictionery';

const initialState: Article[] = [];

const articlesReducer = (
        state: Article[] = initialState,
        action: { type: string, payload: any },
    ): Article[] => {
    switch (action.type) {
        case ArticleActionsTypes.SET:
            return action.payload;
        case ArticleActionsTypes.ADD:
            return [...state, {
                    id: state.length,
                    author: action.payload.author,
                    name: action.payload.name,
                }];
        case ArticleActionsTypes.DELETE:
            return [...state.filter((article) => article.id !== action.payload)];
        default:
            return state;
    }
};
export default articlesReducer;
