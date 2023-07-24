import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Intro from "../content/intro.mdx";
import Pianist from "../content/who-is-pianist.mdx";
import Singer from "../content/who-is-singer.mdx";
import Teacher from "../content/who-is-teacher.mdx";
import ShortBio from "../content/short-bio.mdx";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { TabSection, Tabs } from "../components/Tabs";
import { FAQGrid } from "../components/FAQGrid";
import Questions from "../content/faq.json";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page includeHeader includeFooter>
      <Section>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex-1">
            <Intro />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img src="https://via.placeholder.com/500" />
          </div>
        </div>
      </Section>
      <Section title="Who is Michael Nguyen?">
        <Tabs titles={["Pianist", "Singer", "Teacher"]}>
          {(activeTab) => {
            return (
              <>
                <TabSection active={activeTab == 0}>
                  <Pianist />
                </TabSection>
                <TabSection active={activeTab == 1}>
                  <Singer />
                </TabSection>
                <TabSection active={activeTab == 2}>
                  <Teacher />
                </TabSection>
              </>
            );
          }}
        </Tabs>
        <ShortBio />
      </Section>
      <Section title="Frequently Asked Questions">
        <div className="mx-24">
          <FAQGrid
            questions={Questions}
          />
        </div>
      </Section>
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>MNStudio</title>;
