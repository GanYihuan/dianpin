import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import styles from '';


class HomeAd extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
        <div id={styles['home-ad']}>
          <h2></h2>
          <div className={styles = 'add-container'}>
            {
              this.props.data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={styles['ad-item'] + ' float-left'}
                    >
                      <a href={item.link} target={'_blank'}>
                        <img src={item.img} alt={item.title}/>
                      </a>
                    </div>
                )
              })
            }
          </div>
        </div>
    )
  }
}

export default HomeAd;