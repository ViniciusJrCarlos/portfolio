//import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [

    { name: "linkedin", icon: <FaLinkedinIn /> }

  
];

const socialNetworks2 = [

    { name: "github", icon: <FaGithub /> },

    { name: "instagram", icon: <FaInstagram /> },

];

const SocialNetworks = () => {

    return (
    
    <section id="social-networks">

            {socialNetworks.map((network) => (

                <a href="https://www.linkedin.com/in/viniciusjrcarlos/" className="social-btn" id={network.name} key={network.name} target="_blank" rel="noreferrer" >
                    {network.icon}
                </a>

            ))}

    </section>



    );

};

const SocialNetworks2 = () => {

    return (

        <section id="social-networks">

        {socialNetworks2.map((network) => (

            <a href="#" className="social-btn" id={network.name} key={network.name} >
                {network.icon}
            </a>

        ))}

</section>


    );

};

export default SocialNetworks; SocialNetworks2;