<?php

add_shortcode( 'calculator', 'xevoq_calculator_shortcode' );
function xevoq_calculator_shortcode( $atts ) {

  $atts = shortcode_atts( array(
    'calculator_id' => 'calculator'
  ), $atts );

  $html = '<div id="'. esc_attr($atts['calculator_id']) .'">
              <div id="calculator-testimonials" class="row">
                <div class="column size_50">
                  <div class="logo">
                    <img src="'. plugins_url( '../images/Dixons_Carphone.svg', __FILE__ ) .'" alt="Dixons_Carphone Logo" />
                  </div>
                </div>
                <div class="column size_50">
                  <h2>Success story thanks to XEVOQ</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div id="calculator-graph" class="row">
                <div class="column size_100">
                  <canvas id="myChart" width="400" height="400"></canvas>
                </div>
              </div>
              <div id="calculator-app" class="row">
                <div class="column size_50">
                  <div id="number-of-rooms">
                    <label for="_number-of-rooms"><h3>Number of rooms:</h3></label>
                    <input
                      id="_number-of-rooms"
                      type="number"
                      value="0"
                    />
                  </div>
                  <div id="average-occupancy-of-rooms">
                    <label for="_average-occupancy-of-rooms"><h3>Average occupancy of rooms:</h3></label>
                    <input
                      id="_average-occupancy-of-rooms"
                      type="number"
                      value="0"
                    />
                  </div>
                  <div id="amount-of-meetings-daily">
                    <label for="_amount-of-meetings-daily"><h3>Amount of meetings per day:</h3></label>
                    <input
                      id="_amount-of-meetings-daily"
                      type="number"
                      value="0"
                    />
                  </div>
                  <div id="price-of-rent-1sqm">
                    <label for="_price-of-rent-1sqm"><h3>Price of rent for 1 square meter:</h3></label>
                    <input
                      id="_price-of-rent-1sqm"
                      type="number"
                      value="0"
                    />
                  </div>
                  <div id="total-square-meters">
                    <label for="_total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
                    <input
                      id="_total-square-meters"
                      type="number"
                      value="0"
                    />
                  </div>
                  <div id="average-salary">
                    <label for="_average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
                    <input
                      id="_average-salary"
                      type="number"
                      value="0"
                    />
                  </div>
                </div>



                <div class="column size_50">
                  <div id="return-of-investment">
                    <label for="_return-of-investment"><h3>Return on investment / days:</h3></label>
                    <input
                      id="_return-of-investment"
                      type="number"
                    />
                  </div>
                  <div id="better-organized-meetings-savings">
                    <label for="_better-organized-meetings-savings"><h3>Yearly savings based on saved hours thanks to better organized meetings:</h3></label>
                    <input
                      id="_better-organized-meetings-savings"
                      type="number"
                    />
                  </div>
                  <div id="increased-capacity-of-meetings">
                    <label for="_increased-capacity-of-meetings"><h3>Increased capacity in % thanks to Cancel function and automated cancelling of meetings:</h3></label>
                    <input
                      id="_increased-capacity-of-meetings"
                      type="number"
                    />
                  </div>
                  <div id="savings-for-increasing-in-czk">
                    <label for="_savings-for-increasing-in-czk"><h3>Savings in CZK for increasing the capacity of meeting rooms:</h3></label>
                    <input
                      id="_savings-for-increasing-in-czk"
                      type="number"
                    />
                  </div>
                  <div id="savings-DAILY">
                    <label for="_savings-DAILY"><h3>Savings daily:</h3></label>
                    <input
                      id="_savings-DAILY"
                      type="number"
                    />
                  </div>
                  <div id="savings-MONTHLY">
                    <label for="_savings-MONTHLY"><h3>Savings monthly:</h3></label>
                    <input
                      id="_savings-MONTHLY"
                      type="number"
                    />
                  </div>
                </div>
              </div>



              <div id="calculator-email" class="row">
                  <h2>Leave us your contact informations and we will call you within next bussiness day :</h2>
                  <div class="column size_100">
                  <form>
                    <label for="email"><h3>Your e-mail:</h3></label>
                    <input
                      id="email"
                      type="email"
                      required
                    />
                    <label for="phone"><h3>Your phone number:</h3></label>
                    <input
                      id="phone"
                      type="number"
                      required
                    />
                    <label for="message"><h3>Do you want to leave us some message?</h3></label>
                    <textarea id="message"></textarea>
                    <button>Send</button>
                  </form>
                </div>
              </div>
          </div>';

  return $html;
}
