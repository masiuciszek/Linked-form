/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import Layout from './components/layout/Layout';
import { Container } from './components/styled/Wrapper';
import UserForm from './components/formUserDetails/UserForm';


export interface IFormData {
  firstName: string;
  lastName: string;
  age: number | null;
  email: string;
  techSkills: string[] | null;
}

function App() {
  const [formState, setFormState] = React.useState<IFormData>({
    firstName: '',
    lastName: '',
    age: null,
    email: '',
    techSkills: null,
  });
  const [count, setCount] = React.useState<number>(0);


  const decrease = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setCount(count + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const renderForm = (count: number): JSX.Element => {
    switch (count) {
      case 0:
        return <h1>Welcome</h1>;
      case 1:
        return (
          <UserForm
            count={count}
            decrease={decrease}
            handleSubmit={handleSubmit}
            firstName={formState.firstName}
            lastName={formState.lastName}
            handleChange={handleChange}
          />
        );
      case 2:
        return <h3>CWKS</h3>;
      default:
        return <h4>End</h4>;
    }
  };

  return (
    <Layout>
      <>
        <Container>
          {renderForm(count)}
          {count === 0 && (
            <button onClick={() => setCount(count + 1)}>Start</button>
          )}
        </Container>
      </>
    </Layout>
  );
}

export default App;
