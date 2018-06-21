import { ArticleActionsTypes } from '../actions/articles.action';
import { ArticleState } from '../dictionery';

const initialState: ArticleState = {
    articles: [],
};

const rootReducer = (
        state: ArticleState = initialState,
        action: { type: string, payload: any },
    ): ArticleState => {
    switch (action.type) {
        case ArticleActionsTypes.ADD:
            return {
                ...state,
                articles: [...state.articles, {
                    id: state.articles.length,
                    author: action.payload.author,
                    name: action.payload.name,
                }],
            };
        case ArticleActionsTypes.DELETE:
            return {
                ...state,
                articles: [...state.articles.filter((article) => article.id !== action.payload)],
            };
        default:
            return state;
    }
};
export default rootReducer;
