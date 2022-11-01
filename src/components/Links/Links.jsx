import styles from './Links.module.css';

const links = [
  {
    id: 'twitter',
    href: 'https://twitter.com/devBayo',
    content: 'Twitter Link',
  },
  {
    id: 'btn_zuri',
    href: 'https://training.zuri.team/',
    content: 'Zuri Team',
  },
  {
    id: 'books',
    href: 'https://books.zuri.team/',
    content: 'Zuri Books',
  },

  {
    id: 'book_python',
    href: 'https://books.zuri.team/python-for-beginners?ref_id=<devBayo>',
    content: 'Python Books',
  },
  {
    id: 'pitch',
    href: 'https://background.zuri.team/',
    content: 'Background Check for Coders',
  },
  {
    id: 'book_design',
    href: 'https://books.zuri.team/design-rules',
    content: 'Design Books',
  },
];

const LinkItem = props => {
  return (
    <li className={styles.link__item}>
      <a href={props.href} target="blank" className={styles.link} id={props.id}>
        {props.children}
      </a>
    </li>
  );
};

const Links = () => {
  return (
    <ul className={styles.links}>
      {links.map(link => (
        <LinkItem key={link.id} href={link.href} id={link.id}>
          {link.content}
        </LinkItem>
      ))}
    </ul>
  );
};

export default Links;
