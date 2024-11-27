import React from "react";
import food from "../assets/images/food.avif"
import { Link } from "react-router-dom";
import Story from "./Story";

const Header = () => {
    return (
        <header>
            <section>
                <div>
                    <Story />
                    <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
                <div>
                    <img src={food} />
                </div>
            </section>
        </header>
    )
}

export default Header;