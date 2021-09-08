import React from 'react'
import { Link } from "react-router-dom";

function UserWelcome({username}) {
    return (
        <div>
            Hello {username}
        </div>
    )
}

export default UserWelcome
