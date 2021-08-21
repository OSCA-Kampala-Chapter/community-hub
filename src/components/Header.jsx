import React from "react";

const Header = () => {
  return (
    <>
      <header class="usa-banner__header">
        <div class="usa-banner__inner">
          <div class="grid-col-auto">
            <img
              class="usa-banner__header-flag"
              src="/assets/img/us_flag_small.png"
              alt="U.S. flag"
            />
          </div>
          <div class="grid-col-fill tablet:grid-col-auto">
            <p class="usa-banner__header-text">
              An official website of the United States government
            </p>
            <p class="usa-banner__header-action" aria-hidden="true">
              Here’s how you know
            </p>
          </div>
          <button
            class="usa-accordion__button usa-banner__button"
            aria-expanded="false"
            aria-controls="gov-banner"
          >
            <span class="usa-banner__button-text">Here’s how you know</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
