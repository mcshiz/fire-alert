import React from 'react'
import Tweet from 'react-tweet'
import '../styles/tweets.css'
import LoadingSpinner from "./LoadingSpinner";
class TwitterFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            searchTerm: ""
        }
    }

    componentDidMount(){
        if(this.props.hashtag) {
            // if HT doesn't contain 'fire' add it
            // if HT contains '#' remove it otherwise urls get confused
            let hashtag = this.props.hashtag.toLowerCase().indexOf('fire') < 0 ? this.props.hashtag + "fire" : this.props.hashtag;
            let searchTerm = hashtag.indexOf('#') < 0 ? hashtag : hashtag.replace('#', '');
            this.setState({searchTerm: searchTerm});
            this.props.action.loadFireTweets(searchTerm)
        }
    }
    renderTweets() {
        let tweets = [];
        if(!this.props.twitter.tweets) {
            return (
                <h4>No Tweets found</h4>
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
                <h4 className="text-center">#{this.state.searchTerm} on Twitter</h4>
                <div className="tweets-container">
                    { this.props.twitter.isFetching ? <LoadingSpinner/> : this.renderTweets() }
                </div>
            </div>

        )
    }

}
export default TwitterFeed;

