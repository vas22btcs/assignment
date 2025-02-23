import { Button, Input } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Add = () => {
     const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      blogName,
      description,
      authorName
    };
    
    
    console.log('New Blog:', newBlog);
     navigate('/');
    setBlogName('');
    setDescription('');
    setAuthorName('');
  };


  
  return (
    <div>
      <h2>Add a New Blog</h2>
     <form onSubmit={handleSubmit}>
      
      <div>
        
          <label>Blog Name:</label>
          <Input
            type="text" 
            value={blogName} 
            onChange={(e) => setBlogName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <Input
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Author Name:</label>
          <Input 
            type="text" 
            value={authorName} 
            onChange={(e) => setAuthorName(e.target.value)} 
            required 
          />
        </div>
        <Button type="submit">Submit</Button>
        </form>
    </div>
  );
}

export default Add
