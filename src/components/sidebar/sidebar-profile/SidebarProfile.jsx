function SidebarProfile({user}) {
    return (
        <li className="flex items-center mb-4">
            <img src={user.image} alt="" className="w-[40px] h-[40px] bg-gray-100 rounded-[50%] mr-3" />
            <span className="font-medium cursor-pointer">{user.username}</span>
        </li>
    )
}


export default SidebarProfile
