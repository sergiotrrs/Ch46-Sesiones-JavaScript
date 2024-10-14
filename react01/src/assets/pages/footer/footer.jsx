import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </div>
      <div className="social-links">
        <a href="#" target="_blank" >
          <i>LinkedIn</i>
        </a>
        <a href="#" target="_blank" >
          <i>GitHub</i>
        </a>
        <a href="#" target="_blank" >
          <i>Instagram</i>
        </a>
      </div>
      
    </footer>
  );
};
export { Footer };
