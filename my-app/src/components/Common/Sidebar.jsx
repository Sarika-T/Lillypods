import React from "react";
import { Nav } from "react-bootstrap";
import Buttons from "./Buttons";

export default function Sidebar (props) {

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                    <Buttons
                        name= "Contact Us"
                        variant="outlined"
                        className= "hero-button"
                        sx={{width: '100%',height: '50px', border:'1px solid #ffffff', borderRadius: '20px', color: '#ffffff', textTransform:'Capitailize'}}
                    />      
                    <Buttons 
                        name= "Login"
                        variant="contained"
                        className= "hero-button"
                        sx={{width: '100%',height: '50px',backgroundColor:'#ffffff', borderRadius: '20px', color: '#7D59C3', textTransform:'Capitailize'}}
                    />  
            </div>
            <Nav className="flex-column nav-links">
                <Nav.Link>
                    Home
                </Nav.Link>
                <Nav.Link>
                    Networks
                </Nav.Link>
                <Nav.Link>
                    Product
                </Nav.Link>
                <Nav.Link>
                     Technology
                </Nav.Link>
                <Nav.Link>
                     Our Story
                </Nav.Link>
                <Nav.Link>
                    Knowledge Center
                </Nav.Link>
            </Nav>
        </div>
    );
};