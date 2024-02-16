import img from "../../assets/img.png";

export default function FinalStep({ form }) {
  return (
    <>
      <h3>Compte créé avec succès</h3>
      <p>{form.email}</p>
      <p>{form.password}</p>
      <p>{form.username}</p>
      <img src={img} alt="" />
    </>
  );
}
