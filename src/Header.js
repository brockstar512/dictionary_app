import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return <div className="header">
    {/* <span>Dictionary</span> */}
    <Link to ="/">Search</Link>
    </div>
}
export default Header