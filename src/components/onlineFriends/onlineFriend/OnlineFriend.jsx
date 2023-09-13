function OnlineFriend({user}) {
    return (
        <div className="flex items-center justify-start mt-4">
            <div className="mr-4 relative">
                <img className="w-[45px] h-[45px] bg-gray-100 rounded-[50%]" src={user.image} alt="" />
                <div className="bg-[#32cd32] rounded-[50%] absolute top-0 right-0 w-[15px] h-[15px] border-[2px] border-white"></div>
            </div>
            <span>{user.username}</span>
        </div>
    )
}

export default OnlineFriend
