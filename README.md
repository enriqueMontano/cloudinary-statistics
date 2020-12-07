# cloudinary-statistics

Application that provides us with Cloudinary API statistics.

## How to install

1. Clone the project on your computer:

```bash
$ git clone https://github.com/enriqueMontano/cloudinary-statistics.git
```

2. Install necessary libraries:

```bash
$ cd cloudinary-statistics
$ npm i
```

3. Set environment variables:

- Create a .env file in the project root directory:

```bash
$ touch .env
```

- Add Cloudinary environment variables on new lines in the form of NAME=VALUE. For example:

```
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
CLOUDINARY_NAME=your_cloudinary_name
```

_You can consult the .env.template file to use it as an example of what you need, the PORT is not strictly necessary._

## How to run

On the project root directory

```bash
$ npm run dev
```

## How to run with Docker

It is necessary to have a [Docker](https://docs.docker.com/get-docker/) installed on your computer.

On the project root directory.

```bash
$ docker-compose up
```

## How to use

In your default browser or Postman app, you can do two different calls.

1. Get some statistics:

   URL: http://localhost:5000/cloudinary/statistics

Sample response:

```
{
    totalImages: 1000,
    formats: {
        jpg: 23,
        png: 300,
        svg: 677
    },
    biggestPicture: 'https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932194/wallhdpic_20_fsou0u.jpg',
    smallestPicture: 'https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932187/wallhdpic_1_gwkxuu.jpg',
    avgSize: 3002
}

```

2. Get a CSV:

   URL: http://localhost:5000/cloudinary/csv

Sample response:

```
public_id,folder,filename,format,version,resource_type,type,created_at,uploaded_at,bytes,backup_bytes,width,height,aspect_ratio,pixels,url,secure_url,status,access_mode,access_control,etag,created_by/0,uploaded_by/0
wallhdpic_1_gwkxuu,,wallhdpic_1_gwkxuu,jpg,1580932187,image,upload,2020-02-05T19:49:47+00:00,2020-02-05T19:49:47+00:00,467357,0,1920,1080,1.77778,2073600,http://res.cloudinary.com/dbnuvqzms/image/upload/v1580932187/wallhdpic_1_gwkxuu.jpg,https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932187/wallhdpic_1_gwkxuu.jpg,active,public,,cfd15df0cbe6bfebe8bfd6abd596e75e,,
...
```

## Test

To run the tests, in the root directory launch the following command:

```
$ npm run test
```

## Technologies

Project is created with:

- Node: 12.14.1
- Express: v4.16.3
- Docker: v19.03.13
