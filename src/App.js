
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
// import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
//Student-Parent Tabs
import Services from './Components/Services/Services';
import ParentTab from './Components/ParentTab/Parents';
import TeacherTab from './Components/TeacherTab/Teachers';
import SubscribeTab from './Components/SubscribeTab/Subscribe';

import StudentService from './Components/StudentService/StudentService';
import initializeAuthentication from './firebase/firebase.initialize';
import PageNotFound from './PageNotFound/PageNotFound';
import { GoogleAuthProvider , getAuth, signInWithPopup} from "firebase/auth";



initializeAuthentication();


const provider = new GoogleAuthProvider();

function App() {

       const  handleGoogleSignin=()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
               
                const user = result.user;
                console.log(user);
               
              })


       }
  
  return (
    <div className="">
      
          <BrowserRouter>
              <Header></Header>

          <Switch>
          <Route  exact path="/">
                    <Home></Home>

          </Route>
            <Route path="/home">
                  <Home></Home>
            </Route>
            <Route path="/Students">
                    <Services></Services>
            </Route>
            <Route path="/Parents">
                    <ParentTab></ParentTab>
            </Route>
            <Route path="/Teachers">
                    <TeacherTab></TeacherTab>
            </Route>
            <Route path="/about">
                    <About></About>
            </Route>
            <Route path="/student">
                    <StudentService></StudentService>
            </Route>
            <Route path="/subscribe">
                    <SubscribeTab></SubscribeTab>
            </Route>
            {/* <Route path="/student">
                    <StudentService></StudentService>
            </Route> */}
            <Route path="*">
                      <PageNotFound></PageNotFound>
            </Route>
          </Switch>

          
          <Footer></Footer>
          </BrowserRouter>



<button onClick={handleGoogleSignin}>Google signin</button>
    
    </div>
  );
}

export default App;
