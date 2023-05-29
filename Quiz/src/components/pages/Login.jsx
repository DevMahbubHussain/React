import classes from "../../assets/styles/Login.module.css";
import loginimage from "../../assets/images/login.svg";
import Form from "./Form";
import InputText from "../InputText";
import Checkbox from "../Checkbox";
import Button from "../Button";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <div className="illustration">
          <img src={loginimage} alt="Login" />
        </div>
        <Form className={`${classes.login} form`}>
          <InputText
            type="text"
            placeholder="Enter your email"
            icon="alternate_email"
          />
          <InputText type="password" placeholder="Enter password" icon="lock" />
          <Checkbox text="I agree to the Terms & Conditions" />
          <Button>Submit Now</Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
