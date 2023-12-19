import React, { Component } from 'react';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import fetchImage from './FetchApi/FetchApi';

// axios.defaults.baseURL = 'https://pixabay.com/api/?';
// const ImageGallery = ({ items }) => (
//   <ul>
//     {items.map(({ id, webformatURL, largeImageURL, title }) => (
//       <li key={id}>
//         <img src={webformatURL} alt={title} />
//       </li>
//     ))}
//   </ul>
// );
// const BASE_URL = 'https://pixabay.com/api/?';

// const API_KEY = '40344925-ced1c275c1243101e1d196b12';

export class App extends Component {
  state = {
    inputData: '',
    items: [],
    page: 1,
    totalImages: null,
    isShowMore: false,
    isShowModal: false,
    hits: null,
    isLoading: false,
    error: '',
    modalImages: '',
  };

  handleFormSubmit = inputData => {
    if (this.state.inputData !== inputData) {
      this.setState(
        { inputData, page: 1, items: [], totalImages: 0 },
        this.getImages
      );
    }
  };
  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputData, page } = this.state;
    if (prevState.inputData !== inputData || prevState.page !== page) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { inputData, page } = this.setState;
    if (!inputData) {
      return;
    }
    try {
      this.setState({ isLoading: true, error: '' });
      const response = await fetchImage(inputData, page);
      this.setState(prevState => ({
        items: prevState.items.concat(response.hits),
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleClick = () => {
    this.setState(prev => ({ page: prev.page + 1 }), this.getImages);
  };

  handleImageClick = imageUrl => {
    this.setState({ modalImage: imageUrl, isShowModal: true });
  };
  handleCloseModal = () => {
    this.setState({ isShowModal: false, modalImage: '' });
  };

  render() {
    const { isLoading, items, error, isShowModal, isShowMore, modalImage } =
      this.state;

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
        <ImageGallery
          items={this.state.items}
          onClick={this.handleImageClick}
        />
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
        {items.length > 0 && !isLoading && (
          <Button onClick={this.handleClick}>
            {isShowMore ? 'Hide images' : 'Show more'}
          </Button>
        )}
        {isShowModal && (
          <Modal
            isOpenModal={isShowModal}
            item={modalImage}
            onCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
