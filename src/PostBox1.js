import React from 'react';
// import image from './Images/delete.png';
import image from './Images/editx.png';
import image1 from './Images/delete.png';
function PostBox1({ posts }) {
  const maxItemsPerRow = 3; // Maximum items per row

  return (
    <div className='PostBox11'>
      <div id='PostBox1' className='posts-containers'>
        {/* <div> <img src={image} className='del2'/></div> */}
        {posts.map((post, index) => (
          <div key={index} className='singlePost1'>
            <div className='currentUser1'>
              <div>
                <p>{post.postedBy}</p>
                <img
                  src={image1}
                  id='editreq'
                  alt='reqDelete'
                  style={{ height: '32px', width: '32px', marginLeft: '590px' }}
                />
              </div>
            </div>
            <p>{post.content}</p>
            <div key={index}>
              {post.image && (
                <img
                  src={"http://localhost:3001" + post.image}
                  alt='Selected Image'
                  className='selectedImage'
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default PostBox1;
