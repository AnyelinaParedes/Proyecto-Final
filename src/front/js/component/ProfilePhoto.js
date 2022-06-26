import React from "react";

function ProfilePhoto() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col text-center">
          <div className="input-group">
            <input
              type="file"
              className="rounded-circle"
              id="ifotoperfil"
              aria-describedby="inputGroupFileAddon04"
              src=""
            />

            <button
              className="btn btn-outline-secondary"
              type="button"
              id="inputGroupFileAddon04"
            >
              Button
            </button>
          </div>

          <img
            id="fotoperfil"
            src="https://picsum.photos/seed/100/300/300/"
            className="rounded-circle "
            alt="imagne"
          />
        </div>
      </div>
      <button
        type="button"
        id="profile.profile-page.profile-pic-section.edit-picture"
        data-bi-id="profile.profile-page.profile-pic-section.edit-picture"
        className="ms-Button ms-Button--default root-235"
        aria-label="Cambiar foto"
        data-is-focusable="true"
      >
        <span
          className="ms-Button-flexContainer flexContainer-98"
          data-automationid="splitbuttonprimary"
        >
          <span className="ms-Button-textContainer textContainer-236">
            <span className="ms-Button-label label-237" id="id__136">
              Cambiar foto
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}

export default ProfilePhoto;
