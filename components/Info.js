import React from "react"

export default function Info() {
    return (
        <div className="info--container">
            <img src="../images/luis.jpg" />
            <h3 className="info--name">Luis Berenuger</h3>
            <p className="info--profession">Frontend Developer</p>
            <a className="info--website">luissberenguer.com</a>
            <button className="info--emailButton">
                <img className="info--emailButton--icon" src="../icons/Icon.png" />
                Email
            </button>
        </div>
    )
}