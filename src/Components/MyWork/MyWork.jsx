// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
// // import arrow_icon  from '../../assets/arrow_icon.svg'

// const MyWork = () => {
//   return (
//     <div id='work' className='mywork'>
//       <div className="title-box">
//         <h1>Frontend projects</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="mywork-container">
//         {mywork_data.map((work,index)=>{
//             return <img key={index} src={work.w_img} alt="" />
//         })}
//       </div>
//       {/* <div className="mywork-showmore">
//         <p>Show More</p>
//         <img src={arrow_icon} alt="" />
//       </div> */}
//     </div>
//   )
// }

// export default MyWork
import { Link } from 'react-router-dom';
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>Frontend projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <Link key={index} to={`/project/${work.w_no}`}>
            <img src={work.w_img} alt={work.w_name} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MyWork;

