import logo from './logo.svg';
import { connect } from "react-redux";
import {createDataAction, logInAction, logOutAction} from "./Actions/demoAction";
import {currentUser, selectSessionAuthentication} from './useSelector';
import Button from '@material-ui/core/Button';

function RotateImageComponent(props){

    console.log(props.rotating);
    return (
        <div className="App">
        {/* <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (props.rotating ? "":" App-logo-paused")
            }
            alt="logo"
            onClick={
              () => props.rotateActionProp(!props.rotating)
            }
          /> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
         
        </header> */}
        <h2>User Session Management</h2>

        {props.authenticated ? 
                  <Button onClick={() => {
                    props.logOutActionDispatcher()
                  }} color=''>
                        Log Out
                  </Button>
                  :
                  <Button onClick={() => {props.logInActionDispatcher({
                      name: "Atif",
                      email: "atif.ali.ati@gmail.com",
                      password: "12345",
                      phone: "125487"
                    })}} color='primary'>
                          Log In 
                    </Button>
                }
         <p>
         {props.user.email}
         </p>

      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    logInActionDispatcher: (user) => dispatch(logInAction(user)),
    logOutActionDispatcher: () => dispatch(logOutAction()),
  });

  
const mapStateToProps = state => (
  {
    authenticated: selectSessionAuthentication(state),
    user: currentUser(state),
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(RotateImageComponent);
