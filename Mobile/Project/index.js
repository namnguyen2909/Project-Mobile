/**
 * @format
 */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
/*import {AppRegistry} from 'react-native';
//import App from './App';
import maindesk from './components/maindesk'
import {name as appName} from './app.json';

//import Splash from './components/Splash'

/*class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'Login' })
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen
    }
}
*

//AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => maindesk);
*/
