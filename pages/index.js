import React from "react";

import Layout from "../components/layout";
import Tweet from "../components/tweet";

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Sakir Tufan"
        slug="tufan_sakir"
        datetime={new Date("2021,02,10")}
        text={`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

aaaaaaaaaaaa

                     aaaaaaaaaaaaaaaaaaaaaaaaaa
              `}
      >
        <p>Hallo erste Tweet</p>
      </Tweet>
    </Layout>
  );
}

export default HomePage;
