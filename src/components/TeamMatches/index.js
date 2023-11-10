import {Component} from 'react'
import {async} from 'fast-glob'

const teamMatchList = {
  teamBannerUrl: 'https://assets.ccbp.in/frontend/react-js/kkr-team-img.png',
  latestMatchDetails: {
    umpires: 'CB Gaffaney, VK Sharma',
    result: 'Kolkata Knight Riders Won by 7 wickets',
    manOfTheMatch: 'Shubman Gill',
    id: '1216545',
    date: '2020-09-26',
    venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
    competingTeam: 'Sunrisers Hyderabad',
    competingTeamLogo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png',
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    firstInnings: 'Sunrisers Hyderabad',
    secondInnings: 'Kolkata Knight Riders',
    matchStatus: 'Won',
  },
  recentMatches: [
    {
      umpires: 'RK Illingworth, K Srinivasan',
      result: 'Royal Challengers Bangalore Won by 82 runs',
      manOfTheMatch: 'AB de Villiers',
      id: '1216540',
      date: '2020-10-12',
      venue: 'At Sharjah Cricket Stadium, Sharjah',
      competingTeam: 'Royal Challengers Bangalore',
      competingTeamLogo:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png',
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      firstInnings: 'Royal Challengers Bangalore',
      secondInnings: 'Kolkata Knight Riders',
      matchStatus: 'Lost',
    },
  ],
}

class TeamMatches extends Component {
  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    // const response = await fetch(``)
  }

  render() {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    return <div path={`/team-matches/${id}`}> Syam</div>
  }
}

export default TeamMatches
