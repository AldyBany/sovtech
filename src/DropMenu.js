const DropMenu = () => {
    return ( 
        <div className="drop-menu">
            <div className="logo">CondingNepal</div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Features</a>
                    <ul>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Elements</a></li>
                        <li><a href="">Icons</a></li>
                    </ul>
                </li>
                <li><a href="">Services</a>
                    <ul>
                        <li><a href="">Web Design</a></li>
                        <li><a href="">App Design</a></li>
                        <li><a href="">More</a>
                            <ul>
                                <li><a href="">submenu1</a></li>
                                <li><a href="">submenu2</a></li>
                                <li><a href="">submenu3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
     );
}
 
export default DropMenu;