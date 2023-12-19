export const ImageGalleryItem = ({ hit, onClick }) => {
  const click = () => {
    onClick(hit.webformatURL);
  };

  return (
    <li>
      <img src={hit.webformatURL} alt="" onClick={click} />
    </li>
  );
};
