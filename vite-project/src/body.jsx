import React from "react";





export default function Body() {
    return (
        <main className="body">
            <h2 className="profile--name">Abena A. Agyemang</h2>
            <h4 className="profile--job">Administrative Assistant</h4>
            <a href="https://mail.google.com/mail/u/0/">
                <button type="button" className="btn-email">Email</button>
            </a>
            <a href="https://www.linkedin.com/in/abena-a-agyemang-37585818b/">
                <button type="button" className="btn-linkedin">LinkedIn</button>
            </a>
            <div className="text--container">
                <h2 className="text-head">About</h2>
                <h4 className="text">I am an administrative assistant with two plus years of experience. I have an interest in making things simple, running office agenda, and automating daily tasks. I keep up with best practices and always look for new things to learn.</h4>
                <h2 className="text-head">Interests</h2>
                <h4 className="text">Food expert, Reading, Travel geek, Internet fanatic</h4>
            </div>
            
        </main>
    )
}