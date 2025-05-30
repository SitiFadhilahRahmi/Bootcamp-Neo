import './Skill.css';

function Skill ({ title, skills }) {
  return (
    <div className="skill">
      <h3 className="skills-title">{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span className="skill-badge" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
