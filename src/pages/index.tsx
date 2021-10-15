import { graphql } from 'gatsby';
import React from "react";
import { Grid } from "../assets/styles/Grid";
import RecentlyPublished from '../components/RecentlyPublished';
import Seo from '../components/seo';

const App: React.FC = ({data}: any) => {

  return (
    <Grid cols="2fr 1fr">
      <Seo title="Home"/>
      <RecentlyPublished data={data} />
    </Grid>
  )
}

export default App;

export const query = graphql`
  query posts {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//posts//" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 120)
          ...postQuery
        }
      }
    }
  }
`