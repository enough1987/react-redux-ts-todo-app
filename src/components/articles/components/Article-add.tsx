
import * as React from 'react';
import { Article } from '../+store/dictionery';
import { connect } from 'react-redux';
import { addArticle } from '../+store/articles.action';
import store from '../../../+store/store';

interface ArticleAddProps extends React.Props<never> {
    addArticle: (article: Article) => {};
}

interface ArticleAddState {
    name: string;
    author: string;
    isValid: boolean;
}

const BASE_ARTICLE_STATE = {
    name: '',
    author: '',
    isValid: true,
};

class ArticleAdd extends React.Component<ArticleAddProps, ArticleAddState> {

    constructor(props: ArticleAddProps) {
        super(props);
        this.state = BASE_ARTICLE_STATE;
    }

    public render() {
        const { name, author, isValid } = this.state;
        return (
            <div>
                <p> Name :
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={this.handleChange} />
                </p>
                <p> Author :
                    <input
                        type='text'
                        className='form-control'
                        id='author'
                        value={author}
                        onChange={this.handleChange} />
                </p>
                <input type='button' value='Add'
                       onClick={this.handleSubmit} />
                { !isValid ? <p>new article is not valid </p> : '' }
            </div>
        );
    }

    private handleChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        });
    }

    private handleSubmit = (event: any) => {
        const { name, author } = this.state;
        let isValid = true;
        if (!name || !author) {
            isValid = false;
            this.setState({
                ...BASE_ARTICLE_STATE,
                isValid,
            });
            console.log(this.state.name, this.state.author, this.state.isValid);
            return;
        }
        this.props.addArticle({ name, author });
        this.setState(BASE_ARTICLE_STATE);
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
