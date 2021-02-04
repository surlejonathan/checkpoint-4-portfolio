import { Link } from "react-router-dom";
import cardStyles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({ path, className, title, imgSrc, alt, description }) => {
  return (
    <Link to={path}>
      <div>
        <motion.div
          className={className}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>{title} &rarr;</h3>
          <img src={imgSrc} alt={alt} />
          <p>{description}</p>
        </motion.div>
      </div>
    </Link>
  );
};

Card.defaultProps = {
  className: cardStyles.card,
};
export default Card;
