<?php

add_shortcode( 'calculator', 'xevoq_calculator_shortcode' );
function xevoq_calculator_shortcode( $atts ) {

  $atts = shortcode_atts( array(
    'calculator_id' => 'calculator'
  ), $atts );

  // create the html
  // $html = '<div id="'. esc_attr($atts['calculator_id']) .'">';
  // $html .=  '<div class="row">';
  // $html .=    '<div class="column size_50">';
  // $html .=      '<label for="number-of-rooms"><h3>Number of rooms:</h3></label>
  //                 <input
  //                   id="number-of-rooms"
  //                   type="number"
  //                 />
  //                 <label for="average-capacity-of-rooms"><h3>Average capacity of rooms:</h3></label>
  //                 <input
  //                   id="average-capacity-of-rooms"
  //                   type="number"
  //                 />
  //                 <label for="amount-of-meetings-daily"><h3>Amount of meetings per day:</h3></label>
  //                 <input
  //                   id="amount-of-meetings-daily"
  //                   type="number"
  //                 />
  //                 <label for="price-of-rent"><h3>Price of rent for 1 square meter:</h3></label>
  //                 <input
  //                   id="price-of-rent"
  //                   type="number"
  //                 />
  //                 <label for="total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
  //                 <input
  //                   id="total-square-meters"
  //                   type="number"
  //                 />
  //                 <label for="average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
  //                 <input
  //                   id="average-salary"
  //                   type="number"
  //                 />';
  // $html .=    '</div>';
  // $html .=    '<div class="column size_50">';
  // $html .=    '<label for="return-of-investment"><h3>Return on investment / days:</h3></label>
  //               <input
  //                 id="return-of-investment"
  //                 type="text"
  //               />
  //               <label for="better-organized-meetings-savings"><h3>Yearly savings based on saved hours thanks to better organized meetings:</h3></label>
  //               <input
  //                 id="better-organized-meetings-savings"
  //                 type="text"
  //               />
  //               <label for="increased-capacity-of-meetings"><h3>Increased capacity in % thanks to Cancel function and automated cancelling of meetings:</h3></label>
  //               <input
  //                 id="increased-capacity-of-meetings"
  //                 type="text"
  //               />
  //               <label for="savings-in-czk"><h3>Savings in CZK for increasing the capacity of meeting rooms:</h3></label>
  //               <input
  //                 id="savings-in-czk"
  //                 type="text"
  //               />';
  // $html .=    '</div>';
  // $html .=  '</div>';
  // $html .= '</div>';





  $html = '<div id="'. esc_attr($atts['calculator_id']) .'">
              <div class="row">
                <div class="column size_50">
                  <label for="number-of-rooms"><h3>Number of rooms:</h3></label>
                  <input
                    id="number-of-rooms"
                    type="number"
                    value="10"
                  />
                  <label for="average-capacity-of-rooms"><h3>Average capacity of rooms:</h3></label>
                  <input
                    id="average-capacity-of-rooms"
                    type="number"
                    value="8"
                  />
                  <label for="amount-of-meetings-daily"><h3>Amount of meetings per day:</h3></label>
                  <input
                    id="amount-of-meetings-daily"
                    type="number"
                    value="6"
                  />
                  <label for="price-of-rent"><h3>Price of rent for 1 square meter:</h3></label>
                  <input
                    id="price-of-rent"
                    type="number"
                    value="500"
                  />
                  <label for="total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
                  <input
                    id="total-square-meters"
                    type="number"
                    value="700"
                  />
                  <label for="average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
                  <input
                    id="average-salary"
                    type="number"
                    value="600"
                  />
                </div>



                <div class="column size_50">
                  <label for="return-of-investment"><h3>Return on investment / days:</h3></label>
                  <input
                    id="return-of-investment"
                    type="number"
                  />
                  <label for="better-organized-meetings-savings"><h3>Yearly savings based on saved hours thanks to better organized meetings:</h3></label>
                  <input
                    id="better-organized-meetings-savings"
                    type="number"
                  />
                  <label for="increased-capacity-of-meetings"><h3>Increased capacity in % thanks to Cancel function and automated cancelling of meetings:</h3></label>
                  <input
                    id="increased-capacity-of-meetings"
                    type="number"
                  />
                  <label for="savings-in-czk"><h3>Savings in CZK for increasing the capacity of meeting rooms:</h3></label>
                  <input
                    id="savings-in-czk"
                    type="number"
                  />
                </div>
              </div>



              <div class="row">
                <div class="column size_100">
                  <h2>Leave us your contact informations and we will call you within next bussiness day :</h2>
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
