
import * as React from 'react';
import ArticlesList from './components/Articles-list';
import ArticleAdd from './components/Article-add';
import { connect } from 'react-redux';
import { fatchArticlesCreator } from './+store/articles.action';
import { Article } from './+store/dictionery';
import store from '../../+store/store';

interface ArticlesProps extends React.Props<Article> {
    fetchArticles: () => {};
}

class Articles extends React.Component<ArticlesProps> {

    constructor(props: ArticlesProps) {
        super(props);
        this.props.fetchArticles();
    }

    public render() {
        return (
            <div className='Aprticles'>
                <ArticleAdd></ArticleAdd>
                <ArticlesList></ArticlesList>
            </div>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        fetchArticles: () => {
            store.dispatch(fatchArticlesCreator() as any);
        },
    };
};

export default connect(mapDispatchToProps)(Articles);
