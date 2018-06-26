import { mapTo } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { ArticleActionsTypes } from './articles.action';
import { Action } from '../../../+store/dictionery';
import { delay } from 'rxjs/internal/operators';

export const articleEpic: Epic<Action> = (action$) =>
    action$.ofType('TEST_EPIC').pipe(
        delay(1500),
        mapTo({ type: ArticleActionsTypes.ADD_WITH_EPIC }),
    );
