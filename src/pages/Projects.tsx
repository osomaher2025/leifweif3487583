
import Navbar from '../components/Layout/Navbar';
import ProjectCard from '../components/UI/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 gradient-text fw-bold mb-3">My Projects</h1>
            <p className="lead text-muted">A collection of my recent work and contributions</p>
          </div>
          <div className="row g-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
