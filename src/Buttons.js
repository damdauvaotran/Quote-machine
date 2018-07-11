import React, {Component} from 'react';

class Buttons extends Component{
    constructor(props){
        super(props);
        this.handleChangeQuote = this.handleChangeQuote.bind(this);
    }

    handleChangeQuote(){
        let {changeQuote, quoteLength, currentQuote} = this.props;
        let index = Math.floor(Math.random() * quoteLength);
        while (currentQuote === index){
            index = Math.floor(Math.random() * quoteLength)
        }
        changeQuote(index);
    }
    render(){

        return (
            <div className="button">
                <div id="tweet-quote" ><a className="fab fa-twitter" href={"http://twitter.com/intent/tweet"}></a></div>
                <div id="new-quote" onClick={this.handleChangeQuote}>New quote</div>
            </div>
        );
    }
}

export default Buttons;