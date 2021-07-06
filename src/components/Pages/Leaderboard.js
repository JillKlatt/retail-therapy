import { useSelector } from 'react-redux'


function Leaderboard() {


    let leaders = useSelector((state) => state.leaders.leaders)

    function renderLeaders(){

        // Need to sort leaders here to correctly render new users upon post
        const sortedLeaders = leaders.sort((a, b) => (a.points < b.points) ? 1 : -1)      
        return (sortedLeaders.map((leader, index) => <li key={index}>{leader.username} - {leader.points}</li>)
       )
    }

    return(
        <div>
            <ol>
            {renderLeaders()}
            Right Now this deployment isn't currently tied to the backend server. But if it was, it would look like this:
            <li>Big Winner Baby 100</li>
            <li>Jill - 60</li>
            <li>Thunder - 50</li>
            <li>Maggie - 40</li>
            </ol>
        </div>
    )

} 

export default Leaderboard;

    // ## Currently storing leaders in store, can store locally: 

        // useEffect(() => {
    //     props.getLeaders()}, []
    // )

    // const [leaders, setLeaders] = useState([])

    // useEffect(() => {
    //     fetch("http:///127.0.0.1:3001/users")
    //     .then(resp => resp.json())
    //     .then(data => {
 
    //         setLeaders(data)
    //     }) }, [])

    // return (
    //     <div>
    //         Leaderboard!
    //         <ol>
    //             {renderLeaders()}
    //         </ol>
    //     </div>
    // )