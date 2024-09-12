import backendUrl from "../api";

const getIndividualPost = async (id) => {
	let url	= backendUrl()
	const res = await fetch(`${url}/post/${id}`);
	const data = await res.json();
	return data.post;
};

export default getIndividualPost;
