import React from 'react';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms And Conditions</h1>
      <div className="terms-breadcrumb">
        <a href="/" className="terms-breadcrumb-link">Home</a> / Terms And Conditions
      </div>
      
      <p className="last-updated">Last Updated: 01.01.2023</p>
      
      <section className="terms-section">
        <p>
          These terms and conditions (the "Terms") govern your access to and use of Sane Infotech's website. By accessing or using the Site, you are agreeing to these Terms and entering into a legally binding contract with Sane Infotech. It is important that you read carefully and understand the Terms. Do not access or use the Site if you are unwilling or unable to be bound by the Terms. Any references to "you" and "your" refer to you, as a user of the Site. References to "we", "us" and "our" refer to Sane Infotech.
        </p>
<br/>
        <h2 className="terms-subtitle">1. CHANGES TO THE TERMS AND CONDITIONS</h2>
        <p>
          We may modify the Terms from time to time. When changes are made, we will update the date at the top of this page. You should revisit these Terms on a regular basis as revised versions will be binding on you. Any such modification will be effective upon our posting of new Terms. You understand and agree that your continued access to or use of the Site after any posted modification to the Terms indicates your acceptance of the modification.
        </p>

        <br/>

        <h2 className="terms-subtitle">2. USING THE SITE</h2>
        <ol className="terms-list">
          <li>
            <strong>Permission to Use the Site:</strong> We grant you permission to use the Site subject to the restrictions in these Terms. We may terminate your permission to use the Site for any conduct that we consider to be inappropriate, or for your breach of these Terms, including the Restrictions listed in paragraph 4. Your use of the Site is at your own risk.
          </li>
          <li>
            <strong>Site Availability:</strong> The Site may be modified, updated at any time whenever we want.
          </li>
          <li>
            <strong>User Accounts:</strong> You don't need to register yourself to browse our website. But maybe, we will allow users to register theirselves to provide better facilities in future.
          </li>
        </ol>

        <br/>

        <h2 className="terms-subtitle">3. CONTENT</h2>
        <ol className="terms-list">
          <li>
            <strong>Responsibility for Your Content:</strong> You alone are responsible for the content of your messages, and you agree to indemnify and hold harmless Sane Infotech and our agents with respect to any claim based upon the transmission of your message(s). We reserve the right to remove any messages for any or no reason whatsoever.
          </li>
          <li>
            <strong>Ownership:</strong> All material on the Site, including, but not limited to, text, data, graphics, logos, button icons, images, audio clips, video clips, links, digital downloads, data compilations, and software is owned, purchased or controlled by, or licensed to Sane Infotech and is protected by copyright, trademark, and other intellectual property rights.
          </li>
        </ol>

        <br/>

        <h2 className="terms-subtitle">4. RESTRICTIONS</h2>
        <ol className="terms-list">
          <li>
            You agree not to, and will not assist, encourage, or enable others to use the Site to:
            <ul className="terms-sublist">
              <li>Send any message that is knowingly false and/or defamatory, inaccurate, abusive, vulgar, obscene, profane, hateful, harassing, sexually oriented, threatening, invasive of anyone's privacy, or otherwise in violation of any law;</li>
              <li>Send any message in violation of a third party's copyright or other intellectual property or proprietary rights;</li>
              <li>Send bulk emails, surveys, or other mass messaging whether commercial in nature or not;</li>
              <li>Solicit, request or collect personal information for commercial or unlawful purposes;</li>
            </ul>
          </li>
        </ol>

        <br/>

        <h2 className="terms-subtitle">5. SERVICE/PRODUCT(S) TERMS</h2>
        <ol className="terms-list">
          <li>Maximum number of changes in the project by the client (before finalising the Design) is 3.</li>
          <li>After the Design is finalised by the Client, no changes will be made.</li>
          <li>Sane Infotech will do the exact works as directed by the client, no change in anything.</li>
          <li>30% money refund is possible within the 3 days after starting the project.</li>
          <li>Database charges will be paid from the Client side, no involvement of Sane Infotech for Database payments & maintenance.</li>
        </ol>

        <h2 className="terms-subtitle">USE OF GOOGLE ANALYTICS</h2>
        <p>
          The Site uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyse how users use the site. The information generated by the cookie about your use of the Site (including your IP address) will be transmitted to and stored by Google on servers in the United States.
        </p>
      </section>
    </div>
  );
};

export default Terms;

/* Inline CSS */
const styles = `
  .terms-container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1.5rem;
    font-family: Arial, sans-serif;
  }
  
  .terms-title {
    margin-top: 5rem;
    font-size: 2rem;
    font-weight: bold;
    color: #4b0082;
  }
  
  .terms-breadcrumb {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }
  
  .terms-breadcrumb-link {
    color: #4b0082;
    text-decoration: none;
  }
  
  .terms-breadcrumb-link:hover {
    text-decoration: underline;
  }
  
  .last-updated {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .terms-section {
    margin-bottom: 2rem;
  }
  
  .terms-subtitle {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #4b0082;
  }
  
  .terms-list {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .terms-sublist {
    list-style-type: lower-alpha;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
  }
`;

// Append styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
