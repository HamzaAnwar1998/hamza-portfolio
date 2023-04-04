import BookList from '../../images/youtube/BookList.png'
import pdfFirebase from '../../images/youtube/pdfFirebase.png'
import reactReduxTodoApp from '../../images/youtube/reactReduxTodoApp.png'
import navbar from '../../images/youtube/navbar.png'
import weather from '../../images/youtube/weather.png'
import pdf2022 from '../../images/youtube/pdf2022.png'
import uploadViewPdf from '../../images/youtube/uploadViewPdf.png'
import viewPDF from '../../images/youtube/viewPDF.png'
import LSBookList from '../../images/youtube/LSBookList.png'
import simpleEcommerce from '../../images/youtube/simpleEcommerce.png'
import viewExcelData from '../../images/youtube/viewExcelData.png'
import filterProducts from '../../images/youtube/filterProducts.png'
import todoAppJavaScript from '../../images/youtube/todoAppJavaScript.png'
import ecommerce2021 from '../../images/youtube/ecommerce2021.png'
import unsplash from '../../images/youtube/unsplash.png'
import password from '../../images/youtube/React Password Validator.png'
import downloadPDF from '../../images/youtube/How to download PDF Files from API Response.png'
import facebookAuth from '../../images/youtube/Firebase Version 9 Facebook Authentication Using ReactJS.png'
import emailLinkAuth from '../../images/youtube/Firebase.png'

const videos = [
    {id: 1, title: 'Firebase Facebook Authentication Using ReactJS | 2023',
     link: 'https://www.youtube.com/watch?v=2TxirN6aI_s&t=218s',
     thumbnail: facebookAuth, views: '365', date: 'Mar 01, 2023', category:'latest' },

    {id: 2, title: 'Firebase Email Link Authentication In React | Passwordless SignIn',
     link: 'https://www.youtube.com/watch?v=0HJ9wPq0B54',
     thumbnail: emailLinkAuth, views: '478', date: 'Feb 26, 2023', category:'latest' },

    {id: 3, title: 'How to download Pdf file from API response',
     link: 'https://www.youtube.com/watch?v=CydnvANiNPo&t=140s',
     thumbnail: downloadPDF, views: '1.9k', date: 'Jan 02, 2023', category:'latest' },

    {id: 4, title: 'React Password Validation Check | Show and Hide passwords in React',
     link: 'https://www.youtube.com/watch?v=mHPno0osqzY&t=453s',
     thumbnail: password, views: '2k', date: 'Oct 05, 2022', category:'latest' },

    {id: 5, title: 'View PDF Files from Firebase Storage in React',
     link: 'https://www.youtube.com/watch?v=WBpHWm8FL_E&t=186s',
     thumbnail: pdfFirebase, views: '1.9k', date: 'July 15, 2022', category:'latest' },

    {id: 6, title: 'TodoApp using React and Redux #1 Create and Read Data',
     link: 'https://www.youtube.com/watch?v=if-h729np6Q',
     thumbnail: reactReduxTodoApp, views: '6k', date: 'June 13, 2022', category:'latest' },

    {id: 7, title: 'Responsive Navbar using useState hook and conditional classes',
     link: 'https://www.youtube.com/watch?v=tqLHollxEDc&t=6s',
     thumbnail: navbar, views: '2.7k', date: 'May 16, 2022', category:'latest' },

    {id: 8, title: 'Weather Search App using React and AccuWeather API',
     link: 'https://www.youtube.com/watch?v=8oKM9agvh3g&t=117s',
     thumbnail: weather, views: '1.5k', date: 'May 9, 2022', category:'latest' },

    {id: 9, title: 'How to display PDF Files using React-PDF-Viewer in 2022',
     link: 'https://www.youtube.com/watch?v=nzelgXXCxvY&t=197s',
     thumbnail: pdf2022, views: '21k', date: 'Jan 24, 2022', category:'latest' },

    {id: 10, title: 'How to upload and view pdf files in reactjs',
     link: 'https://www.youtube.com/watch?v=v-PoG1X8jig',
     thumbnail: uploadViewPdf, views: '35k', date: 'Mar 23, 2021', category:'most-viewed' },

    {id: 11, title: 'How to view pdfs using React pdf Viewer',
     link: 'https://www.youtube.com/watch?v=VKP8wgUDq5k',
     thumbnail: viewPDF, views: '30k', date: 'May 19, 2021', category:'most-viewed' },

    {id: 12, title: 'React Hooks and Local Storage BookList App',
     link: 'https://www.youtube.com/watch?v=Mb-f3QfX2rU&t=160s',
     thumbnail: LSBookList, views: '32k', date: 'June 10, 2021', category:'most-viewed' },

    {id: 13, title: 'Ecommerce Store using React and Firebase',
     link: 'https://www.youtube.com/watch?v=pS250LbCZfE',
     thumbnail: simpleEcommerce, views: '21k', date: 'Nov 23, 2020', category:'most-viewed' },

    {id: 14, title: 'How to upload and view excel files in reactjs',
     link: 'https://www.youtube.com/watch?v=N42gydeIoQA',
     thumbnail: viewExcelData, views: '18k', date: 'Oct 25, 2021', category:'most-viewed' },

    {id: 15, title: 'How to filter products in React Ecommerce App',
     link: 'https://www.youtube.com/watch?v=sCZHGZocytA',
     thumbnail: filterProducts, views: '17k', date: 'Dec 07, 2021', category:'most-viewed' },

    {id: 16, title: 'TodoApp with Vanilla JavaScript and Firebase',
     link: 'https://www.youtube.com/watch?v=nz-f37qpADQ',
     thumbnail: todoAppJavaScript, views: '6.6k', date: 'Aug 05, 2020', category:'most-viewed' },

    {id: 17, title: 'Ecommerce App with React Hooks and Firebase',
     link: 'https://www.youtube.com/watch?v=adLBobQiWhg',
     thumbnail: ecommerce2021, views: '9.7k', date: 'July 03, 2021', category:'most-viewed' },

    {id: 18, title: 'Fetch and Display Unsplash images in React App',
     link: 'https://www.youtube.com/watch?v=edDU1tv40Sw',
     thumbnail: unsplash, views: '7.3k', date: 'Sep 26, 2021', category:'most-viewed' },
]

const youtubeReducer=(state=videos,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default youtubeReducer;