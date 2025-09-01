
import './footer.css';

function Footer() {


  return (
    <section id="footer">
      <div className="container-footer">
        <div className="footer-info">
            <h2>Contato</h2>
            <p>
              Email: <a href="mailto:leitesiqueiraraphael@gmail.com">
                leitesiqueiraraphael@gmail.com
              </a>
            </p>
            <a href="https://github.com/Siqueirarapha" target="_blank" rel="noopener noreferrer">
              <img src="../../../public/icons/github/github-original.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/raphael-siqueira-7709aa248/" target="_blank" rel="noopener noreferrer">
              <img src="../../../public/icons/linkedin/linkedin-original.svg" alt="" />
            </a>
        </div>
        <div>
          <p>&copy; 2023 Meu Portfólio. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
