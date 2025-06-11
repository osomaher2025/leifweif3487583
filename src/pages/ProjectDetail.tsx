
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import GradientButton from '../components/UI/GradientButton';
import GradientCard from '../components/UI/GradientCard';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div>
      <Navbar />
      <section className="py-5 mt-5">
        <div className="container">
          <GradientButton to="/projects" className="mb-4">
            ← Back to Projects
          </GradientButton>
          
          <div className="row">
            <div className="col-lg-8">
              <GradientCard className="p-0 overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-100"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="p-4">
                  <h1 className="gradient-text fw-bold mb-3">{project.title}</h1>
                  <p className="lead text-muted mb-4">{project.description}</p>
                  
                  <h3 className="gradient-text fw-bold mb-3">Technologies Used</h3>
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary me-2 mb-2 fs-6 px-3 py-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="gradient-text fw-bold mb-3">Project Features</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✨ Modern and responsive design</li>
                    <li className="mb-2">🔒 Secure user authentication</li>
                    <li className="mb-2">📱 Mobile-first approach</li>
                    <li className="mb-2">⚡ Fast performance optimization</li>
                    <li className="mb-2">🎨 Beautiful user interface</li>
                  </ul>

                  <div className="d-flex gap-3 flex-wrap">
                    {project.demo && (
                      <GradientButton href={project.demo}>
                        View Live Demo
                      </GradientButton>
                    )}
                    {project.github && (
                      <GradientButton href={project.github} variant="outline">
                        View on GitHub
                      </GradientButton>
                    )}
                  </div>
                </div>
              </GradientCard>
            </div>
            
            <div className="col-lg-4">
              <GradientCard className="p-4">
                <h4 className="gradient-text fw-bold mb-3">Project Info</h4>
                <div className="mb-3">
                  <strong>Project Type:</strong>
                  <p className="text-muted mb-0">Web Application</p>
                </div>
                <div className="mb-3">
                  <strong>Duration:</strong>
                  <p className="text-muted mb-0">3 months</p>
                </div>
                <div className="mb-3">
                  <strong>Role:</strong>
                  <p className="text-muted mb-0">Full Stack Developer</p>
                </div>
                <div className="mb-3">
                  <strong>Status:</strong>
                  <p className="text-muted mb-0">Completed</p>
                </div>
              </GradientCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
