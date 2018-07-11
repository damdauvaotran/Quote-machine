import React, {Component} from 'react';

import './App.css';
import QuoteBox from './QuoteBox'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteIndex: 0,
            quote : [
                {
                    text: "Death is like the wind, always by my side",
                    author: "Dasua",
                    background: "https://lienminh.garena.vn/images/champions/skin/157_Yasuo/1.jpg"
                },
                {
                    text: "OK",
                    author: "Rammus",
                    background: "https://lienminh.garena.vn/images/champions/skin/33_Rammus/0.jpg"
                },
                {
                    text: "My blade is yours.",
                    author: "Master Yi",
                    background: "http://www.lienminhhuyenthoai.info/wp-content/uploads/2015/06/0-1.jpg"
                },
                {
                    text: "Everybody dies. Some just need a little help.",
                    author: "Lucian",
                    background: "https://image.thanhnien.vn/1600/uploaded/vietthong/2017_08_04/thumb3_lhzn.jpg"
                },
                {
                    text: "The only true death is to never live.",
                    author: "Kindred",
                    background: "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e0/Kindred_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203329"
                },
                {
                    text: "The unseen blade is the deadliest.",
                    author: "Zed",
                    background: "https://lienminh.garena.vn/images/champions/skin/238_Zed/1.jpg"
                }


            ]
        }
        this.changeQuote = this.changeQuote.bind(this);
    }


    changeQuote(index) {
        this.setState({
            quoteIndex: index
        })
    }

    componentDidMount(){
        this.changeQuote(Math.floor(Math.random() * this.state.quote.length));
    }
    render() {


        let {quoteIndex, quote} = this.state;
        return (
            <div className="App">
                <div className="container" style={{backgroundImage: "url(" + quote[quoteIndex].background + ")"}}>
                    <QuoteBox changeQuote={this.changeQuote} quote={quote[quoteIndex]}
                              quoteLength={quote.length} currentQuote={this.state.quoteIndex}/>
                </div>
            </div>
        );
    }
}

export default App;
