// project snaps
import metronic from '../../images/projects/metronic.jpeg';
import azeel from '../../images/projects/azeel.PNG';
import simplex from '../../images/projects/simplex.PNG';
import VE from '../../images/projects/VE.PNG';
import ummah from '../../images/projects/ummah.PNG';
import jobya from '../../images/projects/jobya.PNG';
import bookstore from '../../images/projects/bookstore.PNG';
import travel from '../../images/projects/travel.PNG';
import saylani from '../../images/projects/saylani.PNG';
import ecommerce from '../../images/projects/ecommerce.png';
import covidstats from '../../images/projects/covidstats.PNG';
import space from '../../images/projects/space.PNG';
import donateNowDashboard from '../../images/projects/DonateNOW-Dashboard.png';
import fiverrGig from '../../images/projects/fiverrGig.png';
import trademate from '../../images/projects/TRADEMATE-Home-V1.0.png';

// project full snaps
import azeelFull from '../../images/FullSnaps/azeelFull.jpg';
import jobyaFull from '../../images/FullSnaps/jobyaFull.PNG';
import saylaniFull from '../../images/FullSnaps/saylaniFull.PNG';
import travelFull from '../../images/FullSnaps/travelFull.PNG';
import ummahFull from '../../images/FullSnaps/ummahFull.PNG';
import simplexFull from '../../images/FullSnaps/simplexFull.PNG';
import VE_Full from '../../images/FullSnaps/VE_Full.PNG';
import trademateFull from '../../images/FullSnaps/TRADEMATE-1.png';
import emailTemplateFull from '../../images/FullSnaps/PasswordSuccessFullyChanged.png';

import { ALL_DEVELOPMENT, FIREBASE_DEVELOPMENT, REACT_DEVELOPMENT, UI_DEVELOPMENT } from '../actions';

const initialState={
    active: 'All',
    projects: [
        {
            id: 1,
            title: 'DonateNOW',
            category: 'React-JS',
            description: 'DonateNOW is a fast and easy way to donate to campaigns that you care about. It includes features such as: Tracking all your donations, Creating recurring donations, Following charities, Downloading a tax receipt', 
            tech: 'React-JS / CSS / Redux / Laravel API',
            github: 'Confidential',
            link: 'Confidential',
            img: donateNowDashboard,
            fullSnap: donateNowDashboard
        },
        {
            id: 2,
            title: 'TRADEMATE',
            category: 'React-JS',
            description: 'Welcome to TRADEMATE - Your one-stop destination for the latest tech and lifestyle products! Shop with ease and confidence, and enjoy high-quality products at affordable prices.', 
            tech: 'React-JS / Redux-ToolKit',
            github: '',
            link: 'https://trademate-e9bdc.web.app/',
            img: trademate,
            fullSnap: trademateFull
        },
        {
            id: 3,
            title: 'Email-Templates',
            category: 'UI-Development',
            description: 'Email Templates coded using HTML', 
            tech: 'HTML / CSS',
            github: '',
            link: '',
            img: fiverrGig,
            fullSnap: emailTemplateFull
        },
        {
            id: 4,
            title: 'Metronic Dashboard',
            category: 'UI-Development',
            description: 'I cloned this using only React and CSS', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/metronic-dashboard',
            link: 'https://metronic-dashboard-5d523.web.app/',
            img: metronic,
            fullSnap: metronic
        },
        {
            id: 5,
            title: 'Azeel Solutions',
            category: 'UI-Development',
            description: 'This is a PSD to HTML task', 
            tech: 'HTML / CSS',
            github: '',
            link: 'https://azeelsolutions.web.app/',
            img: azeel,
            fullSnap: azeelFull
        },
        {
            id: 6,
            title: 'Simplex Pharmacy',
            category: 'UI-Development',
            description: 'This is a PSD to React task', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/Simplex',
            link: 'https://hamzaanwar1998.github.io/Simplex/',
            img: simplex,
            fullSnap: simplexFull
        },
        {
            id: 7,
            title: 'Virtual Exhibition',
            category: 'UI-Development',
            description: 'I developed the Landing Page and Signup/Login flows for the website to host online exhibitions', 
            tech: 'React-JS / CSS',
            github: '',
            link: 'https://virtualexhibitionwithevents.web.app/',
            img: VE,
            fullSnap: VE_Full
        },
        {
            id: 8,
            title: 'Build my Ummah',
            category: 'UI-Development',
            description: 'This is a PSD to HTML task', 
            tech: 'HTML / CSS',
            github: 'https://github.com/HamzaAnwar1998/UmmahWebsite',
            link: 'https://hamzaanwar1998.github.io/UmmahWebsite/',
            img: ummah,
            fullSnap: ummahFull
        },
        {
            id: 9,
            title: 'Jobya',
            category: 'UI-Development',
            description: 'A landing page for a job searching website developed using React and CSS', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/Jobya',
            link: 'https://jobya-fc093.web.app/',
            img: jobya,
            fullSnap: jobyaFull
        },
        {
            id: 10,
            title: 'Book-Store',
            category: 'React-JS',
            description: 'A simple book listing application allowing user to perform get and post actions on an API to create and read books', 
            tech: 'React-JS / Redux',
            github: 'https://github.com/HamzaAnwar1998/bookstore-react',
            link: '',
            img: bookstore,
            fullSnap: bookstore
        },
        {
            id: 11,
            title: 'Travel Agency',
            category: 'UI-Development',
            description: 'A PSD to React task', 
            tech: 'React-JS / CSS',
            github: 'https://github.com/HamzaAnwar1998/Responsive-React-Site',
            link: 'https://reactsite-483eb.web.app/',
            img: travel,
            fullSnap: travelFull
        },
        {
            id: 12,
            title: 'Saylani Home Page',
            category: 'UI-Development',
            description: 'This is a task given to students during Saylani Mass IT training', 
            tech: 'HTML / CSS',
            github: 'https://github.com/HamzaAnwar1998/SaylaniHomepage',
            link: 'https://saylani-template.web.app/',
            img: saylani,
            fullSnap: saylaniFull
        },
        {
            id: 13,
            title: 'Ecommerce App',
            category: 'Firebase',
            description: 'In this Application users can buy the listed products using stripe payment gateway or cash on delivery after they are registered', 
            tech: 'React / Firebase / Node-JS / Stripe',
            github: 'https://github.com/HamzaAnwar1998/ecommerce-node-react-app',
            link: 'https://ecommerce-app-with-react-hooks.herokuapp.com/',
            img: ecommerce,
            fullSnap: ecommerce
        },
        {
            id: 14,
            title: 'Covid Stats',
            category: 'React-JS',
            description: 'Users can check for covid record of Asian countries', 
            tech: 'React / Redux / API',
            github: 'https://github.com/HamzaAnwar1998/covid-stats',
            link: 'https://covid-stats-debc3.web.app/',
            img: covidstats,
            fullSnap: covidstats
        },
        {
            id: 15,
            title: 'Space Travelers Hub',
            category: 'React-JS',
            description: 'It is a web application that provides commercial and scientific space travelling services, We are working with real live data from the SpaceX API.', 
            tech: 'React / Redux / API',
            github: 'https://github.com/ksigei/space_travelers',
            link: 'https://space-travelers-s-hub.web.app/',
            img: space,
            fullSnap: space
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
                active:action.payload,
                projects: projects
            }
        default:
            return state;
    }
}

export default operationsReducer;