import project1_img from '../assets/netflix-photo.png'
import project2_img from '../assets/portfolio.png'
import project3_img from '../assets/edusity.png'
import project4_img from '../assets/E-commerce.png'
import project5_img from '../assets/youtube.png'
import project6_img from '../assets/weather-app.png'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Netflix GPT",
        w_img: project1_img,
        description:  [
            "Built a React.js frontend with Redux for efficient state management, improving performance and user experience.",
            "Integrated Firebase for secure authentication and scalable data storage, ensuring reliability.",
            "Designed a responsive, modern UI with Tailwind CSS for an enhanced user experience.",
            "Developed a dynamic movie recommendation system using the Gemini API for personalized, genre-specific suggestions."
        ],
        skills: ["Javascript","React", "Redux", "Tailwind", "TMDB API", "Firebase", "Gemini API"],
        github: "https://github.com/neeleshnn26/Netflix-GT",
        live: "https://project-c9g1gsuqi-neeleshs-projects-b120a240.vercel.app/"
    },
    {
        w_no: 2,
        w_name: "E-commerece",
        w_img: project4_img,
        description:  [
            "Developed a fully responsive e-commerce app using React, Redux, and Tailwind CSS",
            "Implemented efficient state management with Redux for seamless user experience.",
            "Designed a modern, mobile-friendly UI with Tailwind CSS.",
            "Enhanced functionality with dynamic product listings and cart management."
        ],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/neeleshnn26/Nuclear-E-commerce",
        live: "https://nuclear-e-commerce.vercel.app/"
    },
    {
        w_no: 3,
        w_name: "College platform",
        w_img: project3_img,
        description:  [
            "Built a fully responsive college website using React.js with smooth scrolling and a dynamic slider",
            "Integrated a working contact form to receive inquiries directly via email",
            "Designed an engaging UI for seamless user experience and accessibility.",
        ],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/neeleshnn26/edusity",
        live: "https://edusity-one-tau.vercel.app/"
    },
    {
        w_no: 4,
        w_name: "Portfolio Website",
        w_img: project2_img,
        description:  [
            "Built a portfolio website using JavaScript, React.js, HTML, and CSS for a modern and responsive UI.",
            "Integrated Web3Forms for seamless email functionality, enabling efficient contact form submissions.",
            "Designed a visually appealing and user-friendly interface to enhance engagement.",
            "Ensured mobile responsiveness and smooth performance for an optimized user experience."
        ],
        skills: ["JavaScript", "Reactjs","web3forms","HTML", "CSS"],
        github: "https://github.com/neeleshnn26/portfolio-website",
        live: "https://portfolio-website-pi-navy-53.vercel.app/"
    },
    {
        w_no: 5,
        w_name: "youtube",
        w_img: project5_img,
        description:  [
            "Developed a Netflix clone using React, Redux, Tailwind CSS, and TMDB API.",
            "Implemented user authentication using Firebase.",
            "Integrated a recommendation system using OpenAI API."
        ],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/neeleshnn26/namaste-youtube",
        live: "https://namaste-youtube-indol.vercel.app/"
    },
    {
        w_no: 6,
        w_name: "weather app",
        w_img: project6_img,
        description:  [
            "Developed a Netflix clone using React, Redux, Tailwind CSS, and TMDB API.",
            "Implemented user authentication using Firebase.",
            "Integrated a recommendation system using OpenAI API."
        ],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/neeleshnn26/Weather-app",
        live: "https://weather-app-one-iota-36.vercel.app/"
    }
];

export default mywork_data;
