import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
     // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      gameId: event.pathParameters.id,
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Game not found.");
  }

  return result.Item;
});