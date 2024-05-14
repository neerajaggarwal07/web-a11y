"use client";

import React, { useState } from "react";
import "./modal.css"; // You can create a separate CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // Attach event listener for the escape key
  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
   
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-hidden="true"
      data-bs-backdrop="static" data-bs-keyboard="false"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
        <div className="modal-content text-dark">
          <div className="modal-header d-flex justify-content-between align-items-start">
            <div className="d-block "> 
            
            <h5 class="modal-title" id="modal-title">
              Cookies & Privacy
            </h5>
            <p id="modal-description">
              This website uses cookies to ensure you get the best experience on
              our website.
            </p>
           
            </div>
            <div><button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
              tabindex="0"
            >
              close
            </button></div>
            
          </div>
          <div className="modal-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="necessary"
                checked
              />
              <label class="form-check-label" for="necessary">
                <p>
                  <strong>Necessary cookies</strong>
                  <muted>
                    help with the basic functionality of our website, e.g
                    remember if you gave consent to cookies.
                  </muted>
                </p>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="analytical"
              />
              <label class="form-check-label" for="analytical">
                <p>
                  <strong>Analytical cookies</strong>
                  <muted>
                    make it possible to gather statistics about the use and
                    trafiic on our website, so we can make it better.
                  </muted>
                </p>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="marketing"
              />
              <label class="form-check-label" for="marketing">
                <p>
                  <strong>Marketing cookies</strong>
                  <muted>
                    make it possible to show you more relevant social media
                    content and advertisements on our website and other
                    platforms.
                  </muted>
                </p>
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Accept necessary
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
