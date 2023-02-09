import { fetchEditor } from "../store/action/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function ArticleComponent() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Article = useSelector((state) => state.datas);
  const dataArticle = Article["latest articles"];
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
          <b>Latest Article</b>
        </h5>
        <div className="d-flex justify-content-between">
          <p style={{ color: "grey" }}>
            So you can make better purchase decision
          </p>
          <p style={{color: "#ec8ea2"}}>See more    <i class="bi bi-chevron-right" style={{color: "#ec8ea2"}}></i></p>
        </div>
      </div>
      {/* article  */}
      <div className="container">
        <div className="row row-cols-3 g-3">
          {!loading
            ? dataArticle.map((el, i) => {
                return (
                  <div className="col" key={i}>
                    <div className="card h-100 w-100" style={{border: "none"}}>
                      <img
                        src={el.image}
                        className="card-img-top"
                        alt="Skyscrapers"
                      />
                      <div className="card-body border-0">
                        <h5 className="card-title">{el.title}</h5>
                      </div>
                      <div className="card-footer border-0" style={{background: "white"}}>
                        <small className="text-muted">
                          {el.author} | {el.published_at}
                        </small>
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
