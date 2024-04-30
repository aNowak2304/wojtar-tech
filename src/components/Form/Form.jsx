import { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form data submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Imię jest wymagane.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Podany email jest nieprawidłowy.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Temat jest wymagany.';
    if (!formData.message.trim()) newErrors.message = 'Wiadomość jest wymagana.';
    return newErrors;
  };

  return (
    <section className='form' id='contact'>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className='form__card'>
          <h2 className='form__heading'>Bądźmy
w kontakcie</h2>

<div className="blur-box"></div>
          <div className="form__box">

            <div className="form__container">

            <input 
              className='form__input' 
              type="text" 
              name="firstName" 
              placeholder='Imię' 
              aria-label="Imię" 
              value={formData.firstName} 
              onChange={handleChange} 
              />
              {errors.firstName && <p className='form__error '>{errors.firstName}</p>}
            </div>

            <div className="form__container">
            <input 
              className='form__input' 
              type="email" 
              name="email" 
              placeholder='Email' 
              aria-label="Email"
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <p className='form__error'>{errors.email}</p>}
            </div>

            <div className="form__container">
            <input 
              className='form__input' 
              type="text" 
              name="subject" 
              placeholder='Temat' 
              aria-label="Temat"
              value={formData.subject} 
              onChange={handleChange} 
            />
            {errors.subject && <p className='form__error'>{errors.subject}</p>}
            </div>

            <div className="form__container">
            <textarea 
              className='form__textarea' 
              name="message" 
              placeholder='Wiadomość' 
              aria-label="Wiadomość"
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className='form__error'>{errors.message}</p>}
            </div>

          </div>

          <button type="submit" className='form__btn'>Wyślij</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
