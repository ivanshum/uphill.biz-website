import * as React from "react"
import { graphql } from "gatsby"
import type { HeadProps, PageProps } from "gatsby"

export const query = graphql`
  query IndexPage {
    sanityPage (_id: {eq:"b6337518-d476-4b1d-88d5-348337068f1f"}) {
      title
    }
  }
`
const IndexPage = ({data}: PageProps<Queries.IndexPageQuery>) => {
  return (
    <div>
      {data.sanityPage?.title}
    </div>
  )
}

export default IndexPage

export const Head = ({data}: HeadProps<Queries.IndexPageQuery>) => <><title>{data.sanityPage?.title}</title><meta name="robots" content="noindex nofollow" /></>
