import React from 'react'
import i18n from 'meteor/universe:i18n'
import BaseComponent from './BaseComponent.jsx'

export default class LabelPicker extends BaseComponent {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      colors: ["clear", "blue", "red", "green", "yellow", "orange"],
      current: this.props.current
    }

  }

  updateLabel(evt){
    this.setState({ current: (evt.target.nodeName == "A")? evt.target.dataset.color: evt.target.childNodes[0].dataset.color, isOpen: false });
  }

  toggleMenu(evt){
    evt.preventDefault();
    if( this.state.isOpen == false){
      this.setState({isOpen: true});
    } else {
      this.setState({isOpen: false});
    }
  }

  _labels(){
    const {colors} = this.state;
    return colors.map( (color, id) => <li key={id} className={"label_item "+color}><a href="#" data-color={color} onClick={this.updateLabel.bind(this)}></a></li>);
  }

  render(){
    return (
      <div className="label_picker_container">
        <a href="#" className={"label_current "+this.state.current} onClick={this.toggleMenu.bind(this)}></a>
        <ul className={this.state.isOpen?"label_list open":"label_list closed"}>
          {this._labels()}
        </ul>
      </div>
    );
  }
}
