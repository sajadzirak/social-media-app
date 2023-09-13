function ShareOption({icon, title, color}) {

    return (
        <div className="flex items-center ml-2 cursor-pointer">
            <i className={`${icon} ${color} text-sm sm:text-xl`}></i>
            <span className="ml-1 sm:ml-2 font-medium text-xs sm:text-base">{title}</span>
        </div>
    )
}

export default ShareOption
