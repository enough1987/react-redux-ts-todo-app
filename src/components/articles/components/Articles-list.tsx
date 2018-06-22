
import * as React from 'react';
import { Article } from '../+store/dictionery';
import { connect } from 'react-redux';
import { deleteArticle } from '../+store/actions/articles.action';
import store from '../../../+store/store';

interface ArticlesListProps extends React.Props<Article[]> {
    articles: Article[];
    deleteArticle: (article: Article) => {};
}

class ArticlesList extends React.Component<ArticlesListProps> {
    public render() {
        return (
            <div>
                {this.props.articles.map((article: Article, index: number) => (
                    <li className='list-group-item' key={index}>
                        {article.name}
                        <input type='button' value='x'
                               onClick={() => this.props.deleteArticle(article)}/>
                    </li>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return { articles : state.articles };
};

const mapDispatchToProps = () => {
    return {
        deleteArticle: (article: Article) => {
            store.dispatch(deleteArticle(article));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
