function NotifItem({icon, notifNum}) {
    return (
        <div className="relative mr-3 cursor-pointer">
            <i className={`${icon} text-lg`}></i>
            <div className="bg-red-600 text-white absolute top-[-3px] right-[-5px] rounded-[50%] w-[15px] h-[15px] flex justify-center items-center text-xs ">
                <span>{notifNum}</span>
            </div>
        </div>
    )
}

export default NotifItem
