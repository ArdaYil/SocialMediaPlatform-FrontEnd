import { useForm } from "react-hook-form";
import Input from "../form/Input";
import HGroup from "../components/HGroup";
import Checkbox from "../form/Checkbox";
import Radiobox from "../form/Radiobox";
import Date from "../form/Date";
import Form from "../form/Form";
import SubmitButton from "../form/SubmitButton";

const headerInputSize = 48;

const Register = () => {
  return (
    <Form className="auth-form">
      <h2 className="auth-form__title">Net Hive, Register Account</h2>
      <header className="auth-form__header">
        <Input
          percentWidth={headerInputSize}
          placeHolder="Name"
          onChange={() => {}}
        />
        <Input
          percentWidth={headerInputSize}
          placeHolder="Surname"
          onChange={() => {}}
        />
      </header>
      <footer className="auth-form__main">
        <Input placeHolder="Email" onChange={() => {}} />
        <Input placeHolder="Password" onChange={() => {}} />
        <Input placeHolder="Confirm Password" onChange={() => {}} />
        <div className="auth-form__birthdate">
          <Date id="birthdate">Birthdate: </Date>
        </div>
        <div className="auth-form__gender-container">
          <Radiobox id="male" name="gender">
            Male
          </Radiobox>
          <Radiobox id="female" name="gender">
            Female
          </Radiobox>
        </div>
        <div className="auth-form__checkbox-container">
          <Checkbox id="newsletter">
            I want to get newsletters from Net Hive
          </Checkbox>
          <Checkbox id="terms-of-service">
            I accept Net Hive's terms of service
          </Checkbox>
        </div>
      </footer>
      <SubmitButton>Register</SubmitButton>
    </Form>
  );
};

export default Register;