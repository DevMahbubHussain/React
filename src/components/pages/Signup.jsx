import classes from '../../assets/styles/Signup.module.css';
import Illustration from './Illustration';
import Form from './Form';
import InputText from '../InputText';
import Checkbox from '../Checkbox';
import Button from '../Button';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup} form`}>
          <InputText type="text" placeholder="Enter your Name" icon="person" />
          <InputText
            type="text"
            placeholder="Enter your email"
            icon="alternate_email"
          />
          <InputText type="password" placeholder="Enter password" icon="lock" />
          <InputText
            type="password"
            placeholder="Confirm password"
            icon="lock"
          />
          <Checkbox text="I agree to the Terms & Conditions" />
          <Button>Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
export default Signup
