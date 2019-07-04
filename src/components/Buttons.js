import React from 'react';
import {
  Button,
  ButtonToolbar,
  DropdownItem,
  DropdownButton
} from 'react-bootstrap';

class Buttons extends React.Component {
  handleSelect = e => {
    this.props.gridSize(e);
  };

  render() {
    return (
      <div className='center'>
        <ButtonToolbar>
          <Button className='btn btn-default' onClick={this.props.playButton}>
            Play
          </Button>
          <Button className='btn btn-default' onClick={this.props.pauseButton}>
            Pause
          </Button>
          <Button className='btn btn-default' onClick={this.props.clear}>
            Clear
          </Button>
          <Button className='btn btn-default' onClick={this.props.slow}>
            Slow
          </Button>
          <Button className='btn btn-default' onClick={this.props.fast}>
            Fast
          </Button>
          <Button className='btn btn-default' onClick={this.props.seed}>
            Seed
          </Button>
          <DropdownButton
            title='Grid Size'
            id='size-menu'
            onSelect={this.handleSelect}>
            <DropdownItem eventKey='1'>20x10</DropdownItem>
            <DropdownItem eventKey='2'>50x30</DropdownItem>
            <DropdownItem eventKey='3'>70x50</DropdownItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
