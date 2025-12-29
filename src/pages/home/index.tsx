import { Layout } from "../../layout";
import danielleHeadshot from "../../assets/headshot_2025.jpg";

import "./home.css";

export function Home() {
  return (
    <Layout>
      <div className="home-page-content">
        <div className="image-content">
          <img src={danielleHeadshot} alt="Danielle Schmidt-Larios" />
        </div>
        <div className="text-content">
          <p>
            Danielle Schmidt-Larios is a PhD Candidate at the University of
            Wisconsin-Madison in the joint departments of{" "}
            <a href="https://sociology.wisc.edu/" target="_blank">
              Sociology
            </a>{" "}
            and{" "}
            <a href="https://dces.wisc.edu/" target="_blank">
              Community and Environmental Sociology
            </a>
            . She is broadly interested in rural and environmental
            sociology with ongoing research projects relating to transitions in
            land tenure, agricultural livelihoods, and rural
            livability. As a community-engaged mixed-methodologist,
            Schmidt-Larios incorporates ethnographic sensibilities and spatial
            thinking to investigate the concepts of place, land, and home.  Her work has been published in journals such as <em>Rural Sociology</em>,{" "}
  <em>Journal of Agriculture, Food Systems, and Community Development</em>, and{" "}
  <em>International Regional Science Review</em>.
          </p>
          <p>
            Schmidt-Larios received her undergraduate degrees in Philosophy and
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
              href="/Dec2025_CV_Schmidt-Larios.pdf"
              target="_blank"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
