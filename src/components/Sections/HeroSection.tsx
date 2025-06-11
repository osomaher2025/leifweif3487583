
import GradientButton from '../UI/GradientButton';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center min-vh-100">
      <div className="container hero-content">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-2 fw-bold text-white mb-4 page-content active">
              Hi, I'm <span className="gradient-text">John Doe</span>
            </h1>
            <p className="lead text-white mb-5 page-content active">
              Full Stack Developer passionate about creating amazing web experiences
              with modern technologies and beautiful design.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap page-content active">
              <GradientButton to="/projects">
                View My Work
              </GradientButton>
              <GradientButton to="/contact" variant="outline">
                Get In Touch
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
