import { REPO_OWNER, REPO_NAME, sendGraphQLRequest } from '/tools/sidekick/graphql.js';

export const fetchDiscussions = async () => {
    const query = `
    query {
      repository(owner: "akasjain-helix", name: "hlxdiscussions") {
        discussions(first: 10, states: OPEN) {
          nodes {
            id
            title
            body
            createdAt
            comments(first: 5) {
              nodes {
                author {
                  login
                }
                body
              }
            }
          }
        }
      }
    }
  `;

    const data = await sendGraphQLRequest(query);
    console.log(data);
    return data;
};
