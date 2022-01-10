import WnsLogo from '../../../assets/images/wns-logo.png';
import styles from './Footer.module.scss';

const Footer = ({ open }) => {
  const openOrClose = open ? styles.open : styles.close;
  return (
    <footer className={`${styles.siteFooter} ${openOrClose}`}>
      <div>
        © 2021 All Rights Reserved <a href="#">Smart Billing</a>
      </div>
      <div className={styles.footerLogo}>
        <div>Product of</div>
        <a href="#">
          <img src={WnsLogo} alt="WNS" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
