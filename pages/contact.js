import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Link from "next/link";


export default function PageWithJSbasedForm() {
const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
    first: event.target.first.value,
    last: event.target.last.value,
    };
    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/form", {
    body: JSONdata,
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    });


    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
};
return (
  <Layout>
    <Head />
    <h1>Contact</h1>
    <div>
    </div>
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />
      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
    <div>
      <img src="favicon.ico" className="form-img"></img>
    </div>
  </Layout>
);
}
