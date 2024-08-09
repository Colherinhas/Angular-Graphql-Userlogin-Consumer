export const CREATE_USER_MUTATION = `
    mutation CreateUser(
        $name: String!,
        $password: String!,
        $email: String!,
        $cpf: String!,
        $address: String,
        $phone: String,
        $photoUrl: String
    ) {
        createUser(
            data: {
                name: $name,
                password: $password,
                email: $email,
                cpf: $cpf,
                address: $address,
                phone: $phone,
                photoUrl: $photoUrl
            }
        ) {
            name
            email
        }
    }
`;
