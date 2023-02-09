import "../assets/style.css";
import { fetchEditor } from "../store/action/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function ReviewComponent() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Review = useSelector((state) => state.datas);
  const data = Review["latest review"];

  useEffect(() => {
    dispatch(fetchEditor()).then(() => {
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <div className="my-5">
        <h5>
          <b>Latest Reviews</b>
        </h5>
        <div className="d-flex justify-content-between">
          <p style={{ color: "grey" }}>
            So you can make better purchase decision
          </p>
          <p style={{ color: "#ec8ea2" }}>
            See more{" "}
            <i class="bi bi-chevron-right" style={{ color: "#ec8ea2" }}></i>
          </p>
        </div>
      </div>
      {/* card  */}
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            {!loading
              ? data.map((el, i) => {
                  return (
                    <div className="card w-25 h-50 m-3" key={i}>
                      <div className="row d-flex">
                        <div className="d-flex border-bottom">
                          <div className="col-md-4">
                            <img
                              src={el.product.image}
                              alt="review"
                              className="img-fluid rounded-start"
                            />
                          </div>
                          <div className="col-md-8">
                            <div
                              className="card-header"
                              style={{ background: "white", borderBottom: "0" }}
                            >
                              <div className="card-body">
                                <p className="card-title">{el.product.name}</p>
                                <p className="card-text-review">
                                  {el.product.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">
                            <i
                              className="bi bi-star-fill"
                              style={{ color: "#db284e" }}
                            ></i>
                            <i
                              className="bi bi-star-fill"
                              style={{ color: "#db284e" }}
                            ></i>
                            <i
                              className="bi bi-star-fill"
                              style={{ color: "#db284e" }}
                            ></i>
                            <i
                              className="bi bi-star-fill"
                              style={{ color: "grey" }}
                            ></i>
                            <i
                              className="bi bi-star-fill"
                              style={{ color: "grey" }}
                            ></i>
                          </h5>

                          {/* <p className="card-text"> */}
                          <ReactReadMoreReadLess
                            readMoreClassName="readMoreClassName"
                            charLimit={100}
                            readMoreText="Read More"
                            readLessText="Read Less"
                          >
                            {el.comment}
                          </ReactReadMoreReadLess>
                          {/* </p> */}
                          <div className="col-md-auto">
                            <div
                              className="profile-pic"
                              style={{ position: "absolute", top: "89%" }}
                            >
                              <img
                                src="https://e7.pngegg.com/pngimages/731/1014/png-clipart-woman-female-profile-people-monochrome.png"
                                className="rounded-circle"
                                alt="prfile"
                                width="75px"
                                style={{ transform: "translateX(6rem)" }}
                              />
                            </div>
                            <div className="nama-review">
                              <p className="name-review">{el.user}</p>
                              <p className="title-review">
                                {el.profile.join(",")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="col-md-2 pr-0">
          <img
            src="https://via.placeholder.com/300x250"
            alt="Responsive"
            height="250"
            width="300"
          ></img>
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "5em" }}
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <i
                aria-hidden="true"
                class="bi bi-chevron-left"
                style={{ fontSize: "1.5rem", color: "#db284e" }}
              ></i>
            </li>
            <li class="page-item">
              <i
                class="bi bi-dot"
                style={{ fontSize: "2rem", color: "#db284e" }}
              ></i>
            </li>
            <li class="page-item">
              <i
                class="bi bi-dot"
                style={{ fontSize: "2rem", color: "#db284e" }}
              ></i>
            </li>
            <li class="page-item">
              <i
                class="bi bi-dot"
                style={{ fontSize: "2rem", color: "#db284e" }}
              ></i>
            </li>
            <li class="page-item">
              <i
                aria-hidden="true"
                class="bi bi-chevron-right"
                style={{ fontSize: "1.5rem", color: "#db284e" }}
              ></i>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
