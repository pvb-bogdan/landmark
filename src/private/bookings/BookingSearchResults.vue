<template>
    <b-container class="mt-5">
      <div class="bg-filters shadow pt-0 rounded">
        <b-row>
          <div class="col-md-12">
            <div class="d-flex justify-content-between px-3 ld-bg-primary text-white">
              <div class="p-2">
              <i class="fa fa-info-circle mr-2"></i>Hotel info
              </div>
              <div class="p-2">
              <i class="fa fa-tag mr-2"></i>Special offer
              </div>
              <div class="p-2">
              <i class="fa fa-clock-o mr-2"></i>Early booking
              </div>
              <div class="p-2">
              <i class="fa fa-child mr-2"></i>Free child
              </div>
              <div class="p-2">
              <i class="fa fa-check-circle-o mr-2"></i>Available
              </div>
              <div class="p-2">
              <i class="fa fa-check-circle-o mr-2" style="color: white;"></i>On request
              </div>
              <div class="p-2">
              <i class="fa fa-ban mr-2"></i>Unavailable
              </div>
            </div>
          </div>
        </b-row>
        <b-row>
          <b-col sm="12 p-3">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn href="#" v-b-toggle.accordion1 variant="primary" size="sm" class="">
                    <i class="fa fa-plus"></i>
                    </b-btn>
                    <span class="result-title">HOTEL ARMADA&nbsp;&nbsp;
                      <sup>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </sup>
                    </span>
                    <div class="float-right">
                      <span class="mr-2 result-price">price: 1,250 &euro;</span>
                      <b-button-group>
                        <b-button variant="warning" class="ld-btn-sm">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">PDF</label>
                          </div>
                        </b-button>
                        <b-button variant="primary" @click="openModal" class="ld-btn-sm"><i class="fa fa-info-circle"></i></b-button>
                      </b-button-group>
                    </div>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-row class="mb-5">
                      <b-col md="3">
                        <b-card no-body>
                          <img src="@/assets/images/hotel-placeholder2.jpg" alt="" class="img-thumbnail shadow">
                        </b-card>
                      </b-col>
                      <b-col md="9">
                        <div class="bg-dark text-white p-2 rounded shadow clearfix mb-3">
                          Zone: <b>LARNACA</b> |  Destination: <b>LARNACA</b> |  Country: <b>CIPRU</b>
                          <hr style="border-bottom:1px solid #ccc; margin:5px 0px;">
                          <a href="" class="text-white"><small class="float-right" style="font-size:.8rem;"> <i class="fa fa-external-link mr-2"></i> <em>www.armadahotel.com</em></small></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
                        <hr>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <div class="table-responsive">
                          <table class="table table-sm table-hover">
                            <thead class="bg-dark text-white">
                              <tr>
                                <td colspan="2">Room</td>
                                <td>Meal</td>
                                <td>Price</td>
                                <td>Sale</td>
                                <td>Offer</td>
                                <td>Choose</td>
                              </tr>
                            </thead>
                            <tbody style="font-weight: 500;">
                              <tr>
                                <td>Classic Twin Side Sea View</td>
                                <td><a href="#" @click.prevent="hide2 = !hide2" ><i :class="{'fa fa-plus-square-o': !hide2, 'fa fa-minus-square-o': hide2}"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,274.00 &euro;</td>
                                <td class="text-danger">1,172.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm" @click="bookingDetails">Booking</b-btn></td>
                              </tr>
                              <tr v-show="hide2" class="ld-bg-tr-text">
                                <td colspan="2"></td>
                                <td>All Inclusive</td>
                                <td class="text-secondary">1,188.00 &euro;</td>
                                <td class="text-danger">1,086.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm" @click="bookingDetails">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Superior Side Sea View</td>
                                <td><a ><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,999.00 &euro;</td>
                                <td class="text-danger">1,802.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm" @click="bookingDetails">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Premium Superior Side Sea View</td>
                                <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">2,059.00 &euro;</td>
                                <td class="text-danger">1,850.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm" @click="bookingDetails">Booking</b-btn></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn href="#" v-b-toggle.accordion2 variant="primary" size="sm" class="">
                    <i class="fa fa-plus"></i>
                    </b-btn>
                    <span class="result-title">PALM BEACH HOTEL&nbsp;&nbsp;
                      <sup>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </sup>
                    </span>
                    <div class="float-right">
                      <span class="mr-2 result-price">price: 1,772 &euro;</span>
                      <b-button-group>
                        <b-button variant="warning" class="ld-btn-sm">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck2">
                            <label class="custom-control-label" for="customCheck2">PDF</label>
                          </div>
                        </b-button>
                        <b-button variant="primary" @click="openModal" class="ld-btn-sm"><i class="fa fa-info-circle"></i></b-button>
                      </b-button-group>
                    </div>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-row class="mb-5">
                      <b-col md="3">
                        <b-card no-body>
                          <img src="@/assets/images/hotel-placeholder.jpg" alt="" class="img-thumbnail shadow">
                        </b-card>
                      </b-col>
                      <b-col md="9">
                        <div class="bg-dark text-white p-2 rounded shadow clearfix mb-3">
                          Zone: <b>LARNACA</b> |  Destination: <b>LARNACA</b> |  Country: <b>CIPRU</b>
                          <hr style="border-bottom:1px solid #ccc; margin:5px 0px;">
                          <a href="" class="text-white"><small class="float-right" style="font-size:.8rem;"> <i class="fa fa-external-link mr-2"></i> <em>www.palmbeach-hotel.com</em></small></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
                        <hr>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <div class="table-responsive">
                          <table class="table table-sm table-hover">
                            <thead class="bg-dark text-white">
                              <tr>
                                <td colspan="2">Room</td>
                                <td>Meal</td>
                                <td>Price</td>
                                <td>Sale</td>
                                <td>Offer</td>
                                <td>Choose</td>
                              </tr>
                            </thead>
                            <tbody style="font-weight: 500;">
                              <tr>
                                <td>Classic Twin Side Sea View</td>
                                <td><a href="#" @click.prevent="hide2 = !hide2" ><i :class="{'fa fa-plus-square-o': !hide2, 'fa fa-minus-square-o': hide2}"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,274.00 &euro;</td>
                                <td class="text-danger">1,172.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr v-show="hide2" class="ld-bg-tr-text">
                                <td colspan="2"></td>
                                <td>All Inclusive</td>
                                <td class="text-secondary">1,188.00 &euro;</td>
                                <td class="text-danger">1,086.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Superior Side Sea View</td>
                                <td><a ><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,999.00 &euro;</td>
                                <td class="text-danger">1,802.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Premium Superior Side Sea View</td>
                                <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">2,059.00 &euro;</td>
                                <td class="text-danger">1,850.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn href="#" v-b-toggle.accordion3 variant="primary" size="sm" class="">
                    <i class="fa fa-plus"></i>
                    </b-btn>
                    <span class="result-title">LIVADHIOTIS CITY HOTEL&nbsp;&nbsp;
                      <sup>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </sup>
                    </span>
                    <div class="float-right">
                      <span class="mr-2 result-price-black">price: 1,200 &euro;</span>
                      <b-button-group>
                        <b-button variant="warning" class="ld-btn-sm">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                            <label class="custom-control-label" for="customCheck3">PDF</label>
                          </div>
                        </b-button>
                        <b-button variant="primary" @click="openModal" class="ld-btn-sm"><i class="fa fa-info-circle"></i></b-button>
                      </b-button-group>
                    </div>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-row class="mb-5">
                      <b-col md="3">
                        <b-card no-body>
                          <img src="@/assets/images/hotel-03.jpg" alt="" class="img-thumbnail shadow">
                        </b-card>
                      </b-col>
                      <b-col md="9">
                        <div class="bg-dark text-white p-2 rounded shadow clearfix mb-3">
                          Zone: <b>LARNACA</b> |  Destination: <b>LARNACA</b> |  Country: <b>CIPRU</b>
                          <hr style="border-bottom:1px solid #ccc; margin:5px 0px;">
                          <a href="" class="text-white"><small class="float-right" style="font-size:.8rem;"> <i class="fa fa-external-link mr-2"></i> <em>www.livadhiotishotel.com</em></small></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
                        <hr>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <div class="table-responsive">
                          <table class="table table-sm table-hover">
                            <thead class="bg-dark text-white">
                              <tr>
                                <td colspan="2">Room</td>
                                <td>Meal</td>
                                <td>Price</td>
                                <td>Sale</td>
                                <td>Offer</td>
                                <td>Choose</td>
                              </tr>
                            </thead>
                            <tbody style="font-weight: 500;">
                              <tr>
                                <td>Classic Twin Side Sea View</td>
                                <td><a href="#" @click.prevent="hide2 = !hide2" ><i :class="{'fa fa-plus-square-o': !hide2, 'fa fa-minus-square-o': hide2}"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,274.00 &euro;</td>
                                <td class="text-danger">1,172.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr v-show="hide2" class="ld-bg-tr-text">
                                <td colspan="2"></td>
                                <td>All inclusive</td>
                                <td class="text-secondary">1,549.00 &euro;</td>
                                <td class="text-danger">1,1447.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Superior Side Sea View</td>
                                <td><a ><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,999.00 &euro;</td>
                                <td class="text-danger">1,802.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Premium Superior Side Sea View</td>
                                <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">2,059.00 &euro;</td>
                                <td class="text-danger">1,850.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn href="#" v-b-toggle.accordion4 variant="primary" size="sm" class="">
                    <i class="fa fa-plus"></i>
                    </b-btn>
                    <span class="result-title">SUN HALLL&nbsp;&nbsp;
                      <sup>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </sup>
                    </span>
                    <div class="float-right">
                      <span class="mr-2 result-price">price: 1,672 &euro;</span>
                      <b-button-group>
                        <b-button variant="warning" class="ld-btn-sm">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck4">
                            <label class="custom-control-label" for="customCheck4">PDF</label>
                          </div>
                        </b-button>
                        <b-button variant="primary" @click="openModal" class="ld-btn-sm"><i class="fa fa-info-circle"></i></b-button>
                      </b-button-group>
                    </div>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-row class="mb-5">
                      <b-col md="3">
                        <b-card no-body>
                          <img src="@/assets/images/hotel-04.jpg" alt="" class="img-thumbnail shadow">
                        </b-card>
                      </b-col>
                      <b-col md="9">
                        <div class="bg-dark text-white p-2 rounded shadow clearfix mb-3">
                          Zone: <b>LARNACA</b> |  Destination: <b>LARNACA</b> |  Country: <b>CIPRU</b>
                          <hr style="border-bottom:1px solid #ccc; margin:5px 0px;">
                          <a href="" class="text-white"><small class="float-right" style="font-size:.8rem;"> <i class="fa fa-external-link mr-2"></i> <em>www.sunhall.com</em></small></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
                        <hr>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <div class="table-responsive">
                          <table class="table table-sm table-hover">
                            <thead class="bg-dark text-white">
                              <tr>
                                <td colspan="2">Room</td>
                                <td>Meal</td>
                                <td>Price</td>
                                <td>Sale</td>
                                <td>Offer</td>
                                <td>Choose</td>
                              </tr>
                            </thead>
                            <tbody style="font-weight: 500;">
                              <tr>
                                <td>Classic Twin Side Sea View</td>
                                <td><a href="#" @click.prevent="hide2 = !hide2" ><i :class="{'fa fa-plus-square-o': !hide2, 'fa fa-minus-square-o': hide2}"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,274.00 &euro;</td>
                                <td class="text-danger">1,172.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr v-show="hide2" class="ld-bg-tr-text">
                                <td colspan="2"></td>
                                <td>All Inclusive</td>
                                <td class="text-secondary">1,188.00 &euro;</td>
                                <td class="text-danger">1,086.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Superior Side Sea View</td>
                                <td><a ><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,999.00 &euro;</td>
                                <td class="text-danger">1,802.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Premium Superior Side Sea View</td>
                                <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">2,059.00 &euro;</td>
                                <td class="text-danger">1,850.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn href="#" v-b-toggle.accordion5 variant="primary" size="sm" class="">
                    <i class="fa fa-plus"></i>
                    </b-btn>
                    <span class="result-title">GOLDEN BAY HOTEL&nbsp;&nbsp;
                      <sup>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </sup>
                    </span>
                    <div class="float-right">
                      <span class="mr-2 result-price-black">price: 2,200 &euro;</span>
                      <b-button-group>
                        <b-button variant="warning" class="ld-btn-sm">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck5">
                            <label class="custom-control-label" for="customCheck5">PDF</label>
                          </div>
                        </b-button>
                        <b-button variant="primary" @click="openModal" class="ld-btn-sm"><i class="fa fa-info-circle"></i></b-button>
                      </b-button-group>
                    </div>
                </b-card-header>
                <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-row class="mb-5">
                      <b-col md="3">
                        <b-card no-body>
                          <img src="@/assets/images/hotel-05.jpg" alt="" class="img-thumbnail shadow">
                        </b-card>
                      </b-col>
                      <b-col md="9">
                        <div class="bg-dark text-white p-2 rounded shadow clearfix mb-3">
                          Zone: <b>LARNACA</b> |  Destination: <b>LARNACA</b> |  Country: <b>CIPRU</b>
                          <hr style="border-bottom:1px solid #ccc; margin:5px 0px;">
                          <a href="" class="text-white"><small class="float-right" style="font-size:.8rem;"> <i class="fa fa-external-link mr-2"></i> <em>www.goldenbayhotel.com</em></small></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
                        <hr>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <div class="table-responsive">
                          <table class="table table-sm table-hover">
                            <thead class="bg-dark text-white">
                              <tr>
                                <td colspan="2">Room</td>
                                <td>Meal</td>
                                <td>Price</td>
                                <td>Sale</td>
                                <td>Offer</td>
                                <td>Choose</td>
                              </tr>
                            </thead>
                            <tbody style="font-weight: 500;">
                              <tr>
                                <td>Classic Twin Side Sea View</td>
                                <td><a href="#" @click.prevent="hide2 = !hide2" ><i :class="{'fa fa-plus-square-o': !hide2, 'fa fa-minus-square-o': hide2}"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,274.00 &euro;</td>
                                <td class="text-danger">1,172.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr v-show="hide2" class="ld-bg-tr-text">
                                <td colspan="2"></td>
                                <td>All inclusive</td>
                                <td class="text-secondary">1,549.00 &euro;</td>
                                <td class="text-danger">1,1447.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Superior Side Sea View</td>
                                <td><a ><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">1,999.00 &euro;</td>
                                <td class="text-danger">1,802.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                              <tr>
                                <td>Premium Superior Side Sea View</td>
                                <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                <td>Bed &amp; Breakfast</td>
                                <td class="text-secondary">2,059.00 &euro;</td>
                                <td class="text-danger">1,850.00 &euro;</td>
                                <td>
                                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                                </td>
                                <td><b-btn variant="primary" class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
          <b-col sm="12" class="px-4 pt-0 pb-4">
            <hr class="mb-3 mt-0">
            <b-btn-group size="sm" class="float-right">
              <b-button variant="outline-primary">«</b-button>
              <b-button variant="outline-primary">‹</b-button>
              <b-button variant="primary"> 1 </b-button>
              <b-button variant="outline-primary">›</b-button>
              <b-button variant="outline-primary">»</b-button>
            </b-btn-group>
          </b-col>
        </b-row>
      </div>
    </b-container>
</template>

<script>
import ModalBooking from './ModalBooking'

export default {
  data () {
    return {
      hide2: false
    }
  },
  methods: {
    openModal () {
      this.$modal.open({
        component: ModalBooking
      })
    },
    bookingDetails () {
      this.$router.push({ name: 'bookingDetails' })
    }
  }
}
</script>
