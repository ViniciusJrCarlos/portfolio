import Avatar from "../img/perfil google.png";

import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
    return (<aside id="sidebar">
            <img src={Avatar} alt="Vinicius Carlos" />
            <p className="title">Desenvolvedor FullStack</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">
                Download Currriculum
            </a>
        </aside>

        );

    };

export default Sidebar;