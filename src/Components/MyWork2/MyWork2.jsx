import { Link } from 'react-router-dom';
import './MyWork2.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork2_data from '../../assets/mywork2_data';

const MyWork2 = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>Backend projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork2_data.map((work, index) => (
          <Link key={index} to={`/project1/${work.w_no}`}>
            <img src={work.w_img} alt={work.w_name} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MyWork2;

