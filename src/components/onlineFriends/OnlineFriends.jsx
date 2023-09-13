import { users } from "../../db"
import OnlineFriend from "./onlineFriend/OnlineFriend"

function OnlineFriends() {
    return (
        <div>
            <span className="text-xl font-medium">Online Friends</span>
            <ul>
                {users.map(user => {
                    return (
                        <OnlineFriend key={user.id} user={user} />
                    )
                })}
            </ul>
        </div>
    )
}

export default OnlineFriends
