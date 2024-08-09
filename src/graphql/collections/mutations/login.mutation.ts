export const LOGIN_MUTATION = `
    mutation 
      Login(
        $email: String!,
        $password: String!
      ) {
        login(
          data: {
           email: $email, 
           password: $password 
          }
        ) 
        {
          accessToken
          user {
           id
          }
        }
      }
`;
