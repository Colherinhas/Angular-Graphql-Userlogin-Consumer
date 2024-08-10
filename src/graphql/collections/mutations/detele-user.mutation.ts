export const DELETE_USER_MUTATION = `
    mutation DeleteUser(
        $id: String!,
    ) {
        deleteUser(
            id: $id
        ) {
            deletedAt
        }
    }
`;
