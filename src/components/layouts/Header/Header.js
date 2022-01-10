import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import styles from "./Header.module.scss";
import HeaderWnsLogo from "../../../assets/images/logo.png";

const Header = ({ isSidebarOpened, onClickSidebarIcon }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={HeaderWnsLogo} alt="WNS" />
        {isSidebarOpened && (
          <>
            <div className={styles.logoText}>
              <span>Smart</span>
              Billing
            </div>
            <KeyboardDoubleArrowLeftIcon
              style={{ color: "#fff", marginLeft: "10%" }}
              fontSize="large"
              onClick={onClickSidebarIcon}
            />
          </>
        )}
         {!isSidebarOpened && (
          
           
            <MenuIcon
              style={{ color: "#fff", marginLeft: "10%" }}
              fontSize="large"
              onClick={onClickSidebarIcon}
            />
          
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.notification}></div>
        <div className={styles.userSection}></div>
        <div className={styles.logout}>
        <IconButton size="small">
          <LogoutIcon style={{ color: "#fff" }}  />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
