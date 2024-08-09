export const LIST_USERS_QUERY = `
  query {
    users {
      id
      name
      email
      status
      createdAt
      updatedAt
      deletedAt
      cpf
      photoUrl
    }
  }
`;
