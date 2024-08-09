export const FIND_USER_BY_ID = `
  query User($id: String!){
    user(id: $id){
     id
      name
      email
      status
      cpf
      photoUrl
      address
      phone
      createdAt
      updatedAt
      deletedAt
     userSocialMedias {
      link
      socialMedia
      }
     repositories {
      link
      language
      }
    } 
  }
`;
