import { combineEpics } from 'redux-observable';
import { articleEpic } from '../components/articles/+store/article.epic';

export const EPICS = combineEpics(
    articleEpic,
);
