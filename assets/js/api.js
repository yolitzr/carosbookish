import axios from 'axios';
const urlGeneral = 'http://admin.carosbookish.com/api/v1/book/list';
const urlDetails = `http://admin.carosbookish.com/api/v1/book/`;

// Api Home
async function booksInfo(body) {
    const settingHome = {
      method: "POST",
      url: urlGeneral,
      headers: {
        "X-AUTH-TOKEN": "r0bUsSF2H9LiL1aYoHw",
        "Content-Type": "application/json"
      },
      data: body
    };
    return await axios(settingHome)
    .then(function(response){
        return response.data;
    })
};

// API slug
async function bookDetails(id) {
    const settingSlug = {
        method: 'get',
        url: urlDetails+id,
        headers: { 
            'X-AUTH-TOKEN': 'r0bUsSF2H9LiL1aYoHw',  
        }
    }

    return await axios(settingSlug)
    .then(function(response){
        return response.data;
    })
};

async function bookReviews(params, body) {
    const settingReviews = {
      method: "post",
      url: urlGeneral,
      headers: {
        "X-AUTH-TOKEN": "r0bUsSF2H9LiL1aYoHw"
      },
      params: params,
      data: body,
      
    };

    return await axios(settingReviews)
    .then(function(response){
        return response.data;
    })
}

export default {
    booksInfo,
    bookDetails,
    bookReviews,
};