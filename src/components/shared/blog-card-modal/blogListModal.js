import React from "react";
import CloseIcon from "../../../assets/icon/close.png";
import BlogContext from "../../../contexts/blogContext/blogContext";
import Loding from "../../../assets/gif/loding.gif";

const BlogListModal = ({}) => {
  const blogContext = React.useContext(BlogContext);
  let { blogModalData, blogModalHandler, blogModal, loding } = blogContext;
  const [note, setNote] = React.useState(
    "Note : Please note that a vertical scrollbar is available within the details section to view more content."
  );
  if (!loding) {
    setTimeout(() => {
      setNote("");
    }, 2000);
  }
  return (
    <div className="modal-overlay-blog-card">
      <div className={loding ? "modal-content_loading" : "modal-content"}>
        {blogModal && loding ? (
          <img className="lodingGif" src={Loding} alt="Loading" />
        ) : (
          <>
            <div onClick={blogModalHandler} className="closeModalBox">
              <img className="icon" src={CloseIcon} />
            </div>
            <img
              src={blogModalData?.blog.cover}
              alt="Blog Thumbnail"
              className="blog-Modal__image"
            />
            {blogModalData && note && (
              <div className="noticeBox">
                Please note that a vertical scrollbar is available within the
                details section to view more content.
              </div>
            )}
            <div className="modal_textContent scrollable-content">
              <div
                dangerouslySetInnerHTML={{ __html: blogModalData?.blog?.body }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogListModal;
