import {config} from 'dotenv'

config();

export default{
    BucketName: process.env.BUCKETNAME || '',
    Endpoint: process.env.ENDPOINT || ''
}

