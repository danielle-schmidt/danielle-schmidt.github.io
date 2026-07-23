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
            . Her research sits at the nexus of rural and environmental sociology, with ongoing projects examining land tenure, agricultural labor, and rural 
            livability. As a community-engaged mixed-methodologist, Schmidt-Larios integrates ethnographic sensibilities and spatial analysis to investigate 
            the concepts of place, land, and home. Her research has been published in journals such as <em>Rural Sociology</em>,{" "}
  <em>Agriculture and Human Values</em>, and has received financial support from organizations including the Rural Sociological Society (RSS) 
            and Center for Integrated Agricultural Systems (CIAS).
            </p>
          <p>
        Schmidt-Larios’s dissertation, <em>Spatiotemporalities of Agricultural Land Loss</em>, explores the social implications of change in land tenure and use. 
            In addition to a national spatial analysis of land exiting agricultural production, the dissertation project puts in conversation 
            two complementary case studies: one in the Breaks of northeastern Montana and the other in the Driftless area of southwestern Wisconsin. 
            Findings aim to speak to the ways change in land tenure and use reflect evolving environmental and land management priorities, 
            shifts in socioecological relationships, and altered local place identities.
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
              href="/July2026_CV_Schmidt-Larios.pdf"
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
