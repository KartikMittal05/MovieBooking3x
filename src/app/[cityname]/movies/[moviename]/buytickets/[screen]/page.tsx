"use client"
import React from 'react'
import './SelectSeat.css'

const page = () => {
  const movie = {
    moviename: 'Jawan',
    date: new Date(),
    language: 'Hindi',
    type: 'Action/Thriller',
    screens: [
      {
        name: 'Screen 1',
        location: 'PVR Cineams,Forum Mall,Koramangala'
      },
      {
        name: 'Screen 2',
        location: 'PVR Cineams,Forum Mall,Koramangala'
      },
      {
        name: 'Screen 3',
        location: 'PVR Cineams,Forum Mall,Koramangala'
      }
    ]
  }
  const screen = {
    name: 'Screen 1',
    location: 'PVR Cineams,Forum Mall,Koramangala',
    timeslots: [//multiple time slots
      {

        time: '10:00 AM',
        seats: [
          // 3 seats platinum ,gold ,silver
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
        ]
      },
      {

        time: '10:00 AM',
        seats: [
          // 3 seats platinum ,gold ,silver
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
        ]
      },
      {

        time: '10:00 AM',
        seats: [
          // 3 seats platinum ,gold ,silver
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
        ]
      },
      {

        time: '10:00 AM',
        seats: [
          // 3 seats platinum ,gold ,silver
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
          {
            type: 'platinum',
            rows: [
              // 3 rows with rowname and cols
              {
                rowname: 'H',
                cols: [
                  //seats 10 with type,status,seat_id
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '5'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '6'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '7'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '8'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '9'
                      },
                      {
                        type: 'seat',
                        status: 'not-available',
                        seat_id: '10'
                      }
                    ]
                  }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              },
              {
                rowname: 'H',
                cols: [{
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                },
                {
                  seats: [
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '1'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '2'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '3'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '4'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '5'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '6'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '7'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '8'
                    },
                    {
                      type: 'seat',
                      status: 'available',
                      seat_id: '9'
                    },
                    {
                      type: 'seat',
                      status: 'not-available',
                      seat_id: '10'
                    }
                  ]
                }
                ]
              }
            ], price: 500
          },
        ]
      }
    ]
  }

  const generateSeatLayout = () => {
    const x = screen.timeslots.findIndex((t: any) => t.time === selectedTime.time)
    return screen.timeslots[x].seats.map((seatType, index) => (
      <div className="seat-type" key={index}>
        <h2>{seatType.type}- Rs. {seatType.price}</h2>

        <div className="seat-rows">
          {
            seatType.rows.map((row, rowIndex) => (
              <div className="seat-row" key={rowIndex}>
                <p className="rowname">{row.rowname}</p>

                <div className="seat-cols">
                  {
                    row.cols.map((col, colIndex) => (
                      <div className="seat-cols" key={colIndex}>
                        {
                          col.seats.map((seat, seatIndex) => (
                            <div key={seatIndex}>

                              {
                                seat.status === 'available' &&
                                <span className='seat-available'>
                                  {seatIndex + 1}
                                </span>
                              }
                               {
                                seat.status === 'not-available' &&
                                <span className='seat-unavailable'>
                                  {seatIndex + 1}
                                </span>
                              }
                            </div>
                          ))
                        }

                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    ))

  }
  const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])


  const [selectedSeats, setSelectedSeats] = React.useState<any[]>([0])
  const selectedeselectseat=(seat:any)=>{
    
  }

  return (
    <div className="selectseatpage">
      <div className='s1'>
        <div className='head'>
          <h1>{movie.moviename} - {movie.language}</h1>
          <h3>{movie.type}</h3>
        </div>
      </div>

      <div className="selectseat">
        <div className='timecont'>
          {
            screen.timeslots.map((time: any, index: number) => (
              <h3 className={selectedTime.time === time.time ? 'time selected' : 'time'}
                key={index} onClick={() => setSelectedTime(time)}>{time.time}</h3>


            ))
          }
        </div>

        <div className='indicators'>
          <div>
            <span className='seat-unavailable'></span>
            <p>Not available</p>
          </div>
          <div>
            <span className='seat-available'></span>
            <p>Available</p>
          </div>
          <div>
            <span className='seat-selected'></span>
            <p>Selected</p>
          </div>
        </div>
        {generateSeatLayout()}

        <div className='totalcont'>
        </div>

      </div>
    </div>


  )
}

export default page
