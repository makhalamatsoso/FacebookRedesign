import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      username: 'Makhala',
      userAvatar: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg',
      time: 'now',
      content: 'Embracing every moment that God gave me ✨',
      image: 'https://africanlanders.com/wp-content/uploads/2023/05/1676141200882.jpg',
      likes: 142,
      reactions: ['👍', '❤️', '🔥']
    },
    {
      id: '2',
      username: 'Makhala',
      userAvatar: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg',
      time: '2h',
      content: 'This semester is showing me flames and i am tired but i will never stop until i succeed no matter what may come my way! 💪',
      likes: 87,
      reactions: ['❤️', '😍']
    },
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);  
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);