
import * as React from 'react';
import { Article } from '../+store/dictionery';
import { connect } from 'react-redux';
import ArticleItem from './Article-item';

interface ArticlesListProps extends React.Props<Article[]> {
    articles: Article[];
}

class ArticlesList extends React.Component<ArticlesListProps> {
    public render() {
        const { articles } = this.props;

        return (
            <div>
                {articles.map((article: Article, index: number) => (
                    <ArticleItem
                        index={index}
                        article={article}>
                    </ArticleItem>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return { articles : state.articles };
};

export default connect(mapStateToProps)(ArticlesList);
