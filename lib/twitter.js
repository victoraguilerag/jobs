// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search

const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = 'AAAAAAAAAAAAAAAAAAAAAAOuRQEAAAAAV3yz6jmiY0ZlAn35Ua2QPgvhugs%3DQDa0c6eqfsG2y95IdOPz02MPuluak703BtXK0HZ4JgaARvcshH';

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

async function getRequest() {

    // Edit query parameters below
    // specify a search query, and any additional fields that are required
    // by default, only the Tweet ID and text fields are returned
    const params = {
        'query': 'from:nasa',
        'tweet.fields': 'author_id'
    }
    console.log(token);
    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

module.exports = getRequest;
// export default getRequest;
// (async () => {

//     try {
//         // Make request
//         const response = await getRequest();
//         console.dir(response, {
//             depth: null
//         });

//     } catch (e) {
//         console.log(e);
//         process.exit(-1);
//     }
//     process.exit();
// })();
