import {Component} from 'react'

class TeamMatches extends Component {
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
