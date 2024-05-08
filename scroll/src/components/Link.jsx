const Link = ({ link, handleScrollTo }) => {
  const { href, text } = link;
  return (
    <li>
      <a
        href={href}
        className="scroll-link"
        onClick={(e) => handleScrollTo({ e, href })}
      >
        {text}
      </a>
    </li>
  );
};
export default Link;
