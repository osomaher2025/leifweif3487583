
import GradientCard from './GradientCard';
import GradientButton from './GradientButton';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <GradientCard className="h-100 p-0 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-100 project-image"
        />
        <div className="p-4">
          <h5 className="gradient-text fw-bold mb-3">{project.title}</h5>
          <p className="text-muted mb-3">{project.description}</p>
          <div className="mb-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-primary me-1 mb-1">
                {tech}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <GradientButton to={`/project/${project.id}`}>
              View Project
            </GradientButton>
            {project.github && (
              <GradientButton href={project.github} variant="outline">
                GitHub
              </GradientButton>
            )}
          </div>
        </div>
      </GradientCard>
    </div>
  );
};

export default ProjectCard;
