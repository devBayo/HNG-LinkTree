import styles from './LinkItem.module.css';
import { Link } from 'react-router-dom';

const LinkItem = props => {
  const attributes = {
    title: props.title,
    className: styles.link,
    id: props.id,
  };

  let content = (
    <a href={props.href} target="blank" {...attributes}>
      {props.children}
    </a>
  );

  if (props.href.startsWith('/')) {
    content = (
      <Link to={props.href} {...attributes}>
        {props.children}
      </Link>
    );
  }

  return content;
};

export default LinkItem;
