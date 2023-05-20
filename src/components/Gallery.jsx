import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"


export const Gallery = () => {
    return(
        <>
            <input type="file" name="photo" id="addPhotoInput" />
            <label htmlFor="addPhotoInput">
                <i className="add-photo-button fas fa-plus-square" />
            </label>

            <section className="gallery">
                <div className="item">
                    <img src={pic1} className="item-image" alt="" />
                    <button className="delete-button">
                    Delete
                    </button>
                </div>

                <div className="item">
                    <img src={pic2} className="item-image" alt="" />
                    <button className="delete-button">
                    Delete
                    </button>
                </div>

                <div className="item">
                    <img src={pic3} className="item-image" alt="" />
                    <button className="delete-button">
                    Delete
                    </button>
                </div>

                <div className="item">
                    <img src={pic4} className="item-image" alt="" />
                    <button className="delete-button">
                    Delete
                    </button>
                </div>

                <div className="item">
                    <img src={pic5} className="item-image" alt="" />
                    <button className="delete-button">
                    Delete
                    </button>
                </div>
            </section>
      </>
    )
}