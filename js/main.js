(function($, window, document) {

  let all = $('input')

  all.on('focus', event => {
    event.target.select()
  })

  // REQUIRED FIELDS :
  let numberOfRooms = $('#number-of-rooms input') // C3
  let averageOccupancyOfRooms = $('#average-occupancy-of-rooms input') // C5
  let amountOfMeetingsDaily = $('#amount-of-meetings-daily input') // C8

  // FIELDS TO BE HIDDEN :
  let priceOfRent1sqm = $('#price-of-rent-1sqm input') // C6
  let totalSquareMeters = $('#total-square-meters input') // C4
  let averageSalary = $('#average-salary input') // C7

  let returnOfInvestment = $('#return-of-investment input')
  let betterOrganizedMeetingsSavings = $('#better-organized-meetings-savings input')
  let increasedCapacityOfMeetings = $('#increased-capacity-of-meetings input')
  let savingsInCZK = $('#savings-for-increasing-in-czk input')
  let savingsDAILY = $('#savings-DAILY')
  let savingsMONTHLY = $('#savings-MONTHLY')

  let calculatorEmail = $('#calculator-email')
  let button = $('#calculator button')



  let B31 = 10,
      B33 = 12,
      B35 = 3,
      B23 = 15,
      B25 = 3,
      B27 = 6,
      B16 = 500,
      B19 = 650,
      B42 = 0,
      C8 = amountOfMeetingsDaily.val(),
      J18 = 0.25,
      J19 = C8 * J18,
      F35 = totalSquareMeters.val(),
      F37 = priceOfRent1sqm.val(),
      C3 = numberOfRooms.val(),
      F39 = (F35 * F37) / (20 * 8) / C3




  // HIDE WHAT SHOULD BE HIDDEN
  // amountOfMeetingsDaily.parent().hide()
  // priceOfRent1sqm.parent().hide()
  // totalSquareMeters.parent().hide()
  // averageSalary.parent().hide()
  //
  // returnOfInvestment.parent().hide()
  // betterOrganizedMeetingsSavings.parent().hide()
  // increasedCapacityOfMeetings.parent().hide()
  // savingsInCZK.parent().hide()

  calculatorEmail.hide()



  // SET VALUES ON INIT

  // numberOfRooms.val() > 0 ? setValue_numberOfRooms(numberOfRooms.val()) : setValue_numberOfRooms((B31 * B33) + (B23 * B25))
  totalSquareMeters.val() > 0 ? setValue_totalSquareMeters(totalSquareMeters.val()) : setValue_totalSquareMeters((B31 * B33) + (B23 * B25))
  // averageOccupancyOfRooms.val() > 0 ? setValue_averageOccupancyOfRooms(averageOccupancyOfRooms.val()) : setValue_averageOccupancyOfRooms((B35 * B33 + B27 * B25) / (B33 + B25))
  priceOfRent1sqm.val() > 0 ? setValue_priceOfRent1sqm(priceOfRent1sqm.val()) : setValue_priceOfRent1sqm(B16)
  averageSalary.val() > 0 ? setValue_averageSalary(averageSalary.val()) : setValue_averageSalary(B19)
  amountOfMeetingsDaily.val() > 0 ? setValue_amountOfMeetingsDaily(amountOfMeetingsDaily.val()) : setValue_amountOfMeetingsDaily(B42)

  // INPUT VALUES

    // number of rooms
    numberOfRooms.on('keyup mouseup', function(event) {
      let value = event.target.value

      C3 = value

      return setValue_numberOfRooms(value)
    })

    numberOfRooms.on('focusout', function() {
      if (numberOfRooms.val() === "") {
        return numberOfRooms.val(0)
      }
    })

    // total square meters
    totalSquareMeters.on('keyup mouseup', function(event) {
      let value = event.target.value

      F35 = value

      return setValue_totalSquareMeters(value)
    })

    totalSquareMeters.on('focusout', function() {
      if (totalSquareMeters.val() === "") {
        return totalSquareMeters.val(0)
      }
    })

    // average occupancy of rooms
    averageOccupancyOfRooms.on('keyup mouseup', function(event) {
      let value = event.target.value

      return setValue_averageOccupancyOfRooms(value, false)
    })

    averageOccupancyOfRooms.on('focusout', function() {
      if (averageOccupancyOfRooms.val() === "") {
        return averageOccupancyOfRooms.val(0)
      }
    })

    // price of rent for 1 square meter
    priceOfRent1sqm.on('keyup mouseup', function(event) {
      let value = event.target.value

      F37 = value

      return setValue_priceOfRent1sqm(value, false)
    })

    priceOfRent1sqm.on('focusout', function() {
      if (priceOfRent1sqm.val() === "") {
        return priceOfRent1sqm.val(0)
      }
    })

    // average salary of attendees
    averageSalary.on('keyup mouseup', function(event) {
      let value = event.target.value

      return setValue_averageSalary(value, false)
    })

    averageSalary.on('focusout', function() {
      if (averageSalary.val() === "") {
        return averageSalary.val(0)
      }
    })

    // amount of meetings daily
    amountOfMeetingsDaily.on('keyup mouseup', function(event) {
      let value = event.target.value

      C8 = value
      J19 = C8 * J18
      console.log(F35, F37, C3);


      return setValue_amountOfMeetingsDaily(value, false)
    })

    amountOfMeetingsDaily.on('focusout', function() {
      if (amountOfMeetingsDaily.val() === "") {
        return amountOfMeetingsDaily.val(0)
      }
    })



  // EXECUTE CALCULATING FUNCTIONS

  function setValue_numberOfRooms(number, def) {

    let n = parseFloat(number)

    if (def) {
      return numberOfRooms.val(C3)
    }

  }

  function setValue_totalSquareMeters(number, def) {

    let n = parseFloat(number)

    if (def) {
      return totalSquareMeters.val((B35 * B33 + B27 * B25) / (B33 + B25))
    }

  }

  function setValue_averageOccupancyOfRooms(number, def) {

    let n = parseFloat(number)

    if (def) {
      return averageOccupancyOfRooms.val((B35 * B33 + B27 * B25) / (B33 + B25))
    }

  }

  function setValue_priceOfRent1sqm(number, def) {

    let n = parseFloat(number)

    if (def) {
      return averageOccupancyOfRooms.val(B16)
    }

  }

  function setValue_averageSalary(number, def) {

    let n = parseFloat(number)

    if (def) {
      return averageSalary.val(B19)
    }

  }

  function setValue_amountOfMeetingsDaily(number, def) {

    let n = parseFloat(number)

    if (def) {
      return setValue_amountOfMeetingsDaily.val(B42)
    }

  }



  // SENDING THE EMAIL

  button.on('click', event => {
    event.preventDefault()

    let data = {
      json: {
        numberOfRooms: numberOfRooms.val(),
        averageCapacityOfRooms: averageCapacityOfRooms.val(),
        amountOfMeetingsDaily: amountOfMeetingsDaily.val(),
        priceOfRent1sqm: priceOfRent1sqm.val(),
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



  // CHART

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

}(window.jQuery, window, document));
