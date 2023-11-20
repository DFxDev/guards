const uploadImageToCloudinary = async file => {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "test-guards-app");
    uploadData.append("cloud_name", "dntvsnojh");
  
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dntvsnojh/image/upload",
      {
        method: "post",
        body: uploadData,
      }
    );
  
    const data = await res.json();
    return data;
  };
  
  export default uploadImageToCloudinary;
  