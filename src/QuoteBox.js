import React, {Component} from 'react';
import Buttons from "./Buttons";

class QuoteBox extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        let {quote} = this.props;
        return (
            <div id="quote-box">
                <p id="text">"{quote.text}"</p>
                <p id="author">-{quote.author}</p>
                <Buttons changeQuote={this.props.changeQuote} quoteLength={this.props.quoteLength}
                         currentQuote={this.props.currentQuote}/>


            </div>
        )
    }
}

export default QuoteBox;