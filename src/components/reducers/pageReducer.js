

export default function pageReducer() {

    const [page, setPage] = useState("welcome")


function switchPage() {
    switch (page) {
        case "welcome":

            return <Welcome />
        
        case "game":

            return <Game />

        case "leaderboard":
               
            return <Leaderboard />
        
        case "about":
             
            return <About />
    

        default:

            return state;
        }
    }

    return(
        <div>
        <nav>
            <button onClick={() => setPage("welcome")}>Welcome</button>
            <button onClick={() => setPage("game")}>Let's Play!</button>
            <button onClick={() => setPage("leaderboard")}>View Leaderboard</button>
            <button onClick={() => setPage("about")}>About</button>
        </nav>
        <div>
            {switchPage()}
        </div>
    </div>
    )
}