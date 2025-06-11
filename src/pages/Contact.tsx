
import Navbar from '../components/Layout/Navbar';
import ContactForm from '../components/Forms/ContactForm';
import GradientCard from '../components/UI/GradientCard';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-section min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-white mb-3">Get In Touch</h1>
                <p className="lead text-white">
                  Have a project in mind? Let's work together to bring your ideas to life.
                </p>
              </div>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <GradientCard className="p-4 h-100">
                    <img 
                      src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=250&fit=crop" 
                      alt="Contact"
                      className="w-100 rounded mb-3"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <h4 className="gradient-text fw-bold mb-3">Let's Connect</h4>
                    <div className="mb-3">
                      <strong>Email:</strong>
                      <p className="text-muted mb-0">john.doe@example.com</p>
                    </div>
                    <div className="mb-3">
                      <strong>Phone:</strong>
                      <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                    <div className="mb-3">
                      <strong>Location:</strong>
                      <p className="text-muted mb-0">San Francisco, CA</p>
                    </div>
                    <div className="d-flex gap-3 mt-4">
                      <a href="#" className="btn btn-outline-light">LinkedIn</a>
                      <a href="#" className="btn btn-outline-light">GitHub</a>
                      <a href="#" className="btn btn-outline-light">Twitter</a>
                    </div>
                  </GradientCard>
                </div>
                
                <div className="col-md-6">
                  <GradientCard className="p-4 h-100">
                    <h4 className="gradient-text fw-bold mb-4">Send Message</h4>
                    <ContactForm />
                  </GradientCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
