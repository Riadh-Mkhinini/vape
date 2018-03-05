import axios from 'axios';
import { URL } from './Config';
import {
  HOME_START_LOADER,
  HOME_START_REFRESHING,
  HOME_GET_PUBLICATIONS_SUCCESS,
  HOME_FIRST_GET_PUBLICATIONS_SUCCESS
} from './Types';

export const getPuplications = (idUser, page) => {
  return (dispatch) => {
      if (page === 1) {
          dispatch({ type: HOME_START_REFRESHING });
          setTimeout(() => {
              const publications = [
                  {
                      id: 1,
                      location: 'Coffe Diesel',
                      note: 3.5,
                      dateCreation: '17 dec 2018',
                      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
                      pictures: ['http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/1502824044/royal-farms-best-gas-station-food-FT-SS0817.jpg?itok=ig79fdSU', 'https://s2.reutersmedia.net/resources/r/?m=02&d=20090623&t=2&i=10611076&w=780&fh=&fw=&ll=&pl=&sq=&r=2009-06-23T200149Z_01_BTRE55M1JN400_RTROPTP_0_BASEBALL-YANKEES-FOOD'],
                      likes: 15,
                      comments: 16,
                      user: { firstName: 'Anas', lastName: 'Salem', picture: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }
                  },
                  {
                      id: 2,
                      location: 'Restaurant Diesel',
                      note: 4.5,
                      dateCreation: '17 dec 2018',
                      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition.',
                      pictures: [],
                      likes: 1,
                      comments: 6,
                      user: { firstName: 'Fares', lastName: 'Karbia', picture: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }
                  },
                  {
                      id: 3,
                      location: 'Restaurant Diesel',
                      note: 2,
                      dateCreation: '17 dec 2018',
                      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition.',
                      pictures: ['http://nj1015.com/files/2017/02/ThinkstockPhotos-183523810.jpg?w=630&h=420&zc=1&s=0&a=t&q=89'],
                      likes: 10,
                      comments: 6,
                      user: { firstName: 'Fares', lastName: 'Karbia', picture: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }
                  }
              ];
              dispatch({ type: HOME_FIRST_GET_PUBLICATIONS_SUCCESS, payload: publications });
          }, 1000);
      } else {
          dispatch({ type: HOME_START_LOADER });
          setTimeout(() => {
              const publications = [
                  {
                      id: 3,
                      location: 'Coffe Diesel',
                      note: 3.5,
                      dateCreation: '17 dec 2018',
                      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
                      pictures: ['http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/1502824044/royal-farms-best-gas-station-food-FT-SS0817.jpg?itok=ig79fdSU', 'https://s2.reutersmedia.net/resources/r/?m=02&d=20090623&t=2&i=10611076&w=780&fh=&fw=&ll=&pl=&sq=&r=2009-06-23T200149Z_01_BTRE55M1JN400_RTROPTP_0_BASEBALL-YANKEES-FOOD'],
                      likes: 10,
                      comments: 6,
                      user: { firstName: 'Anas', lastName: 'Salem', picture: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }
                  },
                  {
                      id: 4,
                      location: 'Restaurant Diesel',
                      note: 3.5,
                      dateCreation: '17 dec 2018',
                      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition.',
                      pictures: ['http://nj1015.com/files/2017/02/ThinkstockPhotos-183523810.jpg?w=630&h=420&zc=1&s=0&a=t&q=89'],
                      likes: 10,
                      comments: 6,
                      user: { firstName: 'Anas', lastName: 'Salem', picture: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' }
                  }
              ];
              dispatch({ type: HOME_GET_PUBLICATIONS_SUCCESS, payload: publications });
          }, 2000);
      }
  };
};
