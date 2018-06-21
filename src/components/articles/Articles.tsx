
import * as React from 'react';
import ArticlesList from './components/Articles-list';
import ArticleAdd from './components/Article-add';

class Articles extends React.Component {

    public render() {

        return (
            <div className='Aprticles'>
                <ArticleAdd></ArticleAdd>
                <ArticlesList></ArticlesList>
            </div>
        );
    }
}

export default Articles;
