import { useSelector } from 'react-redux'


function Leaderboard() {


    let leaders = useSelector((state) => state.leaders.leaders)

    let staticLeaders = [{username: "Big Winner Baby", points: 100}, {username: "Jill", points: 60}, {username: "Thunder", points: 50}, {username: "Maggie", points: 40}]

    function renderLeaders(){

        // Need to sort leaders here to correctly render new users upon post
        const sortedLeaders = staticLeaders.sort((a, b) => (a.points < b.points) ? 1 : -1)      
        return (sortedLeaders.map((leader, index) => <li key={index}>{leader.username} - {leader.points}</li>)
       )
    }



    

    return(
        <div className='leaderboard'>            
            <h3>Right now this deployment isn't currently tied to the backend server.</h3>
            <h3>But if it was, it would look like this:</h3>
            <ol>
            {renderLeaders()}

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