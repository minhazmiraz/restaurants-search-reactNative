import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer fwumQkq_0Fq8Jskwzl49E0hkhH5jvZwGyFACmgnT-t4p5o7iBTDc-Kzd_BVK7aXBlgJrIIBOrOi3hi-K5XavFjdRskgxN12WHQf0if4SIUscXXZadllNCCcKu31tYnYx",
	},
});
