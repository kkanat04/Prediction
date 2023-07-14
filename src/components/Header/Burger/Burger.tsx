


interface Keys{
	handleToggle:any,
	isActive:boolean
}

const Burger = (props:Keys) => {
	return (
		<div onClick={props.handleToggle}
			className={`mobile-btn ${props.isActive ? 'show-mobile-btn' : ''}`}>
			<span></span>
		</div>
	);
};

export default Burger;
