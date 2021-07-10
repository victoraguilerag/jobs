
// Get User Tweet timeline by user ID
// https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start

const needle = require('needle');

// this is the ID for @TwitterDev
// const userId = "2244994945";

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAAOuRQEAAAAAV3yz6jmiY0ZlAn35Ua2QPgvhugs%3DQDa0c6eqfsG2y95IdOPz02MPuluak703BtXK0HZ4JgaARvcshH';

    // we request the author_id expansion so that we can print out the user name later
    let params = {
        "max_results": 100,
        "tweet.fields": "created_at",
        "expansions": "author_id"
    }

    const options = {
        headers: {
            "User-Agent": "v2UserTweetsJS",
            "authorization": `Bearer ${bearerToken}`
        }
    }

const getUserTweets = async (userId) => {
    let userTweets = [];

    const url = `https://api.twitter.com/2/users/${userId}/tweets`;

    let hasNextPage = true;
    let nextToken = null;
    let userName;
    console.log("Retrieving Tweets...");

    while (hasNextPage) {
        let resp = await getPage(params, options, nextToken, url);
        console.log(resp);
        if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
            userName = resp.includes.users[0].username;
            if (resp.data) {
                userTweets.push.apply(userTweets, resp.data);
            }
            if (resp.meta.next_token) {
                nextToken = resp.meta.next_token;
            } else {
                hasNextPage = false;
            }
        } else {
            hasNextPage = false;
        }
    }

    console.dir(userTweets, {
        depth: null
    });
    console.log(userTweets);
    console.log(userId);
    console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);

}

const getPage = async (params, options, nextToken, url) => {
    if (nextToken) {
        params.pagination_token = nextToken;
    }
    console.log(url);
    try {
        const resp = await needle('get', url, params, options);
        // console.log(resp.body);

        if (resp.statusCode != 200) {
            console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
            return;
        }
        return resp.body;
    } catch (err) {
        throw new Error(`Request failed: ${err}`);
    }
}

module.exports = async (userId) => {
    console.log(userId);
    // const getURL = 'https://api.twitter.com/2/users/' + userId
    // const id = await needle('get', , params, options);
    // console.log('hey')
    // console.log(id)
    // console.log(id.body);
    return await getUserTweets(userId);
};