export const UPDATE_USER_MUTATION = `
    mutation UpdateUser(
        $id: ID!,
        $name: String,
        $address: String,
        $phone: String,
        $photoUrl: String
    ) {
        updateUser(
            data: {
                id: $id,
                name: $name,
                address: $address,
                phone: $phone,
                photoUrl: $photoUrl
            }
        ) {
            id
            name
            email
            phone
            address
            photoUrl
            createdAt
            updatedAt
        }
    }
`;
