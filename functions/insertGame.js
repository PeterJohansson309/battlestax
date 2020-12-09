const { createClient } = require("@astrajs/collections");

exports.handler = async (event, context) => {
  let gameId;
  let gamePayload;
  try {
    // let's set the game id
    gameId = event.path.split("insertGame/")[1];
    // let's parse the incoming payload
    gamePayload = JSON.parse(event.body);
    } catch (e) {
      // let's return a 400 if we can't parse the game id or body
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "must provide a valid game ID" }),
      };
    }

  // let's connect to Astra
  const astraClient = await createClient({
    // let's set our Astra connection configuration
  });

  const gamesCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(process.env.GAMES_COLLECTION);

  // let's provision a new game
  try {
    // let's create a new game with the gamesCollection
    // let's return a 200 with the resoponse from astra
  } catch (e) {
    console.error(e);
    // let's return a 500 on error
  }
};
