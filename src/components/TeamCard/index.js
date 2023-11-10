import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {each} = this.props
    const {teamImageUrl, id, name} = each
    return (
      <Link className="link-ele" to={`/team-matches/${id}`}>
        <li className="card">
          <div className="card-container">
            <div>
              <img className="img-name" src={teamImageUrl} alt={id} />
            </div>
            <p className="name">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
