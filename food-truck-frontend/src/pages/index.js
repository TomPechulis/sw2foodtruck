import React from 'react';
import Link from '@material-ui/core/Link';

require('dotenv').config();

function HomePage() {
    return (
        <div>
            <h2>Home Page</h2>
            <div>
                <nav>
                    <hr/>
                    <input type="submit" value="Login" /><input type="submit" value="Register" />
                    <br/>
                    <a href = "/">Rolling Guacamole Home Page</a>
                    <br/>
                    <a href = "\guac">Rolling Guacamole Truck Search</a>
                </nav>
            </div>
        </div>
    )
}

export default HomePage