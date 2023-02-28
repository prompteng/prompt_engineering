import React from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { TwitterFollowButton } from "react-twitter-embed";
/* React Component Version */

import styles from "./index.module.css";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(" hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.mytitle}>{siteConfig.title}</h1>
        
        <p className="hero__subtitle" style={{ paddingBottom: "20px" }}>
          {siteConfig.tagline}
        </p>
        
        <div className={styles.buttons}>
          
          <div>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Start Prompt Engineering
            </Link>
          </div>
        </div>

      
       
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Prompt Engineering"
    >
      
      <HomepageHeader />
      
      <main>
      <div class="text--center padding-horiz--md">      
</div>
        <HomepageFeatures />
        <div class="text--center padding-horiz--md">
          
          <hr class="bg--secondary" />
          <h1 class="margin-vert--xl">Learning videos on Prompt Engineering</h1>
          <div className="container" style={{ marginBottom: "20px" }}>
            <div className="row">
            <div className={clsx("col col--6")}>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/HGDxu3kPErs" title="Advanced ChatGPT Prompt Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className={clsx("col col--6")}>
                <iframe
                  width="560"
                  height="315"
                  style={{ maxWidth: "calc(100vw - 4rem)" }}
                  src="https://www.youtube.com/embed/_v_fgW2SkkQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={clsx("col col--6")}>              
              <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/nE2skSRWTTs" title="Getting Started with GPT-3 vs. Open Source LLMs - LangChain #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
              <div className={clsx("col col--6")}>
                <iframe
                  width="560"
                  height="315"
                  style={{ maxWidth: "calc(100vw - 4rem)" }}
                  src="https://www.youtube.com/embed/zaYTXQFR0_s"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            
          </div>
        </div>
      </main>
    </Layout>
  );
}
