import { useState } from "react";

import StepOne from "../components/register/StepOne";
import StepTwo from "../components/register/StepTwo";
import FinalStep from "../components/register/FinalStep";

export default function Register() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const displayStepComponent = () => {
    if (step === 1) {
      return <StepOne formTools={{ nextStep, handleChangeForm }} />;
    } else if (step === 2) {
      return <StepTwo formTools={{ nextStep, handleChangeForm }} />;
    } else {
      return <FinalStep form={form} />;
    }
  };

  return (
    <form>
      <h1>Créer un compte</h1>
      {displayStepComponent()}
    </form>
  );
}
