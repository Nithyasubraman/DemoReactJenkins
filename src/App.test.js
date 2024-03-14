import { render, screen } from '@testing-library/react';
import App from './App';


describe('My Calculator Test Suite', () => {
  test('Test Case-1[Render All UI Components]',()=>{
    render(<App/>);
    const txtFirstName = screen.getByTestId('TxtFirstName');
    const txtLastName = screen.getByTestId('TxtLastName');
    const txtEmail = screen.getByTestId('TxtEmail');
    const txtPassword = screen.getByTestId('TxtPassword');
    const txtConfirmPassword = screen.getByTestId('TxtConfirmPassword');
    const registerButton = screen.getByTestId('RegisterButton');
  
    expect(txtFirstName).toBeInTheDocument();
    expect(txtLastName).toBeInTheDocument();
    expect(txtEmail).toBeInTheDocument();
    expect(txtPassword).toBeInTheDocument();
    expect(txtConfirmPassword).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  test('Test Case-2[Render All Text Message]',()=> {
    render(<App/>);
    const heading = screen.getByTestId("Heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Sign Up");

  });

  test('Test Case-3 [Testing Texboxes Initial Value]',() =>{
    render(<App/>);
    const txtFirstName = screen.getByTestId("TxtFirstName");
    const txtLastName = screen.getByTestId('TxtLastName');
    const txtEmail = screen.getByTestId('TxtEmail');
    const txtPassword = screen.getByTestId('TxtPassword');
    const txtConfirmPassword = screen.getByTestId('TxtConfirmPassword');

    expect(txtFirstName).toHaveTextContent('');
    expect(txtLastName).toHaveTextContent('');
    expect(txtEmail).toHaveTextContent('');
    expect(txtPassword).toHaveTextContent('');
    expect(txtConfirmPassword).toHaveTextContent('');
  });

  xtest('Test Case-4 [Testing Empty or Blank Input]', () => {
    render(<App/>);
    const registerButton = screen.getByTestId("RegisterButton");

    fireEvent.click(registerButton);

    
  });

});










// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
