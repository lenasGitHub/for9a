import React from "react";

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
                    <div class="field">
                      <div class="label-field">Keywords</div>
                      <div class="field_wrap keywords">
                        <input type="text" class="input" />
                      </div>
                    </div>
                    <div class="field">
                      <div class="label-field">Activity</div>
                      <div class="field_wrap select_field">
                        <select name="tour-activity">
                          <option value="">Any</option>
                          <option value="city-tours">City Tours</option>
                          <option value="cultural-thematic-tours">
                            Cultural &amp; Thematic Tours
                          </option>
                          <option value="family-friendly-tours">
                            Family Friendly Tours
                          </option>
                          <option value="holiday-seasonal-tours">
                            Holiday &amp; Seasonal Tours
                          </option>
                          <option value="indulgence-luxury-tours">
                            Indulgence &amp; Luxury Tours
                          </option>
                          <option value="outdoor-activites">
                            Outdoor Activites
                          </option>
                          <option value="relaxation-tours">
                            Relaxation Tours
                          </option>
                          <option value="wild-adventure-tours">
                            Wild &amp; Adventure Tours
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="field">
                      <div class="label-field">Destination</div>
                      <div class="field_wrap select_field">
                        <select name="tour-activity">
                          <option value="">Any</option>
                          <option value="city-tours">City Tours</option>
                          <option value="cultural-thematic-tours">
                            Cultural &amp; Thematic Tours
                          </option>
                          <option value="family-friendly-tours">
                            Family Friendly Tours
                          </option>
                          <option value="holiday-seasonal-tours">
                            Holiday &amp; Seasonal Tours
                          </option>
                          <option value="indulgence-luxury-tours">
                            Indulgence &amp; Luxury Tours
                          </option>
                          <option value="outdoor-activites">
                            Outdoor Activites
                          </option>
                          <option value="relaxation-tours">
                            Relaxation Tours
                          </option>
                          <option value="wild-adventure-tours">
                            Wild &amp; Adventure Tours
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="field">
                      <div class="label-field">Duration</div>
                      <div class="field_wrap select_field">
                        <select name="tour-activity">
                          <option value="">Any</option>
                          <option value="city-tours">City Tours</option>
                          <option value="cultural-thematic-tours">
                            Cultural &amp; Thematic Tours
                          </option>
                          <option value="family-friendly-tours">
                            Family Friendly Tours
                          </option>
                          <option value="holiday-seasonal-tours">
                            Holiday &amp; Seasonal Tours
                          </option>
                          <option value="indulgence-luxury-tours">
                            Indulgence &amp; Luxury Tours
                          </option>
                          <option value="outdoor-activites">
                            Outdoor Activites
                          </option>
                          <option value="relaxation-tours">
                            Relaxation Tours
                          </option>
                          <option value="wild-adventure-tours">
                            Wild &amp; Adventure Tours
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="field">
                      <div class="label-field">Date</div>
                      <div class="field_wrap calendar_field">
                        <input type="text" class="calendar" />
                      </div>
                    </div>
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
