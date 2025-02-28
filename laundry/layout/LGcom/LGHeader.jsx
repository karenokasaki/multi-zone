export const LGHeader = () => {
  return (
    <div className="container-fluid">
      <div className="skip_nav row">
        <a
          href="#lgContents"
          data-link-area="gnb-skip_to_contents"
          data-link-name=""
        >
          Skip to Contents
        </a>
        <a href="#lgAccHelp">Skip to Accessibility Help</a>
      </div>
      {/* DC-790 / data-obs-multishop */}
      <header
        className="navigation b2c"
        data-login-check="https://sso.us.lg.com/oauth/token_info"
        data-cart-check="https://www.lg.com/graphql"
        data-store="us"
        data-obs-multishop="Y"
      >
        {/* Promotion Bar */}
        {/* <section
          className="content-title active"
          id="promotionHeader"
          style={{ display: "flex" }}
        >
          <div className="promotion-info">
            <div className="inner">
              <div className="content-title">
                <div className="field-block">
                  <div className="text" style={{ paddingTop: 5 }}>
                    Welcome to a new era of OLED: Preorder the G4 or C4 TV today
                  </div>
                  <a
                    href="https://www.lg.com/us/collections/oled-tv-preorder-deals"
                    className="btn btn-primary"
                    style={{ width: "auto", paddingTop: 10 }}
                    data-ms-event="lgEvent"
                    data-ms-action="pencilbanner - preordernow"
                    data-ms-label="preordernow-oled-tv-preorder-deals"
                  >
                    PREORDER NOW
                  </a>
                </div>
              </div>
            </div>
            <a href="#" aria-label="close" id="holidayPromoClose" />
          </div>
        </section> */}
        <div className="row for-desktop">
          <div className="size">
            <div className="logo">
              <a
                href="https://www.lg.com/us"
                data-link-area="gnb_brand_identity"
                data-link-name=""
              >
                <img
                  src="https://media.us.lg.com/transform/6c7ea0f8-5f94-4fc3-a8fe-18ad05ac2205/lg_logo"
                  alt="LG logo (Life's Good)"
                />
              </a>
            </div>
            <div className="links">
              {/* LGEUS-630 Start */}
              <div className="navi-btm" role="navigation" aria-label="Main">
                {/* LGEUS-630 End */}
                {/* PJTWAUS-1 Start */}
                <div className="pc-scroll-left">
                  <a href="#" className="anchor">
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
                {/*// PJTWAUS-1 End */}
                <div
                  className="left-btm"
                  itemScope=""
                  itemType="http://www.schema.org/SiteNavigationElement"
                >
                  <ul className="depth1">
                    <li className="depth1-holder">
                      <div className="scroll">
                        <ul className="depth2">
                          <li>
                            <a
                              href="#"
                              aria-expanded="false"
                              id="gnbCategoryNV00000025"
                              data-id="gnbNV00000025"
                              data-link-area="gnb-b2c_primary_navigation_items"
                              data-link-name="Shop"
                              role="button"
                              aria-label="Shop"
                            >
                              <span>Shop</span>
                            </a>
                            <div
                              className="sublayer"
                              id="gnbNV00000025"
                              role="region"
                              aria-labelledby="gnbCategoryNV00000025"
                            >
                              <div className="sublayer-inner">
                                <div className="sublayer-header">Shop</div>
                                <div className="close">
                                  <a href="#">
                                    <span className="sr-only">
                                      Close the category navigation menu
                                    </span>
                                  </a>
                                </div>
                                <ul className="nav nav-pills row">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV00000048"
                                      data-id="gnbNV00000048"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="appliances"
                                      data-tab-name="#gnbCategoryAppliances"
                                      className="active"
                                    >
                                      Appliances
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV00000025"
                                      data-id="gnbNV00000025"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="tv__home_theater"
                                      data-tab-name="#gnbCategoryTVHomeTheater"
                                    >
                                      TV &amp; Home Theater
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV00000085"
                                      data-id="gnbNV00000085"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="monitors__laptops"
                                      data-tab-name="#gnbCategoryMonitorsLaptops"
                                    >
                                      Monitors &amp; Laptops
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV01100370"
                                      data-id="gnbNV01100370"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="audio"
                                      data-tab-name="#gnbCategoryAudio"
                                    >
                                      Audio
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV01100850"
                                      data-id="gnbNV01100850"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="accessories"
                                      data-tab-name="#gnbCategoryAccessories"
                                    >
                                      Accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV01101100"
                                      data-id="gnbNV01101100"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="deals"
                                      data-tab-name="#gnbCategoryDeals"
                                    >
                                      Deals
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tab"
                                      id="gnbCategoryNV01100562"
                                      data-id="gnbNV01100562"
                                      data-link-area="gnb-b2c_primary_navigation_items"
                                      data-link-name="home_upgrades"
                                      data-tab-name="#gnbCategoryHomeUpgrades"
                                    >
                                      Home Upgrades
                                    </a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div
                                    className="tab-pane active"
                                    id="gnbCategoryAppliances"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/refrigerators"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="refrigerators"
                                            >
                                              Refrigerators
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/top-freezer-refrigerators"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="top_freezer"
                                            >
                                              Top Freezer
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/bottom-freezer-refrigerators"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="bottom_freezer"
                                            >
                                              Bottom Freezer
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/french-door-refrigerators"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="french_door"
                                            >
                                              French Door
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/side-by-side-refrigerators"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="side-by-side"
                                            >
                                              Side-by-Side
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/dishwashers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="dishwashers"
                                            >
                                              Dishwashers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/front-control-dishwashers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="front_control"
                                            >
                                              Front Control
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/top-control-dishwashers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="top_control"
                                            >
                                              Top Control
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/cooking-appliances"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="cooking_appliances"
                                            >
                                              Cooking Appliances
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/ranges"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="ranges"
                                            >
                                              Ranges
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/wall-ovens"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="wall_ovens"
                                            >
                                              Wall Ovens
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/cooktops"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="cooktops"
                                            >
                                              Cooktops
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/range-hoods"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="hoods"
                                            >
                                              Hoods
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/microwave-ovens"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="microwave_ovens"
                                            >
                                              Microwave Ovens
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/washers-dryers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="washers_&_dryers"
                                            >
                                              Washers &amp; Dryers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/washers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="washers"
                                            >
                                              Washers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/dryers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="dryers"
                                            >
                                              Dryers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/washer-dryer-combos"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="washer_dryer_combos"
                                            >
                                              Washer Dryer Combos
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/lg-studio"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lg_studio"
                                            >
                                              LG STUDIO
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.signaturekitchensuite.com/us"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="signature_kitchen_suite"
                                              target="_blank"
                                              title="Opens in a new window"
                                            >
                                              <span className="visually-hidden">
                                                Opens in a new window
                                              </span>
                                              Signature Kitchen Suite
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions/best-sellers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="best_sellers"
                                            >
                                              Best Sellers
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/styler-steam-closet"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="styler_steam_closet"
                                            >
                                              Styler Steam Closet
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/vacuum-cleaners"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="vacuum_"
                                            >
                                              Vacuum{" "}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/air-purifiers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="air_purifiers"
                                            >
                                              Air Purifiers
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/dehumidifiers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="dehumidifiers"
                                            >
                                              Dehumidifiers
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/air-conditioners"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="air_conditioners"
                                            >
                                              Air Conditioners
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/window-air-conditioners"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="window_air_conditioners"
                                            >
                                              Window Air Conditioners
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/portable-air-conditioners"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="portable_air_conditioners"
                                            >
                                              Portable Air Conditioners
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/wall-air-conditioners"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="wall_air_conditioners"
                                            >
                                              Wall Air Conditioners
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/appliance-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="appliances_accessories"
                                            >
                                              Appliances Accessories
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/kitchen-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="kitchen_"
                                            >
                                              Kitchen{" "}
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/refrigerator-filters"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="refrigerator_filters"
                                            >
                                              Refrigerator Filters
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/laundry-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="laundry"
                                            >
                                              Laundry
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/home-appliance-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="other"
                                            >
                                              Other
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="#"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="deals_&_promotions"
                                            >
                                              Deals &amp; Promotions
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/top-appliance-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="top_deals"
                                            >
                                              Top Deals
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/kitchen-appliance-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="kitchen"
                                            >
                                              Kitchen
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/laundry-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="laundry"
                                            >
                                              Laundry
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions#CT10000091"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="other"
                                            >
                                              Other
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/appliance-installation-haul-away"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="installation_&_haul-away_included"
                                            >
                                              Installation &amp; Haul-Away
                                              Included
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/home-appliance-rebates"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="rebates"
                                            >
                                              Rebates
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="#"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="explore"
                                            >
                                              Explore
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/home-electrification"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="home_electrification"
                                            >
                                              Home Electrification
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/home-electrification/heat-pump"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="heat_pump_technology"
                                            >
                                              Heat Pump Technology
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/home-electrification/what-is-induction-cooking"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="induction_technology"
                                            >
                                              Induction Technology
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="gnbCategoryTVHomeTheater"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="tvs"
                                            >
                                              TVs
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/oled-evo-tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="oled_evo"
                                            >
                                              OLED evo
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/oled-tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="oled"
                                            >
                                              OLED
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/qned-tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="qned"
                                            >
                                              QNED
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/uhd-4k-tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="4k_uhd"
                                            >
                                              4K UHD
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/nanocell-tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="nanocell_"
                                            >
                                              NanoCell{" "}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/lifestyle-products"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lifestyle_screens"
                                            >
                                              Lifestyle Screens
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/projectors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="projectors"
                                            >
                                              Projectors
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/sound-bars"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="soundbars"
                                            >
                                              Soundbars
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/collections/dolby-atmos-sound-bars"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="dolby_atmos_soundbars"
                                            >
                                              Dolby Atmos Soundbars
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/blu-ray-dvd-players"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="blu-ray_&_dvd_players"
                                            >
                                              Blu-ray &amp; DVD Players
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/tv-audio-video-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="tv_&_home_theater_accessories"
                                            >
                                              TV &amp; Home Theater Accessories
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions/tv-audio-video-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="deals_&_promotions_"
                                            >
                                              Deals &amp; Promotions{" "}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="gnbCategoryMonitorsLaptops"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/laptops"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="laptops"
                                            >
                                              Laptops
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/lg-gram-notebook-laptops"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lg_gram_notebooks"
                                            >
                                              LG gram Notebooks
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/lg-gram-2in1-laptops"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lg_gram_2in1"
                                            >
                                              LG gram 2in1
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/lg-gram-style-notebook-laptops"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lg_gram_style_notebooks"
                                            >
                                              LG gram Style Notebooks
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/lg-ultrapc-notebook-laptops"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lg_ultrapc_notebooks"
                                            >
                                              LG UltraPC Notebooks
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/laptops/windows-11"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="windows_11"
                                            >
                                              Windows 11
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="consumer_monitors"
                                            >
                                              Consumer Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/gaming-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="ultragear™_gaming_monitors"
                                            >
                                              UltraGear™ Gaming Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/ultrawide-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="ultrawide™_widescreen_monitors"
                                            >
                                              UltraWide™ Widescreen Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/4k-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="ultrafine™_5k_/_4k_uhd_monitors"
                                            >
                                              UltraFine™ 5K / 4K UHD Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/smart-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="myview_smart_monitors"
                                            >
                                              MyView Smart Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/lifestyle-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="lifestyle_monitors"
                                            >
                                              Lifestyle Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/qhd-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="qhd_monitors"
                                            >
                                              QHD Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/fhd-monitors"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="full_hd_monitors"
                                            >
                                              Full HD Monitors
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/monitor-tvs"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="monitor_tv"
                                            >
                                              Monitor TV
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/burners-drives"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="burners_&_drives"
                                            >
                                              Burners &amp; Drives
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/computer-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="monitor_&_laptop_accessories"
                                            >
                                              Monitor &amp; Laptop Accessories
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions/computer-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="deals_&_promotions"
                                            >
                                              Deals &amp; Promotions
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="gnbCategoryAudio"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/sound-bars"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="soundbars"
                                            >
                                              Soundbars
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/collections/dolby-atmos-sound-bars"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="dolby_atmos_soundbars"
                                            >
                                              Dolby Atmos Soundbars
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/wireless-headphones"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="wireless_headphones"
                                            >
                                              Wireless Headphones
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/wireless-earbuds"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="earbuds"
                                            >
                                              Earbuds
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/wireless-headphones"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="neckbands"
                                            >
                                              Neckbands
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/speakers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="speakers"
                                            >
                                              Speakers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/wireless-bluetooth-speakers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="portable_speakers"
                                            >
                                              Portable Speakers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/gaming-speakers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="gaming_speakers"
                                            >
                                              Gaming Speakers
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/speakers"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="party_speakers"
                                            >
                                              Party Speakers
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="deals_&_promotions"
                                            >
                                              Deals &amp; Promotions
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="gnbCategoryAccessories"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/appliance-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="appliances_accessories"
                                            >
                                              Appliances Accessories
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/kitchen-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="kitchen_accessories"
                                            >
                                              Kitchen Accessories
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/refrigerator-filters"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="refrigerator_water_filters"
                                            >
                                              Refrigerator Water Filters
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/laundry-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="laundry_accessories"
                                            >
                                              Laundry Accessories
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/home-appliance-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="air care and vacuum accessories"
                                            >
                                              Air&nbsp;Care&nbsp;and&nbsp;Vacuum&nbsp;Accessories
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/tv-audio-video-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="tv_&_home_theater_accessories"
                                            >
                                              TV &amp; Home Theater Accessories
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/computer-accessories"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="computing_accessories"
                                            >
                                              Computing Accessories
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="gnbCategoryDeals"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="#"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="appliance_deals"
                                            >
                                              Appliance Deals
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/top-appliance-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="top_deals"
                                            >
                                              Top Deals
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/kitchen-appliance-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="kitchen"
                                            >
                                              Kitchen
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/laundry-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="laundry"
                                            >
                                              Laundry
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions#CT10000091"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="other_appliances"
                                            >
                                              Other Appliances
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/appliance-installation-haul-away"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="install_and_haul_away_included"
                                            >
                                              Install and Haul Away Included
                                            </a>
                                          </li>
                                          <li className="link">
                                            <a
                                              href="https://www.lg.com/us/promotions/home-appliance-rebates"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="rebates"
                                            >
                                              Rebates
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions/tv-audio-video-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="tv_&_home_theater_deals"
                                            >
                                              TV &amp; Home Theater Deals
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions/computer-deals"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="monitor_&_laptop_deals"
                                            >
                                              Monitor &amp; Laptop Deals
                                            </a>
                                          </li>
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="audio_deals"
                                            >
                                              Audio Deals
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/promotions"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="all_deals"
                                            >
                                              All Deals
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="gnbCategoryHomeUpgrades"
                                  >
                                    <div className="row">
                                      <div className="col-md-2 section1">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/residential-hvac"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="heating_&_air_conditioning_products"
                                            >
                                              Heating &amp; Air Conditioning
                                              Products
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section2">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.signaturekitchensuite.com/us"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="built-in_kitchen_appliances"
                                              target="_blank"
                                              title="Opens in a new window"
                                            >
                                              <span className="visually-hidden">
                                                Opens in a new window
                                              </span>
                                              Built-in Kitchen Appliances
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section3">
                                        <ul className="nav flex-column">
                                          <li className="head-link">
                                            <a
                                              href="https://www.lg.com/us/home-electrification"
                                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                                              data-link-name="home_electrification"
                                            >
                                              Home Electrification
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-md-2 section4">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section5">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section6">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section7">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section8">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section9">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                      <div className="col-md-2 section10">
                                        <ul className="nav flex-column"></ul>
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                  </div>
                                </div>
                                {/* tab-content */}
                                <div
                                  className="icon-links"
                                  role="navigation"
                                  aria-label="Utility"
                                >
                                  <div className="left-top">
                                    <a
                                      href="https://www.lg.com/us/lg-signature"
                                      data-link-area="gnb-lg_brand_logo"
                                      data-link-name="lg_signature"
                                    >
                                      <img
                                        src="https://www.lg.com/us/images/gnb/LG_Signature.svg"
                                        alt="LG Signature Logo"
                                      />
                                    </a>
                                    <a
                                      href="https://www.lg.com/us/lg-thinq"
                                      data-link-area="gnb-lg_brand_logo"
                                      data-link-name="lg_thinq"
                                    >
                                      <img
                                        src="https://www.lg.com/us/images/gnb/LG_ThinQ.svg"
                                        alt="LG ThinQ logo "
                                      />
                                    </a>
                                  </div>
                                  <div className="right-top">
                                    <a
                                      href="https://b2bmkt.lge.com/lgprobuilder"
                                      data-link-area="gnb-lg_brand_logo"
                                    >
                                      <img
                                        className="happiness-logo"
                                        src="https://media.us.lg.com/transform/888d1c0e-3537-433e-8eaa-dcc5e3cfc5ed/GNB-Pro-Builder-2-Logo"
                                        alt="B2C_logo1"
                                      />
                                    </a>
                                    <a
                                      href="https://www.lg.com/us/ces2024"
                                      data-link-area="gnb-lg_brand_logo"
                                    >
                                      <img
                                        className="ces2024-logo"
                                        src="https://media.us.lg.com/transform/077d58b8-ea03-4d61-8317-662c4eb2ca27/lg_ces"
                                        alt="B2C_logo2"
                                      />
                                    </a>
                                  </div>
                                </div>
                                {/* sublayer-inner */}
                              </div>
                              {/* sublayer */}
                            </div>
                          </li>
                          <li>
                            <a
                              href="https://www.lg.com/us/support"
                              className="toggle-btn"
                              aria-expanded="false"
                              id="gnbCategoryNV00000098"
                              data-id="gnbNV00000098"
                              data-link-area="gnb-b2c_primary_navigation_items"
                              data-link-name="support"
                            >
                              Support
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.lg.com/us/business"
                              className="toggle-btn"
                              aria-expanded="false"
                              id="gnbCategoryNV00000025"
                              data-id="gnbNV00000025"
                              data-link-area="gnb-b2c_primary_navigation_items"
                              data-link-name="business"
                            >
                              Business
                            </a>
                          </li>
                        </ul>
                        <div className="scroll-right">
                          <a href="#">
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      {/* scroll */}
                    </li>
                    {/* depth1-holder */}
                  </ul>
                  <div className="tablet-layer" />
                </div>
                {/* PJTWAUS-1 Start */}
                <div className="pc-scroll-right">
                  <a href="#" className="anchor">
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {/*// PJTWAUS-1 End */}
                <div className="right-btm">
                  <div
                    className="icon-links"
                    role="navigation"
                    aria-label="Utility"
                  >
                    {/* LGEUS-630 End */}
                    <div className="left-top">
                      <a
                        href="https://www.lg.com/us/lg-signature"
                        data-link-area="gnb-lg_brand_logo"
                        data-link-name="lg_signature"
                      >
                        <img
                          src="https://www.lg.com/us/images/gnb/LG_Signature.svg"
                          alt="LG Signature Logo"
                        />
                      </a>
                      <a
                        href="https://www.lg.com/us/lg-thinq"
                        data-link-area="gnb-lg_brand_logo"
                        data-link-name="lg_thinq"
                      >
                        <img
                          src="https://www.lg.com/us/images/gnb/LG_ThinQ.svg"
                          alt="LG ThinQ logo "
                        />
                      </a>
                    </div>
                    <div className="right-top">
                      {/* <a href="https://www.lg.com/us/business"  data-link-area="gnb-business_toggle" data-link-name="business">Business</a>  */}
                      {/* 								<a href="http://www.lgexperiencehappiness.com/"> */}
                      {/* 									<img class="happiness-logo" src="https://www.lg.com/lg5-common/images/common/header/logo-experience-happiness.png" alt=""> */}
                      <a
                        href="https://b2bmkt.lge.com/lgprobuilder"
                        data-link-area="gnb-lg_brand_logo"
                      >
                        <img
                          className="happiness-logo"
                          src="https://media.us.lg.com/transform/888d1c0e-3537-433e-8eaa-dcc5e3cfc5ed/GNB-Pro-Builder-2-Logo"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.lg.com/us/ces2024"
                        data-link-area="gnb-lg_brand_logo"
                      >
                        <img
                          className="ces2024-logo"
                          src="https://media.us.lg.com/transform/077d58b8-ea03-4d61-8317-662c4eb2ca27/lg_ces"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="search">
                    <div
                      className="model-search modal fade"
                      id="modal_search"
                      tabIndex={-1}
                      role="dialog"
                      data-backdrop="true"
                    >
                      <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="modal-close"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <div className="modal-header">
                            <strong className="head">
                              What can we help you find today?
                            </strong>
                          </div>
                          <div className="modal-body">
                            <div className="b2b-search" role="search">
                              <div className="b2b-search-input">
                                <input
                                  type="text"
                                  name="search"
                                  className="input"
                                  placeholder="Search LG"
                                  data-predictive-url="https://www.lg.com/us/search/ajax/gnbSearch"
                                  autoComplete="off"
                                  maxLength={27}
                                />
                                <input
                                  type="hidden"
                                  id="reactFrameWorkFlag"
                                  className="b2b-search"
                                  defaultValue="Y"
                                />
                                <div className="b2b-search-icons">
                                  <div className="b2b-search-cancel">
                                    <a href="#" role="button">
                                      <span className="sr-only">Clear</span>
                                    </a>
                                  </div>
                                  <div className="b2b-search-submit">
                                    <a
                                      href="#"
                                      className="submit"
                                      role="button"
                                    >
                                      <span className="sr-only">Search</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pre-search active">
                                <div className="b2b-history-container active">
                                  <div className="b2b-history">
                                    <div className="b2b-search-header history">
                                      SEARCH HISTORY
                                    </div>
                                    <a
                                      className="b2b-search-clear btn"
                                      role="button"
                                      tabIndex={0}
                                    >
                                      CLEAR HISTORY
                                    </a>
                                  </div>
                                  <div className="b2b-suggestion-results">
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=water%20heaters"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>water heaters</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=pedestal"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>pedestal</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=aerotower"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>aerotower</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=simroom"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>simroom</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=washer"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>washer</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=a529"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>a529</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=aer"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="Search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>aer</span>
                                      </a>
                                      <a
                                        href="#"
                                        role="button"
                                        className="b2b-suggestion-cancel"
                                      >
                                        <span className="sr-only">Close</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="b2b-popular-searches-container">
                                  <div className="b2b-search-header popular-searches">
                                    Popular Searches
                                  </div>
                                  <div className="b2b-suggestion-results">
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=42lx3qpua"
                                        role="button"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>
                                          <i>42lx3qpua</i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=lt1000p3"
                                        role="button"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>
                                          <i>lt1000p3</i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="b2b-suggestion-results-list-item">
                                      <a
                                        href="/us/shopping/search?q=lt120p3"
                                        role="button"
                                        className="b2b-suggestion-results-item-name"
                                      >
                                        <img
                                          alt="search"
                                          className="b2b-suggestion-search"
                                          src="/lg5-common/images/common/icons/search-nero.svg"
                                        />
                                        <span>
                                          <i>lt120p3</i>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="b2b-search-help">
                                  <div className="b2b-search-header help">
                                    Can we help?
                                  </div>
                                  <ul>
                                    <li>
                                      <a
                                        href="https://www.lg.com/us/support"
                                        role="button"
                                        className="link-text"
                                      >
                                        Product Support
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://lg-chatbot.com/web/us?locale=en_US"
                                        role="button"
                                        className="link-text"
                                      >
                                        Online Chat
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.lg.com/us/support/email-appointment"
                                        role="button"
                                        className="link-text"
                                      >
                                        Email Support
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="loading">
                                <img
                                  data-lazy="https://www.lg.com/lg5-common/images/common/loading-circle-text.gif"
                                  alt="Loading..."
                                  src="https://www.lg.com/lg5-common/images/common/loading-circle-text.gif"
                                />
                              </div>
                              <div className="search-success">
                                <div className="result-items-container">
                                  <div className="b2b-search-header success">
                                    Our Products
                                  </div>
                                  <div className="result-items" />
                                </div>
                                <div className="search-success-suggestions active">
                                  <div className="b2b-search-header suggestions">
                                    MORE SEARCH SUGGESTIONS
                                  </div>
                                  <div className="b2b-suggestion-results" />
                                </div>
                                <div className="search-success-product-support">
                                  <div className="b2b-search-header suggestions">
                                    Need Product Support
                                  </div>
                                  <div className="b2b-suggestion-results" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="icons">
                    <div className="b2b-search">
                      <a
                        href="#"
                        role="button"
                        className="gnb-search-form"
                        aria-label="Open Search"
                      >
                        <span className="sr-only">Search</span>
                      </a>
                    </div>
                    <div className="login">
                      <a href="#" role="button" aria-label="Open My LG">
                        <span className="sr-only">My LG</span>
                      </a>
                      <div className="gnb-login">
                        <div className="before-login">
                          <ul>
                            <li>
                              <a
                                href="https://www.lg.com/us/mylg/login"
                                className="before-login"
                                data-link-area="gnb-utility_menu"
                                data-link-name="sign_in_/_sign_up"
                              >
                                Sign In / Sign Up
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/mylg/product-registration"
                                data-link-area="gnb-utility_menu"
                                data-link-name="register_a_product"
                                title="Opens in a new window"
                              >
                                Register a Product
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/rewards/referral"
                                data-link-area="gnb-utility_menu"
                                title="Opens in a new window"
                              >
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "2fr 1fr",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "inherit",
                                      lineHeight: "inherit",
                                      fontFamily: "inherit",
                                      padding: "inherit",
                                      textAlign: "left",
                                    }}
                                  >
                                    Refer a Friend
                                  </span>
                                  <span
                                    style={{
                                      padding: 0,
                                      background: "#A50034",
                                      color: "#FFF",
                                      borderRadius: "1rem",
                                      fontSize: "0.8125rem",
                                      letterSpacing: "0.01rem",
                                      marginLeft: "1rem",
                                      textDecoration: "none",
                                      textAlign: "center",
                                      fontFamily: "system-ui",
                                      fontWeight: "bold",
                                      lineHeight: "inherit",
                                    }}
                                  >
                                    NEW
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/shop/sales/guest/form/"
                                data-link-area="gnb-utility_menu"
                                data-link-name="order_look_up"
                              >
                                Order Look Up
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="after-login">
                          <div className="welcome">
                            Welcome&nbsp;
                            <span className="name" />
                          </div>
                          <ul>
                            <li>
                              <a
                                href="https://www.lg.com/us/mylg"
                                data-link-area="gnb-utility_menu"
                                data-link-name="my_lg"
                              >
                                My LG
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/shop/sales/order/history"
                                data-link-area="gnb-utility_menu"
                                data-link-name="my_orders"
                              >
                                My Orders
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/mylg/wish-products"
                                data-link-area="gnb-utility_menu"
                                data-link-name="my_wishlist"
                              >
                                My Wishlist
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/mylg/product-registration"
                                data-link-area="gnb-utility_menu"
                                data-link-name="register_a_product"
                                title="Opens in a new window"
                              >
                                Register a Product
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/rewards/referral"
                                data-link-area="gnb-utility_menu"
                                title="Opens in a new window"
                              >
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "2fr 1fr",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "inherit",
                                      lineHeight: "inherit",
                                      fontFamily: "inherit",
                                      padding: "inherit",
                                      textAlign: "left",
                                    }}
                                  >
                                    Refer a Friend
                                  </span>
                                  <span
                                    style={{
                                      padding: 0,
                                      background: "#A50034",
                                      color: "#FFF",
                                      borderRadius: "1rem",
                                      fontSize: "0.8125rem",
                                      letterSpacing: "0.01rem",
                                      marginLeft: "1rem",
                                      textDecoration: "none",
                                      textAlign: "center",
                                      fontFamily: "system-ui",
                                      fontWeight: "bold",
                                      lineHeight: "inherit",
                                    }}
                                  >
                                    NEW
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.lg.com/us/mylg/logout"
                                data-link-area="gnb-utility_menu"
                                data-link-name="sign_out"
                              >
                                Sign out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="cart">
                      <a
                        href="https://www.lg.com/us/checkout/cart"
                        data-link-area="gnb-utility_menu"
                        data-link-name="cart"
                      >
                        <span className="sr-only">
                          item successfully added to
                        </span>
                        <span className="sr-only">Cart</span>
                        <span className="count" />
                        <span className="sr-only">item in cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row for-mobile">
          {/* 
		<div class="top-menu">
			<ul>
				<li class="active"><a href="https://www.lg.com/us" data-link-area="gnb-business_toggle" data-link-name="consumer"><span>Consumer</span></a></li>
				<li><a href="https://www.lg.com/us/business" data-link-area="gnb-business_toggle" data-link-name="business"><span>Business</span></a></li>
			</ul>
		</div>
		*/}
          <div className="nav-wrap">
            <div className="logo">
              <a href="https://www.lg.com/us">
                <img
                  src="https://media.us.lg.com/transform/6c7ea0f8-5f94-4fc3-a8fe-18ad05ac2205/lg_logo"
                  data-link-area="gnb_brand_identity"
                  data-link-name=""
                  alt="LG logo"
                />
              </a>
            </div>
            <div className="mobile-options">
              <div className="right">
                <div className="icons">
                  <div className="search">
                    <a href="#" role="button" aria-label="Open Search">
                      <span className="sr-only">Search</span>
                    </a>
                    <div className="gnb-search-layer">
                      <form
                        className="gnb-search-form"
                        method="get"
                        type="external"
                        action="/us/search"
                        autoComplete="off"
                        role="search"
                      >
                        <input type="hidden" name="type" defaultValue="B2C" />
                        <input
                          type="hidden"
                          name="siteType"
                          defaultValue="MKT"
                        />
                        <input
                          type="hidden"
                          name="adobeSearchType"
                          defaultValue="gnb"
                        />
                        <div className="search-input">
                          <label
                            className="sr-only"
                            htmlFor="gnb_search_tit_mobile"
                          >
                            Search LG
                          </label>
                          <input
                            type="text"
                            name="search"
                            className="input"
                            placeholder="Mobile Search LG"
                            title="Mobile Search LG"
                            data-predictive-url="https://www.lg.com/us/search/ajax/gnbSearch"
                            autoComplete="off"
                            aria-owns="gnb-search-result-layer-mobile"
                            id="gnb_search_tit_mobile"
                          />
                        </div>
                        <div
                          className="search-result-layer"
                          id="gnb-search-result-layer-mobile"
                        ></div>
                        <div className="search-submit">
                          <input
                            type="image"
                            className="submit"
                            data-link-area="gnb-utility_menu"
                            data-link-name="search"
                            alt="Search"
                            src="https://www.lg.com/lg5-common/images/common/icons/search-nero.svg"
                          />
                        </div>
                      </form>
                      <div className="search-close">
                        <a href="#" role="button" aria-label="Close Search">
                          <span className="sr-only">Close</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="login">
                    <a
                      href="https://www.lg.com/us/mylg/login"
                      className="before-login"
                      role="button"
                      aria-label="Open My LG"
                    >
                      <span className="sr-only">My LG</span>
                    </a>
                    <a
                      href="#welcomeB2C"
                      className="after-login"
                      role="button"
                      aria-label="Open My LG"
                    >
                      <span className="sr-only">Welcome</span>
                    </a>
                  </div>
                  <div className="cart">
                    <a
                      href="https://www.lg.com/us/checkout/cart"
                      data-link-area="gnb-utility_menu"
                      data-link-name="cart"
                    >
                      <span className="sr-only">
                        item successfully added to
                      </span>
                      <span className="sr-only">Cart</span>
                      <span className="count" />
                      <span className="sr-only">item in cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu">
                <a
                  href="#"
                  data-link-area="gnb-hamburger_menu"
                  data-link-name=""
                  role="button"
                  aria-label="Open Menu"
                >
                  <span className="line line1" />
                  <span className="line line2" />
                  <span className="line line3" />
                  <span className="sr-only">Menu</span>
                </a>
                <div className="menu-wrap">
                  {/* DC-1661 Start */}
                  <ul className="depth1-m active" id="gnbB2C">
                    <li className="super active">
                      <a
                        href="#gnbshopM"
                        data-link-area="gnb-b2c_primary_navigation_items"
                        data-link-name="shop"
                        aria-expanded="true"
                        role="button"
                        aria-label="Open Shop"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="super">
                      <a
                        href="https://www.lg.com/us/support"
                        data-link-area="gnb-business_toggle"
                        data-link-name="support"
                      >
                        Support
                      </a>
                    </li>
                    <li className="super">
                      <a
                        href="https://www.lg.com/us/business"
                        data-link-area="gnb-business_toggle"
                        data-link-name="business"
                      >
                        Business
                      </a>
                    </li>
                  </ul>
                  <ul className="top-link active">
                    <li className="lgsignature">
                      <a
                        href="https://www.lg.com/us/lg-signature"
                        data-link-area="gnb-lg_brand_logo"
                        data-link-name="lg_signature"
                      >
                        <img
                          src="https://www.lg.com/us/images/gnb/LG_Signature.svg"
                          alt="LG Signature Logo"
                        />
                      </a>
                    </li>
                    <li className="lgthinq">
                      <a
                        href="https://www.lg.com/us/lg-thinq"
                        data-link-area="gnb-lg_brand_logo"
                        data-link-name="lg_thinq"
                      >
                        <img
                          src="https://www.lg.com/us/images/gnb/LG_ThinQ.svg"
                          alt="LG ThinQ logo "
                        />
                      </a>
                    </li>
                    {/* 							<a href="http://www.lgexperiencehappiness.com/"> */}
                    {/* 								<img class="happiness-logo" src="https://www.lg.com/lg5-common/images/common/header/logo-experience-happiness.png" alt=""> */}
                    <li>
                      <a
                        href="https://b2bmkt.lge.com/lgprobuilder"
                        data-link-area="gnb-lg_brand_logo"
                      >
                        <img
                          className="ces2024-logo"
                          src="https://media.us.lg.com/transform/888d1c0e-3537-433e-8eaa-dcc5e3cfc5ed/GNB-Pro-Builder-2-Logo"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.lg.com/us/ces2024"
                        data-link-area="gnb-lg_brand_logo"
                      >
                        <img
                          className="ces2024-logo"
                          src="https://media.us.lg.com/transform/077d58b8-ea03-4d61-8317-662c4eb2ca27/lg_ces"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="sublayer-m main active" id="gnbshopM">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to Shop">
                        <span>Shop</span>
                      </a>
                    </div>
                    <li className="type1">
                      <ul className="depth2-m">
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV00000048M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="appliances"
                            role="button"
                            aria-label="Open Appliances"
                          >
                            Appliances
                          </a>
                        </li>
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV00000025M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="tv_&_home_theater"
                            role="button"
                            aria-label="Open TV & Home Theater"
                          >
                            TV &amp; Home Theater
                          </a>
                        </li>
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV00000085M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="monitors_&_laptops"
                            role="button"
                            aria-label="Open Monitors & Laptops"
                          >
                            Monitors &amp; Laptops
                          </a>
                        </li>
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV01100370M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="audio"
                            role="button"
                            aria-label="Open Audio"
                          >
                            Audio
                          </a>
                        </li>
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV01100850M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="accessories"
                            role="button"
                            aria-label="Open Accessories"
                          >
                            Accessories
                          </a>
                        </li>
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV01101100M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="deals"
                            role="button"
                            aria-label="Open Deals"
                          >
                            Deals
                          </a>
                        </li>
                        <li className="type2 sections1">
                          <a
                            href="#gnbNV01100562M"
                            data-link-area="gnb-b2c_primary_navigation_items"
                            data-link-name="home_upgrades"
                            role="button"
                            aria-label="Open Home Upgrades"
                          >
                            Home Upgrades
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                  {/* mobile sub menu */}
                  <div className="sublayer-m" id="gnbNV00000048M">
                    <div className="back">
                      <a
                        href="#gnbNV00000048M"
                        role="button"
                        aria-label="Back to Appliances"
                      >
                        <span className="">Back to Appliances</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/refrigerators"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="refrigerators"
                            >
                              Refrigerators
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/top-freezer-refrigerators"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="top_freezer"
                                >
                                  Top Freezer
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/bottom-freezer-refrigerators"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="bottom_freezer"
                                >
                                  Bottom Freezer
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/french-door-refrigerators"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="french_door"
                                >
                                  French Door
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/side-by-side-refrigerators"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="side-by-side"
                                >
                                  Side-by-Side
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/dishwashers"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="dishwashers"
                            >
                              Dishwashers
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/front-control-dishwashers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="front_control"
                                >
                                  Front Control
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/top-control-dishwashers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="top_control"
                                >
                                  Top Control
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/cooking-appliances"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="cooking_appliances"
                            >
                              Cooking Appliances
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/ranges"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="ranges"
                                >
                                  Ranges
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/wall-ovens"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="wall_ovens"
                                >
                                  Wall Ovens
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/cooktops"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="cooktops"
                                >
                                  Cooktops
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/range-hoods"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="hoods"
                                >
                                  Hoods
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/microwave-ovens"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="microwave_ovens"
                                >
                                  Microwave Ovens
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section4">
                            <a
                              href="https://www.lg.com/us/washers-dryers"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="washers_&_dryers"
                            >
                              Washers &amp; Dryers
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/washers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="washers"
                                >
                                  Washers
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/dryers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="dryers"
                                >
                                  Dryers
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/washer-dryer-combos"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="washer_dryer_combos"
                                >
                                  Washer Dryer Combos
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section5">
                            <a
                              href="https://www.lg.com/us/lg-studio"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="lg_studio"
                            >
                              LG STUDIO
                            </a>
                          </li>
                          <li className="type2 section5">
                            <a
                              href="https://www.signaturekitchensuite.com/us"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="signature_kitchen_suite"
                            >
                              Signature Kitchen Suite
                            </a>
                          </li>
                          <li className="type2 section5">
                            <a
                              href="https://www.lg.com/us/promotions/best-sellers"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="best_sellers"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li className="type2 section6">
                            <a
                              href="https://www.lg.com/us/styler-steam-closet"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="styler_steam_closet"
                            >
                              Styler Steam Closet
                            </a>
                          </li>
                          <li className="type2 section6">
                            <a
                              href="https://www.lg.com/us/vacuum-cleaners"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="vacuum_"
                            >
                              Vacuum{" "}
                            </a>
                          </li>
                          <li className="type2 section7">
                            <a
                              href="https://www.lg.com/us/air-purifiers"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="air_purifiers"
                            >
                              Air Purifiers
                            </a>
                          </li>
                          <li className="type2 section7">
                            <a
                              href="https://www.lg.com/us/dehumidifiers"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="dehumidifiers"
                            >
                              Dehumidifiers
                            </a>
                          </li>
                          <li className="type2 section7">
                            <a
                              href="https://www.lg.com/us/air-conditioners"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="air_conditioners"
                            >
                              Air Conditioners
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/window-air-conditioners"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="window_air_conditioners"
                                >
                                  Window Air Conditioners
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/portable-air-conditioners"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="portable_air_conditioners"
                                >
                                  Portable Air Conditioners
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/wall-air-conditioners"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="wall_air_conditioners"
                                >
                                  Wall Air Conditioners
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section8">
                            <a
                              href="https://www.lg.com/us/appliance-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="appliances_accessories"
                            >
                              Appliances Accessories
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/kitchen-accessories"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="kitchen_"
                                >
                                  Kitchen{" "}
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/refrigerator-filters"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="refrigerator_filters"
                                >
                                  Refrigerator Filters
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/laundry-accessories"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="laundry"
                                >
                                  Laundry
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/home-appliance-accessories"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="other"
                                >
                                  Other
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section9">
                            <a
                              href="#"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="deals_&_promotions"
                            >
                              Deals &amp; Promotions
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/top-appliance-deals"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="top_deals"
                                >
                                  Top Deals
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/kitchen-appliance-deals"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="kitchen"
                                >
                                  Kitchen
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/laundry-deals"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="laundry"
                                >
                                  Laundry
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions#CT10000091"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="other"
                                >
                                  Other
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/appliance-installation-haul-away"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="installation_&_haul-away_included"
                                >
                                  Installation &amp; Haul-Away Included
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/home-appliance-rebates"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="rebates"
                                >
                                  Rebates
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section10">
                            <a
                              href="#"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="explore"
                            >
                              Explore
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/home-electrification"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="home_electrification"
                                >
                                  Home Electrification
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/home-electrification/heat-pump"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="heat_pump_technology"
                                >
                                  Heat Pump Technology
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/home-electrification/what-is-induction-cooking"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="induction_technology"
                                >
                                  Induction Technology
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV00000025M">
                    <div className="back">
                      <a
                        href="#gnbNV00000025M"
                        role="button"
                        aria-label="Back to TV & Home Theater"
                      >
                        <span className="">Back to TV &amp; Home Theater</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="tvs"
                            >
                              TVs
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/oled-evo-tvs"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="oled_evo"
                                >
                                  OLED evo
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/oled-tvs"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="oled"
                                >
                                  OLED
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/qned-tvs"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="qned"
                                >
                                  QNED
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/uhd-4k-tvs"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="4k_uhd"
                                >
                                  4K UHD
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/nanocell-tvs"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="nanocell_"
                                >
                                  NanoCell{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/lifestyle-products"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="lifestyle_screens"
                            >
                              Lifestyle Screens
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/projectors"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="projectors"
                            >
                              Projectors
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/sound-bars"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="soundbars"
                            >
                              Soundbars
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/collections/dolby-atmos-sound-bars"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="dolby_atmos_soundbars"
                            >
                              Dolby Atmos Soundbars
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/blu-ray-dvd-players"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="blu-ray_&_dvd_players"
                            >
                              Blu-ray &amp; DVD Players
                            </a>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/tv-audio-video-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="tv_&_home_theater_accessories"
                            >
                              TV &amp; Home Theater Accessories
                            </a>
                          </li>
                          <li className="type2 section4">
                            <a
                              href="https://www.lg.com/us/promotions/tv-audio-video-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="deals_&_promotions_"
                            >
                              Deals &amp; Promotions{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV00000085M">
                    <div className="back">
                      <a
                        href="#gnbNV00000085M"
                        role="button"
                        aria-label="Back to Monitors & Laptops"
                      >
                        <span className="">Back to Monitors &amp; Laptops</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/laptops"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="laptops"
                            >
                              Laptops
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/lg-gram-notebook-laptops"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="lg_gram_notebooks"
                                >
                                  LG gram Notebooks
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/lg-gram-2in1-laptops"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="lg_gram_2in1"
                                >
                                  LG gram 2in1
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/lg-gram-style-notebook-laptops"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="lg_gram_style_notebooks"
                                >
                                  LG gram Style Notebooks
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/lg-ultrapc-notebook-laptops"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="lg_ultrapc_notebooks"
                                >
                                  LG UltraPC Notebooks
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/laptops/windows-11"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="windows_11"
                            >
                              Windows 11
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="consumer_monitors"
                            >
                              Consumer Monitors
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/gaming-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="ultragear™_gaming_monitors"
                                >
                                  UltraGear™ Gaming Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/ultrawide-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="ultrawide™_widescreen_monitors"
                                >
                                  UltraWide™ Widescreen Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/4k-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="ultrafine™_5k_/_4k_uhd_monitors"
                                >
                                  UltraFine™ 5K / 4K UHD Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/smart-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="myview_smart_monitors"
                                >
                                  MyView Smart Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/lifestyle-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="lifestyle_monitors"
                                >
                                  Lifestyle Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/qhd-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="qhd_monitors"
                                >
                                  QHD Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/fhd-monitors"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="full_hd_monitors"
                                >
                                  Full HD Monitors
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/monitor-tvs"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="monitor_tv"
                                >
                                  Monitor TV
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/burners-drives"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="burners_&_drives"
                            >
                              Burners &amp; Drives
                            </a>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/computer-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="monitor_&_laptop_accessories"
                            >
                              Monitor &amp; Laptop Accessories
                            </a>
                          </li>
                          <li className="type2 section4">
                            <a
                              href="https://www.lg.com/us/promotions/computer-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="deals_&_promotions"
                            >
                              Deals &amp; Promotions
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV01100370M">
                    <div className="back">
                      <a
                        href="#gnbNV01100370M"
                        role="button"
                        aria-label="Back to Audio"
                      >
                        <span className="">Back to Audio</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/sound-bars"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="soundbars"
                            >
                              Soundbars
                            </a>
                          </li>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/collections/dolby-atmos-sound-bars"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="dolby_atmos_soundbars"
                            >
                              Dolby Atmos Soundbars
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/wireless-headphones"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="wireless_headphones"
                            >
                              Wireless Headphones
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/wireless-earbuds"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="earbuds"
                                >
                                  Earbuds
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/wireless-headphones"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="neckbands"
                                >
                                  Neckbands
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/speakers"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="speakers"
                            >
                              Speakers
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/wireless-bluetooth-speakers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="portable_speakers"
                                >
                                  Portable Speakers
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/gaming-speakers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="gaming_speakers"
                                >
                                  Gaming Speakers
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/speakers"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="party_speakers"
                                >
                                  Party Speakers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section4">
                            <a
                              href="https://www.lg.com/us/promotions"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="deals_&_promotions"
                            >
                              Deals &amp; Promotions
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV01100850M">
                    <div className="back">
                      <a
                        href="#gnbNV01100850M"
                        role="button"
                        aria-label="Back to Accessories"
                      >
                        <span className="">Back to Accessories</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/appliance-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="appliances_accessories"
                            >
                              Appliances Accessories
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/kitchen-accessories"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="kitchen_accessories"
                                >
                                  Kitchen Accessories
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/refrigerator-filters"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="refrigerator_water_filters"
                                >
                                  Refrigerator Water Filters
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/laundry-accessories"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="laundry_accessories"
                                >
                                  Laundry Accessories
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/home-appliance-accessories"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="air care and vacuum accessories"
                                >
                                  Air&nbsp;Care&nbsp;and&nbsp;Vacuum&nbsp;Accessories
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/tv-audio-video-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="tv_&_home_theater_accessories"
                            >
                              TV &amp; Home Theater Accessories
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/computer-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="computing_accessories"
                            >
                              Computing Accessories
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV01101100M">
                    <div className="back">
                      <a
                        href="#gnbNV01101100M"
                        role="button"
                        aria-label="Back to Deals"
                      >
                        <span className="">Back to Deals</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="#"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="appliance_deals"
                            >
                              Appliance Deals
                            </a>
                            <ul>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/top-appliance-deals"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="top_deals"
                                >
                                  Top Deals
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/kitchen-appliance-deals"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="kitchen"
                                >
                                  Kitchen
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/laundry-deals"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="laundry"
                                >
                                  Laundry
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions#CT10000091"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="other_appliances"
                                >
                                  Other Appliances
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/appliance-installation-haul-away"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="install_and_haul_away_included"
                                >
                                  Install and Haul Away Included
                                </a>
                              </li>
                              <li className="type3">
                                <a
                                  href="https://www.lg.com/us/promotions/home-appliance-rebates"
                                  data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                                  data-link-name="rebates"
                                >
                                  Rebates
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/promotions/tv-audio-video-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="tv_&_home_theater_deals"
                            >
                              TV &amp; Home Theater Deals
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/promotions/computer-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="monitor_&_laptop_deals"
                            >
                              Monitor &amp; Laptop Deals
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.lg.com/us/promotions"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="audio_deals"
                            >
                              Audio Deals
                            </a>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/promotions"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="all_deals"
                            >
                              All Deals
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV01100562M">
                    <div className="back">
                      <a
                        href="#gnbNV01100562M"
                        role="button"
                        aria-label="Back to Home Upgrades"
                      >
                        <span className="">Back to Home Upgrades</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <ul>
                          <li className="type2 section1">
                            <a
                              href="https://www.lg.com/us/residential-hvac"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="heating_&_air_conditioning_products"
                            >
                              Heating &amp; Air Conditioning Products
                            </a>
                          </li>
                          <li className="type2 section2">
                            <a
                              href="https://www.signaturekitchensuite.com/us"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="built-in_kitchen_appliances"
                            >
                              Built-in Kitchen Appliances
                            </a>
                          </li>
                          <li className="type2 section3">
                            <a
                              href="https://www.lg.com/us/home-electrification"
                              data-link-area="gnb-b2c_exposed_mega_nav-category_link"
                              data-link-name="home_electrification"
                            >
                              Home Electrification
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* type1 */}
                    </ul>
                  </div>
                  <div className="sublayer-m" id="gnbNV00000048M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m"></ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div className="sublayer-m" id="gnbNV00000025M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/tvs"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="tvs"
                        >
                          TVs
                        </a>
                        <ul>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/oled-evo-tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="oled_evo"
                            >
                              OLED evo
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/oled-tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="oled"
                            >
                              OLED
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/qned-tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="qned"
                            >
                              QNED
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/uhd-4k-tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="4k_uhd"
                            >
                              4K UHD
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/nanocell-tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="nanocell_"
                            >
                              NanoCell{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/lifestyle-products"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="lifestyle_screens"
                        >
                          Lifestyle Screens
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/projectors"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="projectors"
                        >
                          Projectors
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/sound-bars"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="soundbars"
                        >
                          Soundbars
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/collections/dolby-atmos-sound-bars"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="dolby_atmos_soundbars"
                        >
                          Dolby Atmos Soundbars
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/blu-ray-dvd-players"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="blu-ray_&_dvd_players"
                        >
                          Blu-ray &amp; DVD Players
                        </a>
                        <ul></ul>
                      </li>
                    </ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div className="sublayer-m" id="gnbNV00000085M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/laptops"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="laptops"
                        >
                          Laptops
                        </a>
                        <ul>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/lg-gram-notebook-laptops"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="lg_gram_notebooks"
                            >
                              LG gram Notebooks
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/lg-gram-2in1-laptops"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="lg_gram_2in1"
                            >
                              LG gram 2in1
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/lg-gram-style-notebook-laptops"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="lg_gram_style_notebooks"
                            >
                              LG gram Style Notebooks
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/lg-ultrapc-notebook-laptops"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="lg_ultrapc_notebooks"
                            >
                              LG UltraPC Notebooks
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/laptops/windows-11"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="windows_11"
                        >
                          Windows 11
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/monitors"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="consumer_monitors"
                        >
                          Consumer Monitors
                        </a>
                        <ul>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/gaming-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="ultragear™_gaming_monitors"
                            >
                              UltraGear™ Gaming Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/ultrawide-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="ultrawide™_widescreen_monitors"
                            >
                              UltraWide™ Widescreen Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/4k-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="ultrafine™_5k_/_4k_uhd_monitors"
                            >
                              UltraFine™ 5K / 4K UHD Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/smart-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="myview_smart_monitors"
                            >
                              MyView Smart Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/lifestyle-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="lifestyle_monitors"
                            >
                              Lifestyle Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/qhd-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="qhd_monitors"
                            >
                              QHD Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/fhd-monitors"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="full_hd_monitors"
                            >
                              Full HD Monitors
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/monitor-tvs"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="monitor_tv"
                            >
                              Monitor TV
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div className="sublayer-m" id="gnbNV01100370M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/sound-bars"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="soundbars"
                        >
                          Soundbars
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/collections/dolby-atmos-sound-bars"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="dolby_atmos_soundbars"
                        >
                          Dolby Atmos Soundbars
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/wireless-headphones"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="wireless_headphones"
                        >
                          Wireless Headphones
                        </a>
                        <ul>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/wireless-earbuds"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="earbuds"
                            >
                              Earbuds
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/wireless-headphones"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="neckbands"
                            >
                              Neckbands
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div className="sublayer-m" id="gnbNV01100850M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/appliance-accessories"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="appliances_accessories"
                        >
                          Appliances Accessories
                        </a>
                        <ul>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/kitchen-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="kitchen_accessories"
                            >
                              Kitchen Accessories
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/refrigerator-filters"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="refrigerator_water_filters"
                            >
                              Refrigerator Water Filters
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/laundry-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="laundry_accessories"
                            >
                              Laundry Accessories
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/home-appliance-accessories"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="air care and vacuum accessories"
                            >
                              Air&nbsp;Care&nbsp;and&nbsp;Vacuum&nbsp;Accessories
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/tv-audio-video-accessories"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="tv_&_home_theater_accessories"
                        >
                          TV &amp; Home Theater Accessories
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/computer-accessories"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="computing_accessories"
                        >
                          Computing Accessories
                        </a>
                        <ul></ul>
                      </li>
                    </ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div className="sublayer-m" id="gnbNV01101100M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <span className="no-link">Appliance Deals</span>
                        <ul>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/promotions/top-appliance-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="top_deals"
                            >
                              Top Deals
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/promotions/kitchen-appliance-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="kitchen"
                            >
                              Kitchen
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/promotions/laundry-deals"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="laundry"
                            >
                              Laundry
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/promotions#CT10000091"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="other_appliances"
                            >
                              Other Appliances
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/promotions/appliance-installation-haul-away"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="install_and_haul_away_included"
                            >
                              Install and Haul Away Included
                            </a>
                          </li>
                          <li className="type3">
                            <a
                              href="https://www.lg.com/us/promotions/home-appliance-rebates"
                              data-link-area="gnb-b2c_exposed_mega_nav-subcategory_link"
                              data-link-name="rebates"
                            >
                              Rebates
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/promotions/tv-audio-video-deals"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="tv_&_home_theater_deals"
                        >
                          TV &amp; Home Theater Deals
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/promotions/computer-deals"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="monitor_&_laptop_deals"
                        >
                          Monitor &amp; Laptop Deals
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/promotions"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="audio_deals"
                        >
                          Audio Deals
                        </a>
                        <ul></ul>
                      </li>
                    </ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div className="sublayer-m" id="gnbNV01100562M">
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type1">
                        <a
                          href="https://www.lg.com/us/residential-hvac"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="heating_&_air_conditioning_products"
                        >
                          Heating &amp; Air Conditioning Products
                        </a>
                        <ul></ul>
                      </li>
                      <li className="type1">
                        <a
                          href="https://www.signaturekitchensuite.com/us"
                          data-link-area="gnb-b2c_exposed_mega_nav-supercategory_link"
                          data-link-name="built-in_kitchen_appliances"
                        >
                          Built-in Kitchen Appliances
                        </a>
                        <ul></ul>
                      </li>
                    </ul>
                    <div className="back">
                      <a href="#" role="button" aria-label="Back to main menu">
                        <span className="sr-only">Back to main menu</span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="sublayer-m active"
                    id="gnbproductsupportM"
                    role="button"
                    aria-label="Open Product Support"
                  >
                    <div className="back">
                      <a
                        href="#"
                        role="button"
                        aria-label="Back to Product Support"
                      >
                        <span className="">Product Support</span>
                      </a>
                    </div>
                    <ul className="depth2-m">
                      <li className="type2 section1">
                        <ul></ul>
                      </li>
                    </ul>
                  </div>
                  {/* DC-1661 End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* // component (navigation) */}
      {/* // breadcrumb */}
      <div
        role="navigation"
        aria-label="Breadcrumb"
        className="breadcrumb"
        style={{ display: "none" }}
      >
        {" "}
        {/* LGEUS-631 */}
        <ul itemScope="" itemType="http://schema.org/BreadcrumbList">
          <li
            itemProp="itemListElement"
            itemScope=""
            itemType="http://schema.org/ListItem"
          >
            <a
              href="/us"
              itemProp="item"
              data-link-area="gnb-breadcrumb"
              data-link-name="home"
            >
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content={1} />
            <span className="breadcrumb-space">/</span>
          </li>
          <li aria-current="page">
            {" "}
            {/* LGEUS-631 */}
            <strong>Home Electrification</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};
