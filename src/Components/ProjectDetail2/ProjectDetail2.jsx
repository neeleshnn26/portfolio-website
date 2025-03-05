import { useNavigate, useParams } from 'react-router-dom';
import mywork2_data from '../../assets/mywork2_data';
import './ProjectDetail2.css';

const ProjectDetail2 = () => {
  const { id } = useParams(); // URL se project ID extract kar raha hai
  const navigate = useNavigate(); 
  const project = mywork2_data.find((work) => work.w_no === parseInt(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.w_name}</h1>
      <p><strong>Skills Used : </strong> {project.skills.join(", ")}</p>
      <img src={project.w_img} alt={project.w_name} className="project-img" />
      <button className="back-button" onClick={() => navigate('/')}>
        ⬅ Back 
      </button>
      {/* <p><strong>Description:</strong>{project.description}</p> */}
      <div className="description">
        <strong>Description</strong>
        <ul>
          {project.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Project</a>
      </div>
    </div>
  );
};

export default ProjectDetail2;
