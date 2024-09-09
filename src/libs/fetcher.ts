import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const fetch = (url: string) => axios.get(url).then((res) => res);

export default fetcher;

