export default function TeamLogo({teamid, height="20px"}) {
    // console.log(props)
    return <img height={height}
        src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamid}.svg`} 
    />
}