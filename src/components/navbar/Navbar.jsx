import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import telegram from '../../../public/telegram.svg'
import fiverr from '../../../public/fiverr.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Wings Web
        </motion.span>
        <div className="social">
          <a href="https://t.me/wingswebs" target="_blank">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="https://www.fiverr.com/wings_webs" target="_blank">
            <img src={fiverr} alt="fiverr" />
          </a>
          <a href="https://www.instagram.com/wingsweb/" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
