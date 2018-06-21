
import * as React from 'react';
import { Article } from '../+store/dictionery';
import { connect } from 'react-redux';
import { addArticle } from '../+store/actions/articles.action';
import store from '../+store/store';

interface ArticleAddProps extends React.Props<never> {
    addArticle: (article: Article) => {};
}

class ArticleAdd extends React.Component<ArticleAddProps> {
    public render() {
        return (
            <div>
                <p> Name :
                    <input type='text'
                           ref={(input) => (this as any).nameInput = input}  />
                </p>
                <p> Author :
                    <input type='text'
                           ref={(input) => (this as any).authorInput = input} />
                </p>
                <input type='button' value='Add'
                       onClick={() => {
                           this.props.addArticle({
                               name: (this as any).nameInput.value,
                               author: (this as any).authorInput.value,
                           });
                           (this as any).nameInput.value = '';
                           (this as any).authorInput.value = '';
                       }} />
            </div>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        addArticle: (article: Article) => {
            store.dispatch(addArticle(article));
        },
    };
};

export default connect(mapDispatchToProps)(ArticleAdd);
