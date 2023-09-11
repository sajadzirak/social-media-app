function SidebarOption({children, title}) {
    return (
        <li className="flex font-medium mb-3 text-lg">
            <div className="font-extrabold">{children}</div>
            <h2 className="ml-4 cursor-pointer">{title}</h2>
        </li>
    )
}

export default SidebarOption
