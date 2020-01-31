import React from 'react'


class Card extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props)
    return (
      <div className='Card'>
        <div className='counter'> {this.props.data[this.props.index].id} /25 </div>
        <div className='names'> {this.props.data[this.props.index].name.first} {this.props.data[this.props.index].name.last} </div>
        <br />
        <div className='trio'> <b>From:</b> {this.props.data[this.props.index].city}, {this.props.data[this.props.index].country}</div>
        <div className='trio'> <b>Job Title:</b> {this.props.data[this.props.index].title} </div>
        <div className='trio'> <b>Employer:</b> {this.props.data[this.props.index].employer} </div>
        <br />
        <div className='trio'> <b>Favorite Movies:</b> </div>
        <ol className='list'> {this.props.data[this.props.index].favoriteMovies.map(element => <li>{element}</li>)} </ol>
      </div>
    )
  }
}

export default Card;