import { useEffect, useState } from 'react';

const Test = () => {
  const [image, setImage] = useState(null);
  const handleFile = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
  };

  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <div>
      <input
        type='file'
        onChange={handleFile}
      />
      {image && <img src={image} />}
    </div>
  );
};

export default Test;
