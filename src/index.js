import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const TwitterCard = props => (
    <div className="midoapp-twitter-card">
        <div className="user-icon-area">
            <img className="user-icon" src={ props.user.iconUrl } />
        </div>
        <div className="user-name-area">
            <span className="user-name">{ props.user.name }</span>
            <span className="user-id">@{ props.user.id }</span>
        </div>
        <div className="tweet-body-area">{ props.tweet.body }</div>
        <div className="option-btn-area">{ props.option.icon }</div>
        <div className="action-btn-area">
            <span className="action-btn">{ props.action.commentIcon }</span>
            <span className="action-btn">{ props.action.retweetIcon }</span>
            <span className="action-btn">{ props.action.likeIcon }</span>
        </div>
    </div>
)

TwitterCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        iconUrl: PropTypes.string.isRequired
    }).isRequired,
    tweet: PropTypes.shape({
        body: PropTypes.string.isRequired
    }).isRequired,
    option: PropTypes.shape({
        icon: PropTypes.element.isRequired
    }).isRequired,
    action: PropTypes.shape({
        commentIcon: PropTypes.element.isRequired,
        likeIcon: PropTypes.element.isRequired,
        retweetIcon: PropTypes.element.isRequired
    }).isRequired
}

export default TwitterCard
