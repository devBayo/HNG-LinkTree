import styles from './Links.module.css';

const LinkItem = props => {
  return (
    <li className={styles.link__item}>
      <a
        title={props.title}
        href={props.href}
        target="blank"
        className={styles.link}
        id={props.id}
      >
        {props.children}
      </a>
    </li>
  );
};

const Links = ({ username }) => {
  const links = [
    {
      id: 'twitter',
      href: `https://twitter.com/${username}`,
      content: 'Twitter Link',
      title: '',
    },
    {
      id: 'btn_zuri',
      href: 'https://training.zuri.team/',
      content: 'Zuri Team',
      title: '',
    },
    {
      id: 'books',
      href: 'https://books.zuri.team/',
      content: 'Zuri Books',
      title: 'This is where you find books about design and coding',
    },

    {
      id: 'book_python',
      href: `https://books.zuri.team/python-for-beginners?ref_id=${username}`,
      content: 'Python Books',
      title:
        'Are you wondering how to get started with programming in Python? Here is a perfect chance for you.',
    },
    {
      id: 'pitch',
      href: 'https://background.zuri.team/',
      content: 'Background Check for Coders',
      title: "Here' the right place to get your background check done!",
    },
    {
      id: 'book_design',
      href: 'https://books.zuri.team/design-rules',
      content: 'Design Books',
      title: 'Check out the free design book offered by Zuri',
    },
  ];

  return (
    <ul className={styles.links}>
      {links.map(link => (
        <LinkItem
          key={link.id}
          href={link.href}
          id={link.id}
          title={link.title}
        >
          {link.content}
        </LinkItem>
      ))}
    </ul>
  );
};

export default Links;
