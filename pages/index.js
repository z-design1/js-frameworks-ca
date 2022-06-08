import axios from "axios";
import { BASE_URL } from "../constants/api";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";


export default function Home(props) {
  console.log(props);
  return (
    <Layout>
      <Head />
      <h1>Home</h1>
      <div className="container">
        
      </div>
      {props.items.map((item) => {
        console.log(item.id);
        return (
          <div className="item-container" key={item.id}>
            <a
              className="title"
              href={`item/${item.id}`}
            >{`${item.name}`}</a>
            <img className="item-img" src={item.image} />
          </div>
        );
      })}
    </Layout>
  );
}
export async function getStaticProps() {
  let items = [];
  try {
    const response = await axios.get(BASE_URL);
    console.log({ response });
    items = response.data.results;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      items: items,
    },
  };
}
