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

const initialState=[
    {
        id: 1,
        title: 'Metronic Dashboard',
        description: 'I cloned this using only React and CSS', 
        tech: 'React-JS / CSS',
        github: 'https://github.com/HamzaAnwar1998/metronic-dashboard',
        link: 'https://metronic-dashboard-5d523.web.app/',
        img: metronic
    },
    {
        id: 2,
        title: 'Azeel Solutions',
        description: 'This is a PSD to HTML task', 
        tech: 'HTML / CSS',
        github: '',
        link: 'https://azeelsolutions.web.app/',
        img: azeel
    },
    {
        id: 3,
        title: 'Simplex Pharmacy',
        description: 'This is a PSD to React task', 
        tech: 'React-JS / CSS',
        github: 'https://github.com/HamzaAnwar1998/Simplex',
        link: 'http://simplex123.herokuapp.com/',
        img: simplex1
    },
    {
        id: 4,
        title: 'Virtual Exhibition',
        description: 'I developed the Landing Page and Signup/Login flows for the website to host online exhibitions', 
        tech: 'React-JS / CSS',
        github: '',
        link: 'https://virtualexhibitionwithevents.web.app/',
        img: VE
    },
    {
        id: 5,
        title: 'Build my Ummah',
        description: 'This is a PSD to HTML task', 
        tech: 'HTML / CSS',
        github: 'https://github.com/HamzaAnwar1998/UmmahWebsite',
        link: 'https://hamzaanwar1998.github.io/UmmahWebsite/',
        img: ummah
    },
    {
        id: 6,
        title: 'Jobya',
        description: 'A landing page for a job searching website developed using React and CSS', 
        tech: 'React-JS / CSS',
        github: 'https://github.com/HamzaAnwar1998/Jobya',
        link: 'https://jobya-fc093.web.app/',
        img: jobya
    },
    {
        id: 7,
        title: 'Book-Store',
        description: 'A simple book listing application allowing user to perform get and post actions on an API to create and read books', 
        tech: 'React-JS / Redux',
        github: 'https://github.com/HamzaAnwar1998/bookstore-react',
        link: '',
        img: bookstore
    },
    {
        id: 8,
        title: 'Travel Agency',
        description: 'A PSD to React task', 
        tech: 'React-JS / CSS',
        github: 'https://github.com/HamzaAnwar1998/Responsive-React-Site',
        link: 'https://reactsite-483eb.web.app/',
        img: travel
    },
    {
        id: 9,
        title: 'Saylani',
        description: 'This is a task given to students during Saylani Mass IT training', 
        tech: 'HTML / CSS',
        github: 'https://github.com/HamzaAnwar1998/SaylaniHomepage',
        link: 'https://saylani-template.web.app/',
        img: saylani
    },
    {
        id: 10,
        title: 'Ecommerce App',
        description: 'In this Application users can buy the listed products using stripe payment gateway or cash on delivery after they are registered', 
        tech: 'React / Firebase / Node-JS / Stripe',
        github: '',
        link: '',
        img: ecommerce
    },
];

const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default operationsReducer;