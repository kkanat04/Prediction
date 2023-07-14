import './Footer.css';

import facebook from '../../assets/images/Facebook Icon.svg';
import socialIcon from '../../assets/images/Medium Icon.svg';
import twitter from '../../assets/images/Twitter Icon.svg';


const Footer = () => {

	return (
		<footer>
			<div className="container">
				<div className="footer__nav">
					<div className="footer__icons footer__box">
						<img src={facebook} alt="icon"/>
						<img src={twitter} alt="icon"/>
						<img src={socialIcon} alt="icon"/>
					</div>
					<p className="footer__copy footer__box">© 2022. All Rights Reserved. </p>
					<div className="footers__terms footer__box">
						<p>Privacy Notice</p>
						<p>Terms of Service</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
