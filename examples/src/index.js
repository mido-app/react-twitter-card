import React from 'react';
import { render } from 'react-dom'
import TwitterCard from '../../src'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faRetweet
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart,
  faComment
} from '@fortawesome/fontawesome-free-regular'
import './style.css'

const user = {
  id: 'sample_user',
  name: 'サンプル君',
  iconUrl: 'https://pbs.twimg.com/profile_images/1041806009432399872/Wx0wgh2v_bigger.jpg'
}

const tweet = {
  body: 'エンジニアは絶望に陥ったとき「にゃーん」という'
}

const option = {
  icon: <FontAwesomeIcon icon={ faChevronDown } />
}

const action = {
  commentIcon: <FontAwesomeIcon icon={ faComment } />,
  likeIcon: <FontAwesomeIcon icon={ faHeart } />,
  retweetIcon: <FontAwesomeIcon icon={ faRetweet } />,
}

const App = () => {
  return (
    <div className="wrapper">
      <TwitterCard user={ user }
                   tweet={ tweet }
                   option={ option }
                   action={ action } />
    </div>
  )
}

render(<App />, document.getElementById('root'))
