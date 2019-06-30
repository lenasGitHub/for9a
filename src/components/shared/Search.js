import React from "react";

import TextFieldGroup from "./UI/input/TextFieldGroup";
import SelectFieldGroup from "./UI/input/SelectFieldGroup";

import ShareIcon from "./common/ShareIcon";
export function Search(props) {
  return (
    <section class="search-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="search-area__content">
              <div class="search-area__content--title">
                <h3>Search for Opportunity</h3>
              </div>
              <div class="desc-wrap search-area__content--form">
                <div class="fields__block u-margin-bottom-small">
                  <div class="fields">
                    <TextFieldGroup
                      placeholder="Enter Keywords"
                      name="keywords"
                      type="text"
                      label="Keywords"
                      customClassName="keywords"
                    />

                    <SelectFieldGroup label="Specialties" name="Specialties" />
                    <SelectFieldGroup
                      label="REOpportunity"
                      name="REOpportunity"
                    />
                    <SelectFieldGroup label="Opportunity Type" name="Type" />

                    <TextFieldGroup
                      placeholder="Enter Date"
                      name="Date"
                      type="Date"
                      label="Date"
                      customClassName="calendar_field"
                    />
                  </div>
                  <button class="submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
