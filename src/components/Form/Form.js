import React, { Component } from "react";
import JamesBond from "./assets/bond_approve.jpg";
import Field from "../Field";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      password: '',
      formValid: false,
      errorMessage: {name: '', lastname: '', password: ''}
    }
  }

  handleSubmit = () => {
    const {name, lastname, password} = this.state;
    const errorName = name.length === 0 ? 
      'Нужно указать имя' : name.toLowerCase() === 'james' ? '' : 'Имя указано не верно';
    const errorLastname = lastname.length === 0 ? 
      'Нужно указать фамилию' : lastname.toLowerCase() === 'bond' ? '' : 'Фамилия указана не верно';
    const errorPassword = password.length === 0 ? 
      'Нужно указать пароль' : password.toLowerCase() === '007' ? '' : 'Пароль указан не верно';

      if (errorName.length === 0 && errorLastname.length === 0 && errorPassword.length === 0) {
        this.setState({formValid: true})
      } else {
        this.setState({
          errorMessage: {name: errorName, lastname: errorLastname, password: errorPassword}
        })
      }    
  }

  changeInputValue = (value, name) => {
    this.setState({
      [name]: value,
      errorMessage: {name: '', lastname: '', password: ''}
    });
  }

  render() {
    const { formValid, name, lastname, password, errorMessage } = this.state;
    return (
      <div className="app-container">
        {
          formValid ? 
            <img className="t-bond-image" alt="James Bond" src={JamesBond} /> : 
            <form className="form" onSubmit={(event) => { event.preventDefault(); this.handleSubmit() }} >
              <h1>Введите свои данные, агент</h1>
              <Field 
                type="text" 
                name="name" 
                label="Имя" 
                value={name} 
                onChange={this.changeInputValue} 
                messageError={
                  errorMessage.name.length ? errorMessage.name : '' 
                }
              />
              <Field 
                type="text" 
                name="lastname" 
                label="Фамилия" 
                value={lastname} 
                onChange={this.changeInputValue} 
                messageError={
                  errorMessage.lastname.length ? errorMessage.lastname : ''
                }
              />
              <Field 
                type="text" 
                name="password" 
                label="Пароль" 
                value={password} 
                onChange={this.changeInputValue} 
                messageError={
                  errorMessage.password.length ? errorMessage.password : ''
                }
              />
              <div className="form__buttons">
                <input 
                  type="submit" 
                  className="button t-submit" 
                  value="Проверить" 
                />
              </div>
            </form>
        }        
      </div>
    )
  }
}

export default Form;