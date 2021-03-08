export interface CommitData {
    sha: string
    commit: {
        author: {
            name: string,
            email: string,
            date: string
        },
        message: string
    }
    author: {
        avatar_url: string
    }
}
