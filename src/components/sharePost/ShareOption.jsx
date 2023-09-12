function ShareOption({icon, title, color}) {

    return (
        <div className="flex items-center ml-2 cursor-pointer">
            <i className={`${icon} ${color} text-sm`}></i>
            <span className="ml-1 font-medium text-xs">{title}</span>
        </div>
    )
}

export default ShareOption
