import React, { FC } from "react";

import { DUMMY_LINK } from "../../routes/index";
import GridContainer from "../../shared-components/GridContainer";
import styles from "./style.module.scss";

const links = {
  feedback: [
    { label: "Contact Us", url: DUMMY_LINK },
    { label: "Feedback", url: DUMMY_LINK },
    { label: "Reach.gov.sg", url: DUMMY_LINK }
  ],
  social: [
    { iconName: "fab fa-facebook-f", url: DUMMY_LINK },
    { iconName: "fab fa-twitter", url: DUMMY_LINK },
    { iconName: "fab fa-youtube", url: DUMMY_LINK }
  ],
  other: [
    { label: "Privacy Statement", url: DUMMY_LINK },
    { label: "Terms of Use", url: DUMMY_LINK },
    { label: "Rate this Website", url: DUMMY_LINK },
    { label: "Sitemap", url: DUMMY_LINK }
  ]
};

const PageFooter: FC<{}> = () => {
  const renderFeedbackLinks = () => {
    return links.feedback.map((link, index) => {
      return (
        <a
          key={`feedback_${index}`}
          className="font-sans text-white lg:ml-4"
          href={link.url}
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    });
  };

  const renderSocialLinks = () => {
    return links.social.map((link, index) => {
      return (
        <a
          key={`social_${index}`}
          className={`font-sans mr-4 lg:mr-0 lg:ml-4 ${styles.socialLink}`}
          href={link.url}
          rel="noopener noreferrer"
        >
          <i className={link.iconName} />
        </a>
      );
    });
  };

  const renderOtherLinks = () => {
    return links.other.map((link, index) => {
      return (
        <a
          key={`other_${index}`}
          className="font-sans text-base text-white mr-4 lg:text-sm"
          href={link.url}
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    });
  };

  return (
    <footer className="bg-blue-900 text-white py-5 mt-20">
      <GridContainer>
        <h2 className="font-sans text-white mb-5">CDKJW</h2>

        <div className="flex flex-col w-full items-start justify-center lg:flex-row lg:items-center lg:justify-end">
          {renderFeedbackLinks()}
          <div className="flex mt-4 lg:mt-0">{renderSocialLinks()}</div>
        </div>

        <div className="border-b border-white my-4" />

        <div className="flex flex-col lg:flex-row">{renderOtherLinks()}</div>

        <div className="flex justify-start lg:justify-end mt-6 mb-4">
          <div className="flex flex-col lg:flex-row text-sm">
            <span>&copy; {new Date().getFullYear()} CDKJW.&nbsp;</span>
            <span>Last Updated on 15 Jan 2020.</span>
          </div>
        </div>

        <div className="flex items-center justify-start lg:justify-center text-sm font-semibold">
          This website is optimised for IE version 10, 11, Firefox, Chrome,
          Safari.
        </div>
      </GridContainer>
    </footer>
  );
};

export default PageFooter;
