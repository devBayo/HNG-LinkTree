import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Form.css';
import FormGroup from './FormGroup';

const formGroups = [
  {
    labelText: 'First name',
    input: {
      type: 'text',
      id: 'first_name',
      placeholder: 'Enter your first name',
    },
  },
  {
    labelText: 'Last name',
    input: {
      type: 'text',
      id: 'last_name',
      placeholder: 'Enter your last name',
    },
  },
  {
    class: 'contact-form-group__max-width',
    labelText: 'Email',
    input: {
      type: 'email',
      id: 'email',
      placeholder: 'yourname@email.com',
    },
  },
  {
    class: 'contact-form-group__max-width',
    labelText: 'Message',
    textarea: {
      id: 'message',
      placeholder: "Send me a message and I'll reply as soon as possible",
    },
  },
];

const Form = props => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    setFormIsSubmitted(true);
  };

  const closeModalHandler = () => {
    setFormIsSubmitted(false);
  };

  return (
    <>
      <form className="contact-form" onSubmit={submitHandler}>
        {formGroups.map((formGroup, i) => (
          <FormGroup
            key={i}
            labelText={formGroup.labelText}
            input={formGroup.input}
            class={formGroup.class}
            textarea={formGroup.textarea}
          />
        ))}

        <div className="contact-form-group contact-form-group__max-width contact-form-group__condition">
          <input type="checkbox" id="condition-input" required />
          <label htmlFor="condition-input" id="condition-label">
            You agree to providing your data to {props.fullname} who may contact
            you.
          </label>
        </div>
        <button
          type="submit"
          id="btn__submit"
          className="contact-form-group__max-width"
        >
          Send message
        </button>
      </form>

      {formIsSubmitted && <Modal onClick={closeModalHandler} />}
    </>
  );
};

export default Form;
