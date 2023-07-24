import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { TabSection, Tabs } from "../components/Tabs";
import BioContent1 from "../content/bio/section1.mdx";
import BioContent2 from "../content/bio/section2.mdx";
import BioContent3 from "../content/bio/section3.mdx";
import BioContent4 from "../content/bio/section4.mdx";
import BioContent5 from "../content/bio/section5.mdx";

const BioSection: React.FC<{img: any, content: React.ReactNode, flip?: boolean}> = ({ img, content, flip }) => {
    const left = flip ? <div className="flex flex-1 items-center justify-center"><img src={img} /></div> : <div className="flex-1">{content}</div>;
    const right =  !flip ? <div className="flex flex-1 items-center justify-center"><img src={img} /></div> : <div className="flex-1">{content}</div>;

    return (
      <div className={`flex flex-col items-center justify-center md:flex-row`}>
        {left}
        {right}
      </div>
    );
};

const BioPage: React.FC<PageProps> = () => {
  return (
    <Page includeFooter includeHeader>
      <Section title="About Michael Nguyen">
        <BioSection img="https://via.placeholder.com/300" content={<BioContent1 />} />
        <BioSection img="https://via.placeholder.com/300" content={<BioContent2 />} flip />
        <BioSection img="https://via.placeholder.com/300" content={<BioContent3 />} />
        <BioSection img="https://via.placeholder.com/300" content={<BioContent4 />} flip />
        <BioSection img="https://via.placeholder.com/300" content={<BioContent5 />} />
      </Section>
    </Page>
  );
};

export default BioPage;
export const Head: HeadFC = () => <title>MNStudio</title>;
