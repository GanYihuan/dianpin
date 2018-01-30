import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import styles from '';


class Category extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdat = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      index: 0
    }
  }

  render() {
    const opt = {
      auto: 2500,
      callback: (index) => {
        this.setState({
          index: index
        })
      }
    };

    return (
        <div id={styles['home-category']}>
          <ReactSwipe swipeOptions={opt}>
            <div className={styles['carousel-item']}>
              <ul className={styles['clear-fix']}>
                <Link to={}>

                </Link>
              </ul>
            </div>
          </ReactSwipe>
        </div>
    )
  }
}