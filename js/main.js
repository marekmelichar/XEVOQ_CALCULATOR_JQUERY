(function($, window, document) {

  let all = $('input:not(required)')

  all.on('focus', event => {
    event.target.select()
  })

  let numberOfRooms = $('#number-of-rooms')
  let averageCapacityOfRooms = $('#average-capacity-of-rooms')
  let amountOfMeetingsDaily = $('#amount-of-meetings-daily')
  let priceOfRent = $('#price-of-rent')
  let totalSquareMeters = $('#total-square-meters')
  let averageSalary = $('#average-salary')

  let returnOfInvestment = $('#return-of-investment')
  let betterOrganizedMeetingsSavings = $('#better-organized-meetings-savings')
  let increasedCapacityOfMeetings = $('#increased-capacity-of-meetings')
  let savingsInCZK = $('#savings-in-czk')

  let button = $('#calculator button')

  // set values on init
  setValue_returnOfInvestment(numberOfRooms.val(), averageCapacityOfRooms.val(), amountOfMeetingsDaily.val())


  numberOfRooms.on('keyup', function(event) {
    let value = event.target.value
    return setValue_returnOfInvestment(value, averageCapacityOfRooms.val(), amountOfMeetingsDaily.val())
  })

  averageCapacityOfRooms.on('keyup', function(event) {
    let value = event.target.value
    return setValue_returnOfInvestment(numberOfRooms.val(), value, amountOfMeetingsDaily.val())
  })

  amountOfMeetingsDaily.on('keyup', function(event) {
    let value = event.target.value
    return setValue_returnOfInvestment(numberOfRooms.val(), averageCapacityOfRooms.val(), value)
  })

  button.on('click', event => {
    event.preventDefault()

    let data = {
      json: {
        numberOfRooms: numberOfRooms.val(),
        averageCapacityOfRooms: averageCapacityOfRooms.val(),
        amountOfMeetingsDaily: amountOfMeetingsDaily.val(),
        priceOfRent: priceOfRent.val(),
        totalSquareMeters: totalSquareMeters.val(),
        averageSalary: averageSalary.val()
      }
    }

  $.get( `${window.location.href}/wp-content/plugins/XEVOQ_CALCULATOR_JQUERY/send_email.php`, data )
    .done(function(response) {
      console.log( "second success", response );
    })
    .fail(function(error) {
      console.log( "error", error );
    })
  })




  // FUNCTIONS

  function setValue_returnOfInvestment(a,b,c) {
    a = Number(a)
    b = Number(b)
    c = Number(c)

    let algo = a * b * c

    return returnOfInvestment.val(algo)
  }

}(window.jQuery, window, document));








// podle opravdove pravdy
// prezit 1993
// zodiac 2007
// temny usvit 2009
// everest 2015
// rivalove 2013


// nejzakazovanejsi filmy
// ucho 1970


















































// (function($, window, document) {
//
//   let all = $('input:not(required)')
//
//   all.on('focus', event => {
//     event.target.select()
//   })
//
//   let numberOfRooms = $('#number-of-rooms')
//   let averageCapacityOfRooms = $('#average-capacity-of-rooms')
//   let amountOfMeetingsDaily = $('#amount-of-meetings-daily')
//   let priceOfRent = $('#price-of-rent')
//   let totalSquareMeters = $('#total-square-meters')
//   let averageSalary = $('#average-salary')
//
//   let returnOfInvestment = $('#return-of-investment')
//   let betterOrganizedMeetingsSavings = $('#better-organized-meetings-savings')
//   let increasedCapacityOfMeetings = $('#increased-capacity-of-meetings')
//   let savingsInCZK = $('#savings-in-czk')
//
//   let button = $('#calculator button')
//
//   // set values on init
//   setValue_returnOfInvestment(numberOfRooms.val(), averageCapacityOfRooms.val(), amountOfMeetingsDaily.val())
//
//
//   numberOfRooms.on('keyup', function(event) {
//     let value = event.target.value
//     return setValue_returnOfInvestment(value, averageCapacityOfRooms.val(), amountOfMeetingsDaily.val())
//   })
//
//   averageCapacityOfRooms.on('keyup', function(event) {
//     let value = event.target.value
//     return setValue_returnOfInvestment(numberOfRooms.val(), value, amountOfMeetingsDaily.val())
//   })
//
//   amountOfMeetingsDaily.on('keyup', function(event) {
//     let value = event.target.value
//     return setValue_returnOfInvestment(numberOfRooms.val(), averageCapacityOfRooms.val(), value)
//   })
//
//   button.on('click', event => {
//     event.preventDefault()
//
//     let data = {
//       json: {
//         numberOfRooms: numberOfRooms.val(),
//         averageCapacityOfRooms: averageCapacityOfRooms.val(),
//         amountOfMeetingsDaily: amountOfMeetingsDaily.val(),
//         priceOfRent: priceOfRent.val(),
//         totalSquareMeters: totalSquareMeters.val(),
//         averageSalary: averageSalary.val()
//       }
//     }
//
//   $.get( `${window.location.href}/wp-content/plugins/XEVOQ_CALCULATOR/send_email.php`, data )
//     .done(function(response) {
//       console.log( "second success", response );
//     })
//     .fail(function(error) {
//       console.log( "error", error );
//     })
//   })
//
//
//
//
//   // FUNCTIONS
//
//   function setValue_returnOfInvestment(a,b,c) {
//     a = Number(a)
//     b = Number(b)
//     c = Number(c)
//
//     let algo = a * b * c
//
//     return returnOfInvestment.val(algo)
//   }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// }(window.jQuery, window, document));
//
//
//
//
//
//
//
//
// // podle opravdove pravdy
// // prezit 1993
// // zodiac 2007
// // temny usvit 2009
// // everest 2015
// // rivalove 2013
//
//
// // nejzakazovanejsi filmy
// // ucho 1970
