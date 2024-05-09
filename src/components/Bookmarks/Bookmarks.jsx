import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='mx-auto'>

            <div>
                <h2 className='text-center text-2xl mb-3'>Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;