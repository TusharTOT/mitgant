import React, { useState } from "react";
import Profile from "./../../../assets/Images/Webapp/svg/profile.svg";
import removeicon from "./../../../assets/Images/Webapp/png/remove-icon.png";
const UserDetails = (props) => {
  const { userData } = props;
  const [imageUrl, setImgUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageError, setImageError] = useState(false);
  const onFileSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size >= 500) {
        setImageError(true);
        setImgUrl("");
        setImageName("");
      } else {
        setImageError(false);
        setImgUrl(URL.createObjectURL(event.target.files[0]));
        setImageName(event.target.files[0].name);
      }
    } else {
      setImageError(true);
      setImgUrl("");
      setImageName("");
    }
  };

  const onImageRemove = () => {
    setImgUrl("");
    setImageName("");
  };
  return (
    <>
      <div className="title">
        <b>Account Details</b>
      </div>
      <div className="d-flex profile-info">
        <div className="profile-img">
          <img src={imageUrl ? imageUrl : Profile} alt="profilepic" />
        </div>
        <div className="profile-detail">
          <b>Account photo</b>
          <p className={imageError ? "text-danger" : ""}>
            Only .jpg and .png files. 500kb max file size.
          </p>
          <div className="browse-button">
            {imageName && (
              <div className="button">
                <p>{imageName}</p>
                <img
                  src={removeicon}
                  alt="removeicon"
                  onClick={onImageRemove}
                />
              </div>
            )}

            <input
              id="addfile"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onFileSelect}
            />

            {imageName === "" ? (
              <label for="addfile" className="btn btn-primary">
                {" "}
                Add File
              </label>
            ) : (
              <button className="btn btn-primary" for="addfile">
                Add File
              </button>
            )}
          </div>
        </div>
      </div>
      <section className="form-div">
        {" "}
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="validationCustom01">First Name </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="firstName"
                name="firstName"
                value={userData.firstName}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="validationCustom01">Last Name </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="lastName"
                name="lastName"
                value={userData.lastName}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="validationCustom01">Email Address </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                value={userData.email}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="validationCustom01">Organization</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="organization"
                name="organization"
                value={userData.companyName}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserDetails;
