
export default function Header(props){

    return(
        <div className="header">
            <h1 >HighScore: {props.highScore}</h1>
            <h1 >Roles: {props.roles}</h1>
        </div>
    )
}