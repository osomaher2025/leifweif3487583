
import GradientCard from '../UI/GradientCard';

const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, Vue.js, TypeScript, HTML5, CSS3, SASS",
      image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&h=250&fit=crop",
      icon: "💻"
    },
    {
      title: "Backend Development", 
      description: "Node.js, Python, Express, MongoDB, PostgreSQL",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      icon: "🔧"
    },
    {
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      icon: "📱"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 gradient-text fw-bold mb-3">Skills & Expertise</h2>
          <p className="lead text-muted">Technologies I work with</p>
        </div>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <GradientCard className="h-100 p-0 overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={skill.title}
                  className="w-100 project-image"
                />
                <div className="p-4">
                  <div className="text-center mb-3">
                    <span className="fs-1">{skill.icon}</span>
                  </div>
                  <h5 className="gradient-text fw-bold mb-3">{skill.title}</h5>
                  <p className="text-muted">{skill.description}</p>
                </div>
              </GradientCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
