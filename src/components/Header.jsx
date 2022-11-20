import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <a className="navbar-brand px-2">Grocery Store</a>
                    <form className="form-inline form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search<i class="material-icons">add_location</i></button>
                    </form>
                </nav>
            </header>
        )
    }
}
