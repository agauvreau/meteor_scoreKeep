import React from 'react';
import PropTypes from 'prop-types';

// class names for components should starts with a capital letter 
export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle){
      return <h2 className='title-bar__subtitle'>{this.props.subtitle}</h2>
    }
  }  
  
  render() {
      // if i do not insert a subtitle prop their will be no h2 tag
      return (
        <div className="title-bar">
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubtitle()}
          </div>
        </div>
      );
      
    }
  }
  // this will throw warning is the title value is abscent
  TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
  };

 