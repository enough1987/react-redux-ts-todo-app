import * as React from 'react';
import { Article } from '../+store/dictionery';
import { deleteArticleCreator } from '../+store/articles.action';
import store from '../../../+store/store';
import { connect } from 'react-redux';

interface ArticleItemProps extends React.Props<Article> {
    article: Article;
    deleteArticle: (article: Article) => {};
}

class ArticleItem extends React.Component<ArticleItemProps> {

    public render() {
        const { article, deleteArticle } = this.props;

        return (
                    <li className='list-group-item'>
                        {article.name}
                        <input type='button' value='x'
                               onClick={() => deleteArticle(article)}/>
                    </li>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        deleteArticle: (article: Article) => {
            store.dispatch(deleteArticleCreator(article));
        },
    };
};

export default connect(mapDispatchToProps)(ArticleItem);
