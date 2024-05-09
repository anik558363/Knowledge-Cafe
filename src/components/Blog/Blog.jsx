import PropTypes from 'prop-types'; // ES6


const Blog = ({blog}) => {
   const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className='rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p className='space-x-1'>
                {
                    hashtags.map((hash, idx) => <span key={idx}>#<a href="">{hash}</a> </span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog:PropTypes.object.isRequired 
}

export default Blog;