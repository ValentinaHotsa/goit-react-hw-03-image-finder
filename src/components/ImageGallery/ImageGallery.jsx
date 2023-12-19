import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className="gallery">
      {items.map(item => (
        <ImageGalleryItem key={nanoid()} hit={item} onImageClick={onClick} />
      ))}
    </ul>
  );
};

// let numberPage = 1;
// let numberImg = 0;
// class ImageGallery extends Component {
//   state = {
//     galleryImg: null,
//   };

//   componentDidMount() {
//     axios(
//       'https://pixabay.com/api/?q=cat&page=1&key=40344925-ced1c275c1243101e1d196b12&image_type=photo&orientation=horizontal&per_page=12'
//     ).then(response => {
//       this.setState({ galleryImg: response.data.hits });
//     });
//   }
//   render() {
//     const { galleryImg } = this.state;
//     console.log({ galleryImg });
//     return (
//       galleryImg &&
//       galleryImg.map(item => (
//         <ImageGalleryItem key={item.id} imageItem={item} />
//       ))
//     );
//   }
// }
// export default ImageGallery;

// class ImageGallery extends Component {
//   state = {
//     galleryImg: null,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.galleryImg !== this.props.galleryImg) {
//       fetch(`${BASE_URL}?${parameters}`)
//         .then(res => res.json())
//         .then(galleryImg => this.setState({ galleryImg }));
//     }
//   }

//   render() {
//     return (
//       <ul className="gallery">
//         {this.state.galleryImg && <div>{galleryImg.data.hits}</div>}
//       </ul>
//     );
//   }
// }
// export default ImageGallery;
