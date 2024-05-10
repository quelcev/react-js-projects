const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright © ABC Company{" "}
        <span className="date">{new Date().getFullYear()}</span>. All Rights
        Reserved
      </p>
    </footer>
  );
};
export default Footer;
