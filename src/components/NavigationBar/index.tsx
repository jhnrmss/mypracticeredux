import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import React from "react";
import logo from "./src/logo.svg"

const NavigationBar:React.FC = () => {
    return (
        <div className="flex justify-center">
            <Navbar
            fluid={true}
            rounded={true}
            className = "rounded-md shadow-md w-5/6 "
            >
                <Navbar.Brand >
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Practicee-APP
                    </span>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};
export default NavigationBar;