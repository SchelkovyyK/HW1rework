import "./App.css";
import ModalText from "./components/modals/ModalText/ModalText";
import ModalImage from "./components/modals/ModalImage/ModalImage";

function App() {
  

  return (
    <>
      <div>
        <ModalImage
          firstText="NO, CANCEL"
          secondaryText="YES, DELETE">
          <img
            src="https://cdn7.idcgames.com/storage/image/1120/game_home_video_bg_embebed/default.jpg"
            alt="d"
          />
          <h2>Product Delete!</h2>
          <p>
            By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.
          </p>
        </ModalImage>

        <ModalText
          firstText="ADD TO FAVORITE"
        >
          <h2>Add Product “NAME”</h2>
          <p>Description for you product</p>
        </ModalText>
      </div>
    </>
  );
}

export default App;
