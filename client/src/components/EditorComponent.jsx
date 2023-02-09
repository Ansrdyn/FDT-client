import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/style.css";
import { fetchEditor } from "../store/action/action";
export default function Editor() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Editor = useSelector((state) => state.datas);
  const dataEditor = Editor["editor's choice"];
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
        <h5 className="justify-content: flex-start">
          <b>Editor's Choice</b>
        </h5>
        <p style={{ color: "grey" }}>Curated with love</p>
      </div>
      <br />
      {/* profile section  */}
      <div className="container">
        <div className="row g-3">
          {!loading
            ? dataEditor.map((el, i) => {
                return (
                  <div class="col-lg-2 col-md-6 mb-4" key={i}>
                    <div className="card">
                      <div class="col-md-auto">
                        <div
                          class="profile-pic"
                          style={{ position: "absolute", top: "-13%" }}
                        >
                          <img
                            src="https://e7.pngegg.com/pngimages/731/1014/png-clipart-woman-female-profile-people-monochrome.png"
                            class="rounded-circle"
                            width="75px"
                          />
                        </div>
                        <div class="nama">
                          <p class="name"> {el.editor}</p>
                          <p class="title"> {el.role}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-auto">
                          <div class="card-body">
                            <img
                              src={el.product.image}
                              class="card-img-top"
                              alt="..."
                            />
                            <h5 class="card-title">
                              {el.product.rating}{" "}
                              <i
                                class="bi bi-star-fill"
                                style={{ color: "#db284e" }}
                              ></i>
                              <i
                                class="bi bi-star-fill"
                                style={{ color: "#db284e" }}
                              ></i>
                              <i
                                class="bi bi-star-fill"
                                style={{ color: "#db284e" }}
                              ></i>
                              <i
                                class="bi bi-star-fill"
                                style={{ color: "#db284e" }}
                              ></i>
                              <i
                                class="bi bi-star-half"
                                style={{ color: "#db284e" }}
                              ></i>{" "}
                              (7)
                            </h5>
                            <p class="card-text">{el.product.name}</p>
                            <p class="card-desc">{el.product.description}</p>
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
    </>
  );
}
