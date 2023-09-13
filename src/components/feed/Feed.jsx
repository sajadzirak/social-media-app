import {posts} from "../../db"
import Post from "../post/Post"
import SharePost from "../sharePost/SharePost"

function Feed({currentUser}) {
    return (
        <div className="xl:flex-[5] md:flex-[3] flex flex-col w-full items-center mt-4">
            <SharePost currentUser={currentUser} />
            {
                posts.map(post => {
                    return (
                        <Post key={post.id} post={post} />
                    )
                })
            }
        </div>
    )
}

export default Feed
