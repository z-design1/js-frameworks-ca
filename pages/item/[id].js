import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";

export default function Item({ item }) {
return (
<Layout >
    <Head title={item.name}/>
    <h1>{item.name}</h1>
    {/* <img src={item.image} /> */}
</Layout>
);
}
export async function getStaticPaths() {
try {
    const response = await axios.get(BASE_URL);
    const items = response.data;
    const paths = items.map((item) => ({
    params: { id: item.id},
    }));
    console.log(paths);
    return { paths:paths, fallback: false };
} catch (error) {
    console.log(error);
}
}
export async function getStaticProps({ params }) {
const url = `${BASE_URL}/${params.id}`;
let item = null;
try {
    const response = await axios.get(url);
    console.log(response);
    item = response.data;
    return {
    props: { item: item },
};
} catch (error) {
    console.log(error);
}
}
