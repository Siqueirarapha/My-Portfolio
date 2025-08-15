import './home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Hi! I am Raphael. Welcome to my portfolio.</h1>
          <p>Front-end Developer | Computer Science</p>
        </div>
        
        <div className="home-image">
          <img src="./../../public/img/minha-foto.jpg" alt="Raphael" />
        </div>
      </div>
    </section>
  );
}

export default Home;
