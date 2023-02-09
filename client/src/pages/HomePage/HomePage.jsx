import ArticleComponent from "../../components/ArticlesComponent";
import Editor from "../../components/EditorComponent";
import Images from "../../components/Images";
import InternalCampaign from "../../components/InternalCampaign";
import ReviewComponent from "../../components/ReviewComponent";

export default function HomePage() {
  return (
    <>
      <div class="border d-flex justify-content-center">
        <div class="p-2">
          <b>SKINCARE</b>
        </div>
        <div class="p-2">
          <b>MAKE UP</b>
        </div>
        <div class="p-2">
          <b>BODY</b>
        </div>
        <div class="p-2">
          <b>HAIR</b>
        </div>
        <div class="p-2">
          <b>FRAGRANCE</b>
        </div>
        <div class="p-2">
          <b>NAILS</b>
        </div>
        <div class="p-2">
          <b>TOOLS</b>
        </div>
        <div class="p-2">
          <b>BRANDS</b>
        </div>
      </div>
      <div className="container mt-3 mb-3 text-center">
      <Images/>
      </div>
      <div className="container justify-content-center">
      <Editor/>
      </div>
      <div className="container mt-3 mb-3 text-center">
      <InternalCampaign/>
      </div>
      <div className="container justify-content-center">
      <ArticleComponent/>
        <ReviewComponent/>
      </div>
      <div>
      </div>
    </>
  );
}
