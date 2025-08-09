import { Layout } from "../../layout";
import danielleAndArchie from "../../assets/danielle_and_archie.png";

import "./home.css";

export const Home = () => {
  return (
    <Layout>
      <div className="home-page-content">
        <div className="image-content">
          <img
            src={danielleAndArchie}
            alt="Schmidt-Larios and her research assistant, Archie, overlooking the Kickapoo Valley from the top of Black Hawk Rock in early spring"
          />
        </div>
        <div className="text-content">
          <p>
            Danielle Schmidt-Larios is a PhD Candidate at the University of
            Wisconsin-Madison in the joint departments of Sociology and
            Community and Environmental Sociology. She is broadly interested in
            rural and environmental sociology with ongoing research projects
            relating to transitions in land tenure, the well-being of
            agricultural workers, and rural livability. As a community-engaged
            mixed-methodologist, Schmidt-Larios incorporates ethnographic
            sensibilities and spatial thinking to investigate the concepts of
            place, land, and home. Her work has been published in journals such
            as Rural Sociology, Journal of Agriculture, Food Systems, and
            Community Development, and International Regional Science Review.
          </p>
          <p>
            Schmidt-Larios received her undergraduate degree in Philosophy and
            Public Policy from The University of Chicago, where her research on
            rural internet access won the Richard P. Taub award for best thesis.
            Beyond academia, she has varied experience in the public and
            nonprofit sectors through roles in program management, philanthropic
            consulting, and economic development. Danielle enjoys spending time
            outside and is an avid DIY’er, community volunteer, and horseback
            rider. She resides in Madison, Wisconsin with her two- and
            four-legged family members: Leo, Chet, and Archie.
          </p>
          <div className="cv-link-container">
            <a
              className="cv-link"
              href="/schmidt_cv_apr2025.pdf"
              target="_blank"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
