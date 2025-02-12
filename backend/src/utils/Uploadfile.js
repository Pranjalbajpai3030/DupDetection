import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dupdtect',
        api_key: '175814244275599',
        api_secret: 'wpTFiBfmhlcUfvCEPCJ7Bq2wETw'
    });
    
    // Upload file
    const uploadOnCloudinary = async (localFilePath) => {
        try{
            if(!localFilePath) return null;
            const result = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            });
            console.log("File uploaded successfully", result.secure_url);
        }
        catch(error){
            fs.unlinkSync(localFilePath);
            console.error("Error in uploadOnCloudinary", error);
            return null;
        }
    };

    // Call the function with a sample file path
    await uploadOnCloudinary('path/to/your/file');
})();