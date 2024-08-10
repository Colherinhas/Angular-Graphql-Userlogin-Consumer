export const CREATE_REPO_MUTATION = `
    mutation CreateRepo(
        $userId: String!
        $link: String!
        $language: String!
    ) {
        createUserRepository(
            data: {
                userId:$userId
                link:$link
                language:$language
            }
        ) {
            id
            link
            language
        }
    }
`;
