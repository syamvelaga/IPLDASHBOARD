// Write your code here

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    // id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    // matchStatus,
  } = latestMatchDetails

  console.log(competingTeamLogo)

  return (
    <div>
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img alt={competingTeam} src={competingTeamLogo} />
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of the Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
