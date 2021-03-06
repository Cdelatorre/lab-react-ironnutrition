import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props),
    this.state = {
      search: ''
    }
  }

  onChange = (event) => {
    this.props.onFilter(event.target.value )
    this.setState({search : event.target.value })
  }


  render = () => (
    <div className="field" >
      <div className="control">
        <input className="input is-primary" type="text" placeholder="Search"
          value={this.state.search}
          onChange={this.onChange}
        />
      </div>
    </div>
  )
}

export default SearchBar