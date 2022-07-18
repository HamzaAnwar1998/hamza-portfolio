import metronic from '../../images/projects/metronic.jpeg';
import azeel from '../../images/projects/azeel.PNG';
import simplex1 from '../../images/projects/simplex1.PNG';
import VE from '../../images/projects/VE.PNG';
import ummah from '../../images/projects/ummah.PNG';
import jobya from '../../images/projects/jobya.PNG';
import bookstore from '../../images/projects/bookstore.PNG';
import travel from '../../images/projects/travel.PNG';
import saylani from '../../images/projects/saylani.PNG';
import ecommerce from '../../images/projects/ecommerce.png';
import covidstats from '../../images/projects/covidstats.PNG';
import space from '../../images/projects/space.PNG';
import { ALL_DEVELOPMENT, FIREBASE_DEVELOPMENT, REACT_DEVELOPMENT, UI_DEVELOPMENT } from '../actions';

const initialState={
    active: '',
    projects: [
        {
            id: 1,
            title: 'Metronic Dashboard',
            category: 'ui',
            description: 'I cloned this using only React and CSS', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/metronic-dashboard',
            link: 'https://metronic-dashboard-5d523.web.app/',
            img: metronic
        },
        {
            id: 2,
            title: 'Azeel Solutions',
            category: 'ui',
            description: 'This is a PSD to HTML task', 
            tech: 'HTML / CSS',
            github: '',
            link: 'https://azeelsolutions.web.app/',
            img: azeel
        },
        {
            id: 3,
            title: 'Simplex Pharmacy',
            category: 'ui',
            description: 'This is a PSD to React task', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/Simplex',
            link: 'http://simplex123.herokuapp.com/',
            img: simplex1
        },
        {
            id: 4,
            title: 'Virtual Exhibition',
            category: 'ui',
            description: 'I developed the Landing Page and Signup/Login flows for the website to host online exhibitions', 
            tech: 'React-JS / CSS',
            github: '',
            link: 'https://virtualexhibitionwithevents.web.app/',
            img: VE
        },
        {
            id: 5,
            title: 'Build my Ummah',
            category: 'ui',
            description: 'This is a PSD to HTML task', 
            tech: 'HTML / CSS',
            github: 'https://github.com/HamzaAnwar1998/UmmahWebsite',
            link: 'https://hamzaanwar1998.github.io/UmmahWebsite/',
            img: ummah
        },
        {
            id: 6,
            title: 'Jobya',
            category: 'ui',
            description: 'A landing page for a job searching website developed using React and CSS', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/Jobya',
            link: 'https://jobya-fc093.web.app/',
            img: jobya
        },
        {
            id: 7,
            title: 'Book-Store',
            category: 'react',
            description: 'A simple book listing application allowing user to perform get and post actions on an API to create and read books', 
            tech: 'React-JS / Redux',
            github: 'https://github.com/HamzaAnwar1998/bookstore-react',
            link: '',
            img: bookstore
        },
        {
            id: 8,
            title: 'Travel Agency',
            category: 'ui',
            description: 'A PSD to React task', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/Responsive-React-Site',
            link: 'https://reactsite-483eb.web.app/',
            img: travel
        },
        {
            id: 9,
            title: 'Saylani Home Page',
            category: 'ui',
            description: 'This is a task given to students during Saylani Mass IT training', 
            tech: 'HTML / CSS',
            github: 'https://github.com/HamzaAnwar1998/SaylaniHomepage',
            link: 'https://saylani-template.web.app/',
            img: saylani
        },
        {
            id: 10,
            title: 'Ecommerce App',
            category: 'firebase',
            description: 'In this Application users can buy the listed products using stripe payment gateway or cash on delivery after they are registered', 
            tech: 'React / Firebase / Node-JS / Stripe',
            github: 'https://github.com/HamzaAnwar1998/ecommerce-node-react-app',
            link: 'https://ecommerce-app-with-react-hooks.herokuapp.com/',
            img: ecommerce
        },
        {
            id: 11,
            title: 'Covid Stats',
            category: 'react',
            description: 'Users can check for covid record of Asian countries', 
            tech: 'React / Redux / API',
            github: 'https://github.com/HamzaAnwar1998/covid-stats',
            link: 'https://covid-stats-debc3.web.app/',
            img: covidstats
        },
        {
            id: 12,
            title: 'Space Travelers Hub',
            category: 'react',
            description: 'It is a web application that provides commercial and scientific space travelling services, We are working with real live data from the SpaceX API.', 
            tech: 'React / Redux / API',
            github: 'https://github.com/ksigei/space_travelers',
            link: 'https://space-travelers-s-hub.web.app/',
            img: space
        },
    ]
}

const operationsReducer=(state=initialState, action)=>{
    const projects = initialState.projects;
    switch(action.type){
        case UI_DEVELOPMENT:
            const uiProjects = projects.filter((project)=>project.category===action.payload);
            return{
                active: action.payload,
                projects: uiProjects
            }
        case REACT_DEVELOPMENT:
            const reactProjects = projects.filter((project)=>project.category===action.payload);
            return{
                active: action.payload,
                projects: reactProjects
            }
        case FIREBASE_DEVELOPMENT:
            const firebaseProjects = projects.filter((project)=>project.category===action.payload);
            return{
                active: action.payload,
                projects: firebaseProjects
            }
        case ALL_DEVELOPMENT:
            return{
                active:'',
                projects: projects
            }
        default:
            return state;
    }
}

export default operationsReducer;