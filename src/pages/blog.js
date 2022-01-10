import React from 'react'
import Nav from "./components/Nav"
import Banner from "./components/Banner"

export default function blog() {
    return (
        <div>
            <Nav />
            <Banner />
            <div className="container">
                <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1587978834371-9494c5a02221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Why I love Gatsby</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Read more
                    </a>
                </div>
                </div>
            </div>
            
        </div>
    )
}
