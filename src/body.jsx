import React from "react";





export default function Body() {
    return (
        <main className="body">
            <h2 className="profile--name">King Von Dog </h2>
            <h4 className="profile--job">King Von BodyGuard</h4>
            <a href="https://mail.google.com/mail/u/0/">
                <button type="button" className="btn-email">Email</button>
            </a>
            <a href="https://unsplash.com/s/photos/security-dogs"> 
                <button type="button" className="btn-linkedin">Co-Workers</button>
            </a>
            <div className="text--container">
                <h2 className="text-head">About</h2>
                <h4 className="text">I call myself the best bodyguard in the world. Play with me at your own peril. Don't forget the leave the gate closed. Thank You</h4>
                <h2 className="text-head">Interests</h2>
                <h4 className="text">Crushing bones-all typa bones, running, watching Abott Elementary and G.O.T.</h4>
            </div>
            
        </main>
    )
}