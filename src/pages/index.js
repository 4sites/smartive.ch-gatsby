import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../components/atoms';
import { CaseTeaser, Stage, Teaser } from '../components/molecules';
import { MediumTeaser, TeaserList } from '../components/organisms';
import { replaceCount } from '../utils/count';

const teasers = [
  {
    title: 'Zukunftsweisende Technologien',
    subline: 'Langjährige Erfahrung',
    description:
      'Wir verfügen über viel Erfahrung, inbesondere mit Node.js, React, Angular, D3.js, GraphQL, Symfony, .NET Core, Docker, Kubernetes und Elasticsearch.',
    link: 'https://blog.smartive.ch',
    linkText: 'Unser Blog',
  },
  {
    title: 'Ein kompetenter Ansprechpartner',
    subline: 'Ein Projekt, ein Team',
    description:
      'Ein Entwickler mit langjähriger Projektleitungserfahrung übernimmt im Projekt den Lead und garantiert die direkte Kommunikation mit viel technischem Know-How.',
    link: '/projekte',
    linkText: 'Unsere Projekte',
  },
  {
    title: 'Alle sind beteiligt',
    subline: 'Am Erfolg jedes Projektes interessiert',
    description:
      'Wir kennen keine klassischen Hierarchien. Alle sind am Erfolg jedes einzelnen Projektes beteiligt. Auch langfristig: Zwei Drittel der Belegschaft sind Aktionäre.',
    link: '/agentur',
    linkText: 'Über uns',
  },
];

const Index = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;
  const caseImage = data.allImageSharp.edges[0].node.resize.src;
  const members = data.allMembersJson.edges;

  return (<div>
    <Stage
      modifiers={['landing-page', 'left-highlighted']}
      image={{
        src: stageData.imageSrc.childImageSharp.original.src,
        alt: stageData.imageAlt,
      }}
      title={
        <h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />
      }
    >
      {stageData.contentBlocks.map(block =>
        <p key={block.id}>{ replaceCount(block.value, members.length) }</p>,
      )}
      <Button url={stageData.link} text={stageData.linkText} isPrimary />
    </Stage>

    <TeaserList>
      {teasers.map(teaser =>
        (<Teaser key={teaser.title} title={teaser.title} subline={teaser.subline}>
          <p>
            {teaser.description}
          </p>
          <Button url={teaser.link} text={teaser.linkText} isWhite hasBorder />
        </Teaser>),
      )}
    </TeaserList>

    <CaseTeaser
      modifiers={['right-highlighted', 'image-padded']}
      url="/cases/migros-shared-components"
      title="Components Library für die Migros-Welt"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Components Library für die Migros-Welt',
      }}
      allProjects
    >
      <p>
        Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen.
      </p>
    </CaseTeaser>

    <MediumTeaser posts={data.allMediumPost} />
  </div>);
};

Index.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMediumPost(limit: 2, sort: { fields: [firstPublishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          author {
            name
          }
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
    allStagesJson(filter: {siteTitle: {eq: "Index"}}) {
      edges {
        node {
          id
          siteTitle
          siteDescription
          title
          contentBlocks {
            id
            value
          }
          imageSrc {
            childImageSharp {
              original {
                src
              }
            }
          }
          imageAlt
          link
          linkText
        }
      }
    }
    allMembersJson {
      edges {
        node {
          name
        }
      }
    }
    allImageSharp(filter: {id: {regex: "/case-study-migros-msc.png/"}}) {
      edges {
        node {
          id
          resize(width: 1025) {
            src
          }
        }
      }
    }
  }
`;
