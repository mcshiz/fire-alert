import React from 'react'
import Tweet from 'react-tweet'
import '../styles/tweets.css'
import LoadingSpinner from "./LoadingSpinner";
class TwitterFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.hashtag) {
            // if HT doesn't contain 'fire' add it
            // if HT contains '#' remove it otherwise urls get confused
            let hashtag = this.props.hashtag.toLowerCase().indexOf('fire') < 0 ? this.props.hashtag + "fire" : this.props.hashtag;
            let searchTerm = hashtag.indexOf('#') < 0 ? hashtag : hashtag.replace('#', '');
            this.props.action.loadFireTweets(searchTerm)
        }
    }
    componentDidMount() {
        console.log(this.props)
    }

    renderTweets() {
        let tweets = [];
        if(!this.props.twitter.tweets) {
            return (
                <span>No Tweets found</span>
            )
        }
        for(let i = 0 ; i < this.props.twitter.tweets.length; i++) {
            tweets.push( <Tweet data={this.props.twitter.tweets[i]} key={i}/>)
        }
        return tweets
    }

    render() {
        return (
            <div>
                <h4>{this.props.hashtag}</h4>
                { this.props.twitter.loading ? <LoadingSpinner/> : this.renderTweets() }
            </div>

        )
    }

}
export default TwitterFeed;

