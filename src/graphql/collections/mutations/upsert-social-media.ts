export const UPSERT_SOCIAL_MEDIA_MUTATION = `
    mutation upsertSocialMedia(
        $link: String!,
        $userId: String!,
        $socialMedia: String!,
    ) {
         createUserSocialMedia(
            data: {
                link:$link,
                userId:$userId,
                socialMedia:$socialMedia,
            }
        ) {
            id
            link
            socialMedia
        }
    }
`;
