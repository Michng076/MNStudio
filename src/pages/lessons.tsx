import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { TabSection, Tabs } from "../components/Tabs";
import VoiceLessons from "../content/voice-lessons.mdx";
import PianoLessons from "../content/piano-lessons.mdx";

const LessonsPage: React.FC<PageProps> = () => {
  return (
    <Page includeFooter includeHeader>
      <Section title="Lessons">
        <Tabs titles={["Voice Lessons", "Piano Lessons"]}>
          {(activeTab) => {
            return (
              <>
                <TabSection active={activeTab == 0}>
                  <VoiceLessons />
                </TabSection>
                <TabSection active={activeTab == 1}>
                  <PianoLessons />
                </TabSection>
              </>
            );
          }}
        </Tabs>
      </Section>
    </Page>
  );
};

export default LessonsPage;
export const Head: HeadFC = () => <title>MNStudio</title>;
