/* eslint-disable react/prop-types */
export default function StepTwo({ formTools }) {
  return (
    <>
      <h2>Veuillez fournir un pseudo</h2>
      <input
        name="username"
        onChange={formTools.handleChangeForm}
        type="text"
        placeholder="Veuillez entrer un pseudo"
      />
      <button onClick={formTools.nextStep}>Continuer</button>
    </>
  );
}
