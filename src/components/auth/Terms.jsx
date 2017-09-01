import React, {Component} from 'react';
import security from "../../assets/images/security-logo.png";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Terms extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    let flagTrue = true;
    let flagFalse = false;
    const customContentStyle = {
      width: '100%',
      height: '100%',
      maxWidth: 'none'
    }
    const actions = [< FlatButton label = "close" primary = {
        true
      }
      onTouchTap = {
        this.handleClose
      } />];

    return (
      <div className="terms-div">
        <Dialog title="TERMS AND CONDITIONS" actions={actions} actionsContainerClassName="tnc-action" autoDetectWindowHeight={flagTrue} autoScrollBodyContent={flagTrue} modal={flagTrue} contentStyle={customContentStyle} open={this.state.open} onRequestClose={this.handleClose}>
          The actions in this window were passed in as an array of React objects. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15.

        </Dialog>
        <p>Back to</p>
        <img src={security}></img>
        <p>By clicking on Submit, you agree to the</p>
        <p onTouchTap={this.handleOpen}>Terms & Conditions</p>
      </div>
    )
  }
}
export default Terms;
