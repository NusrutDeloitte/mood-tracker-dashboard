// import React from 'react';


function Header(){
    return (
        <header>
        <h1>Mood Tracker Dashboard</h1>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/moods">Mood Tracker</a></li>
                <li><a href="/quotes">Quotes</a></li>
                <li><a href="/daily-goals">List</a></li>
            </ul>
        </nav>
        <hr></hr>
        </header>
    );
 
};

export default Header;
