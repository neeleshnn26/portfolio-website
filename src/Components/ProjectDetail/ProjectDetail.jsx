import { useNavigate, useParams } from 'react-router-dom';
import mywork_data from '../../assets/mywork_data';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams(); // URL se project ID extract kar raha hai
  const navigate = useNavigate(); 
  const project = mywork_data.find((work) => work.w_no === parseInt(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.w_name}</h1>
      <img src={project.w_img} alt={project.w_name} className="project-img" />
      <p><strong>Description:</strong>{project.description}</p>
      <p><strong>Skills Used:</strong> {project.skills.join(", ")}</p>
      <div className="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Project</a>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        ⬅ Back 
      </button>
    </div>
  );
};

export default ProjectDetail;
