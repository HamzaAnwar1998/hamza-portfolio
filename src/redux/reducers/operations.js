import weather from '../../images/weather.png';
import tshirt from '../../images/tshirt.jpeg';
import bookstore from '../../images/bookstore.PNG';
import metronic from '../../images/metronic.jpeg';
import azeel from '../../images/azeel.PNG';
import simplex1 from '../../images/simplex1.PNG';

const initialState=[
    {
        id: 1,
        title: 'Weather App',
        description: 'It is basically a weather search app where users can search for weather conditions of different parts of world', 
        tech: 'React-JS / AccuWeather API',
        github: 'https://github.com/HamzaAnwar1998/search-weather',
        link: 'https://www.youtube.com/watch?v=8oKM9agvh3g&t=114s',
        img: weather
    },
    {
        id: 2,
        title: 'Book Store',
        description: 'A simple book store created, allowing users to add and read books through an API', 
        tech: 'React-JS / Redux',
        github: 'https://github.com/HamzaAnwar1998/bookstore-react',
        link: '',
        img: bookstore
    },
    {
        id: 3,
        title: 'T-Shirt Customizer App',
        description: 'This App allow users to use different images on t-shirts using React drag and drop', 
        tech: 'React-JS / Unsplash API',
        github: 'https://github.com/HamzaAnwar1998/tshirt-customizer-app-',
        link: 'https://www.youtube.com/shorts/HnVm5Hfl-u8',
        img: tshirt
    },
    {
        id: 4,
        title: 'Metronic Dashboard',
        description: 'I cloned this using React and CSS only', 
        tech: 'React-JS / CSS',
        github: 'https://github.com/HamzaAnwar1998/metronic-dashboard',
        link: 'https://metronic-dashboard-5d523.web.app/',
        img: metronic
    },
    {
        id: 5,
        title: 'Azeel Solutions',
        description: 'This is a PSD To HTML task', 
        tech: 'HTML / CSS',
        github: '',
        link: 'https://azeelsolutions.web.app/',
        img: azeel
    },
    {
        id: 6,
        title: 'Simplex Pharmacy',
        description: 'This is a PSD To React task', 
        tech: 'React-JS / CSS',
        github: 'https://github.com/HamzaAnwar1998/Simplex',
        link: 'http://simplex123.herokuapp.com/',
        img: simplex1
    }
];

const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default operationsReducer;