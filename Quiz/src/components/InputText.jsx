import classes from '../assets/styles/InputText.module.css';
const InputText = ({icon,...rest}) => {
  return (
    <>
      <div className={classes.textInput}>
              <input {...rest }/>
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </>
  );
}

export default InputText
