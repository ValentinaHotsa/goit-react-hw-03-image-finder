import React, { Component } from 'react';
// import axios from 'axios';
import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';

import { fetchImage } from './FetchApi/FetchApi';
export class App extends Component {
  state = {
    galleryImg: '',
    items: [],
  };
  handleFormSubmit = galleryImg => {
    this.setState({ galleryImg }, this.fetchImage);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery galleryImg={this.state.galleryImg} />
      </div>
    );
  }
}

// export class App extends Component {
//   state = {
//     galleryImg: null,
//     // передати потім в компонент loader
//     loading: false,

//   };
//   componentDidMount() {
//     this.setState({ loading: true });
//     fetch(
//       'https://pixabay.com/api/?q=cat&page=1&key=40344925-ced1c275c1243101e1d196b12&image_type=photo&orientation=horizontal&per_page=12'
//     )
//       .then(res => res.json())
//       .then(galleryImg => this.setState({ galleryImg }))
//       .finally(() => this.setState({ loading: false }));
//   }

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         {this.state.loading && <h1>Loading...</h1>}
//         {this.state.galleryImg && <div>hvghjgk</div>}
//       </div>
//     );
//   }
// }
