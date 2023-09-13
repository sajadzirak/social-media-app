import BirthdayBox from "../birthdayBox/BirthdayBox"
import OnlineFriends from "../onlineFriends/OnlineFriends"

function Rightbar() {
    return (
        <div className="hidden xl:flex flex-col flex-[2] p-4">
            <BirthdayBox />
            <hr className="my-4" />
            <OnlineFriends />
        </div>
    )
}

export default Rightbar
