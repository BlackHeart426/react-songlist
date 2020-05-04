export const addUserIdAtLink = (link) => (
    "/s/"+getUserId()+link
)

const getUserId = () => (
    localStorage.getItem('currentUser')
)