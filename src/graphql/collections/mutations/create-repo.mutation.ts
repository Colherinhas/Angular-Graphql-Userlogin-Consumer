export const CREATE_REPO_MUTATION = `
    mutation CreateRepo(
        $userId: String!
        $link: String!
        $languages: [String]!
    ) {
        createUserRepository(
            data: {
                userId:$userId
                link:$link
                languages:$languages
            }
        ) {
            id
            link
            language
            createdAt
        }
    }
`;
