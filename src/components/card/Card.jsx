import style from './card.module.css';

const Card = props => {
	return (
		<div className={`${style[props.color]} ${style.size}`}>
			<img className={style.image} src={props.src} alt='' />
			<h1 className={style.title}>{props.title}</h1>
			<p className={style.description}>{props.description}</p>
			<button className={`${style.button} ${style[props.colorButton]}`}>
				Learn More
			</button>
		</div>
	);
};

export default Card;
