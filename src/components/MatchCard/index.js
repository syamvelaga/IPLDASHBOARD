// Write your code here

const MatchCard = props => {
  const {each} = props

  const {
    // umpires,
    result,
    // manOfTheMatch,
    // id,
    // date,
    // venue,
    competingTeam,
    competingTeamLogo,
    // firstInnings,
    // secondInnings,
    matchStatus,
  } = each

  return (
    <li>
      <div>
        <img alt={competingTeam} src={competingTeamLogo} />
      </div>
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
