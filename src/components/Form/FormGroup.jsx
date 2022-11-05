import './FormGroup.css';

const FormGroup = props => {
  return (
    <div className={`contact-form-group ${props.class}`}>
      <label
        htmlFor={props.input?.id || props.textarea?.id}
        className="contact-form-label"
      >
        {props.labelText}
      </label>

      {props.input ? (
        <input
          className="contact-form-input contact-form-input__input"
          {...props.input}
          required
        />
      ) : (
        <textarea
          className="contact-form-input contact-form-input__textarea"
          {...props.textarea}
          required
        ></textarea>
      )}
    </div>
  );
};

export default FormGroup;
