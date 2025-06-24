import { useState } from 'react';
import API from './api';

export default function Profile() {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState('');

  const upload = async () => {
    const formData = new FormData();
    formData.append('profilePic', file);
    const res = await API.put('/users/profile-pic', formData);
    setImg(res.data.profilePic);
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
      {img && <img src={`http://localhost:5000/${img}`} width={100} />}
    </div>
  );
}
