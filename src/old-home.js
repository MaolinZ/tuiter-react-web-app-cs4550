import React from 'react'
import {Link} from "react-router-dom";

export default function OldHome() {
    return (
        <div>
            <h1>Web Dev Assignments</h1>
            <div className="list-group">
                <a className="list-group-item" href="labs/a2/index.html">Assignment
                    2 Labs</a>
                <a className="list-group-item"
                   href="https://a2--luxury-dodol-0ad756.netlify.app/">A2 Deploy
                    - HTML</a>
                <a className="list-group-item" href="labs/a3/index.html">Assignment
                    3 Labs</a>
                <a className="list-group-item"
                   href="https://a3--luxury-dodol-0ad756.netlify.app/">A3 Deploy
                    - CSS</a>
                <a className="list-group-item" href="labs/a4/index.html">Assignment
                    4 Labs</a>
                <a className="list-group-item"
                   href="https://a4--luxury-dodol-0ad756.netlify.app/">A4 Deploy
                    - Bootstrap</a>
                <a className="list-group-item" href="labs/a5/index.html">Assignment
                    5 Labs</a>
                <a className="list-group-item" href="labs/a5/todos/index.html">Assignment
                    5 TODOs</a>
                <a className="list-group-item"
                   href="https://a5--luxury-dodol-0ad756.netlify.app/">A5 Deploy
                    - JavaScript</a>
                <Link className="list-group-item" to={"/"}>A6 Lab</Link>
                <a className="list-group-item"
                   href="https://a6--luxury-dodol-0ad756.netlify.app/">A6 Deploy
                    - React</a>
                <Link className="list-group-item" to={"/a7"}>A7 Lab</Link>
                <a className="list-group-item"
                   href="https://a7--luxury-dodol-0ad756.netlify.app/">A7 Deploy
                    - Redux</a>
                <a className="list-group-item"
                   href="https://a8--luxury-dodol-0ad756.netlify.app/">A8 Deploy
                    - Node</a>
                <a className="list-group-item"
                   href="https://a9--luxury-dodol-0ad756.netlify.app/">A8 Deploy
                    - Mongo</a>
                <a className="list-group-item" href="canvas/index.html">Canvas</a>
                <a className="list-group-item" href="tarp/index.html">Tarp</a>
                <a className="list-group-item"
                   href="old-tuiter/navigation.html">Tuiter</a>
            </div>
        </div>
    )
}