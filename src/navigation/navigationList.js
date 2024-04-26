import SplashScreen from '../screens/static/splash';
import Signin from '../screens/auth/signin';
import ResetPassword from '../screens/auth/reset';
import ForgetPassword from '../screens/auth/forgetpassword';
import Register from '../screens/auth/register';
import Verification from '../screens/auth/verfication';
import Home from '../screens/main/home';
import Builds from '../screens/main/Build';
import JVclub from '../screens/main/club';
import Drawer from './Drawer';
import Intro from '../screens/static/Intro';
export const stackNavigationList = [






  {name: 'splash', component: SplashScreen},
  {name: 'signin', component: Signin},
  {name: 'reset', component: ResetPassword},

  {name: 'forget', component: ForgetPassword},
  {name: 'register', component: Register},
  {name: 'verification', component: Verification},
  {name: 'builds', component: Builds},

  {name: 'jvclub', component: JVclub},
  {name: 'home', component: Drawer},
  {name: 'Intro', component: Intro},


];
