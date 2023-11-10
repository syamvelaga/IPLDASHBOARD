import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

// const listItems = [
//   {
//     name: 'Royal Challengers Bangalore',
//     id: 'RCB',
//     teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png',
//   },
// ]

class Home extends Component {
  state = {listItems: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    // console.log(data)
    const {teams} = data
    // console.log(teams)
    const convertedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({listItems: convertedData})
  }

  render() {
    const {listItems} = this.state
    return (
      <div className="dashboard-background">
        <div className="ipl-name-container">
          <div>
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
          </div>

          <h1 className="ipl-name">IPL Dashboard</h1>
        </div>
        <ul className="main-card-container">
          {listItems.map(each => (
            <TeamCard each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
