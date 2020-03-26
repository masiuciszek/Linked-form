/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import Layout from './components/layout/Layout';
import { Container } from './components/styled/Wrapper';
import UserForm from './components/formUserDetails/UserForm';
import PersonalForm from './components/formPersenalDetails/Personal';
import Confirm from './components/confirm/Confirm';
import Welcome from './components/welcome/Welcome';


export interface IFormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  techSkills: string;
}

function App() {
  const [formState, setFormState] = React.useState<IFormData>({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    techSkills: '',
  });
  const [count, setCount] = React.useState<number>(0);


  const decrease = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increase = (): void => {
    setCount(count + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    increase();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const finalSubmit = (): void => {
    setCount(0);
    setFormState({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      techSkills: '',
    });
  };

  const renderForm = (count: number): JSX.Element => {
    switch (count) {
      case 0:
        return <Welcome increase={increase} />;
      case 1:
        return (
          <UserForm
            decrease={decrease}
            handleSubmit={handleSubmit}
            firstName={formState.firstName}
            lastName={formState.lastName}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <PersonalForm
            decrease={decrease}
            handleSubmit={handleSubmit}
            age={formState.age}
            email={formState.email}
            techSkills={formState.techSkills}
            handleChange={handleChange}
          />
        );
      case 3:
        return <Confirm formState={formState} decrease={decrease} finalSubmit={finalSubmit} />;
      default:
        return <h4>Thank you</h4>;
    }
  };

  return (
    <Layout>
      <Container>
        {renderForm(count)}
      </Container>
    </Layout>
  );
}

export default App;
