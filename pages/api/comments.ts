import { GraphQLClient, gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

const graphqlAPI = process.env.NEXT_PUBLIC_CONTENT_API as string;
const grapqhqlToken = process.env.TOKEN as string;

const asyncHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${grapqhqlToken}`,
    },
  });

  try {
    const query = gql`
      mutation CreateComment(
        $name: String!
        $comment: String!
        $slug: String!
      ) {
        createComment(
          data: {
            name: $name
            comment: $comment
            post: { connect: { slug: $slug } }
          }
        ) {
          id
        }
      }
    `;
    const result = await graphQLClient.request(query, req.body);

    const mutation = gql`
      mutation publishComment($id: ID!) {
        publishComment(where: { id: $id }) {
          name
        }
      }
    `;
    const pubRes = await graphQLClient.request(mutation, {
      id: result.createComment.id,
    });
    return res.status(200).send(pubRes);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export default asyncHandler;
