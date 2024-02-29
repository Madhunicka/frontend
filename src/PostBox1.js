import React from 'react';
// import image from './Images/delete.png';
import image from './Images/editx.png';
import image1 from './Images/delete.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';

function PostBox1({ posts }) {
  const maxItemsPerRow = 3; // Maximum items per row
  const user = useSelector(selectUser);
  const token = user.token;
  
  // const [requestData, setRequestData] = useState([]);
 

  async function deleteRequest(id){

    console.log(id)
    const response = await fetch(`http://localhost:3001/api/post/${id}`,{
      method:'DELETE',
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json();
    window.location.reload();
   
    
    // console.log(data)

    // fetchData();
  }
  return (
    <div className='PostBox11'>
      <div id='PostBox1' className='posts-containers'>
        {/* <div> <img src={image} className='del2'/></div> */}
        {posts.map((post, index) => (
          <div key={index} className='singlePost1'>
            <div className='currentUser1'>
              <div
              style={
                {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // paddingInline: '100px',
                  // height: '100px',
                  // width: '100px',
                  // backgroundColor: 'lightgray',
                  // borderRadius: '50%',
                  // marginLeft: '550px'
                }
              }
              >
                <p>{post.postedBy}</p>
                <div>
                  <img
                    src={image}
                    id='editreq'
                    alt='reqDelete'
                    style={{ height: '32px', width: '32px',
                    // marginLeft: '590px'
                   }}
                  />
                   <img
                    src={image1}
                    id='editreq'
                    alt='reqDelete'
                    onClick={
                      () => {
                        //confirm
                        if(window.confirm('Are you sure you want to delete this post?')){
                          deleteRequest(post._id)
                      }
                    }
                    }
                    style={{ height: '32px', width: '32px',
                    // marginLeft: '590px'
                   }}
                  />
                </div>
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
