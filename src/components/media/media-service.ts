import AWS from 'aws-sdk';
import { logger } from "../../utils";

const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
});

export const getPresignedURLService = async (key: string) => {
  logger.info("Requesting signed url for key")
  const signed_url = await s3.getSignedUrlPromise('getObject', {
      Bucket: 'resident-vision-data',
      Key: key,
      Expires: (60 * 5) // 5 minutes
  });

  return signed_url.replace("https://resident-vision-data.nyc3.digitaloceanspaces.com", "https://cdn.residentvision.com")
}