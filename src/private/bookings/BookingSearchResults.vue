<template>
    <b-container class="mt-5">
      <div class="bg-filters shadow pt-0 rounded">
        <b-row>
          <div class="col-md-12">
            <div class="d-flex chr-d-flex justify-content-between px-3 ld-bg-primary text-white">
              <div class="p-2">
              <i class="fa fa-info-circle mr-2"></i>Info hotel
              </div>
              <div class="p-2">
              <i class="fa fa-tag mr-2"></i>Oferta speciala
              </div>
              <div class="p-2">
              <i class="fa fa-clock-o mr-2"></i>Early booking
              </div>
              <div class="p-2">
              <i class="fa fa-child mr-2"></i>Copil gratuit
              </div>
              <div class="p-2">
              <i class="fa fa-check-circle-o mr-2"></i>Disponibil
              </div>
              <div class="p-2">
              <i class="fa fa-check-circle-o mr-2" style="color: white;"></i>La cerere
              </div>
              <div class="p-2">
              <i class="fa fa-ban mr-2"></i>Nedisponibil
              </div>
            </div>
          </div>
        </b-row>
        <b-row>
            <b-col sm="12 p-3">
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-btn href="#" v-b-toggle.accordion1 variant="primary" size="sm" class="ld-btn-sm">
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
                        <span class="mr-2 result-price">price: 1250 &euro;</span>
                        <b-button-group>
                          <b-button variant="warning" class="ld-btn-sm">
                            <input type="checkbox">
                            <b>PDF</b>
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
                          <p class="bg-dark text-white p-2 rounded shadow">Zona/Statiune: <b>LARNACA</b> Destinatie: <b>LARNACA</b> Tara: <b>CIPRU</b></p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
                          <hr>
                          <small class="float-right"><a href="#"><b><i class="fa fa-external-link mr-2"></i> <em>www.hotelastera.com</em></b></a></small>
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
                              <tbody>
                                <tr>
                                  <td>Classic Twin Side Sea View</td>
                                  <td><a href="#" @click.prevent="hide2 = !hide2" ><i :class="{'fa fa-plus-square-o': !hide2, 'fa fa-minus-square-o': hide2}"></i></a></td>
                                  <td>Bed &amp; Breakfast</td>
                                  <td>1,854.00 &euro;</td>
                                  <td>1,670.00 &euro;</td>
                                  <td>EBD AVL</td>
                                  <td><b-btn class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                                </tr>
                                <tr v-show="hide2"><td colspan="7">hide</td></tr>
                                <tr>
                                  <td>Classic Twin Side Sea View</td>
                                  <td><a ><i class="fa fa-plus-square-o"></i></a></td>
                                  <td>Bed &amp; Breakfast</td>
                                  <td>1,854.00 &euro;</td>
                                  <td>1,670.00 &euro;</td>
                                  <td>EBD AVL</td>
                                  <td><b-btn class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                                </tr>
                                <tr>
                                  <td>Classic Twin Side Sea View</td>
                                  <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                  <td>Bed &amp; Breakfast</td>
                                  <td>1,854.00 &euro;</td>
                                  <td>1,670.00 &euro;</td>
                                  <td>EBD AVL</td>
                                  <td><b-btn class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
                                </tr>
                                <tr>
                                  <td>Classic Twin Side Sea View</td>
                                  <td><a href="#"><i class="fa fa-plus-square-o"></i></a></td>
                                  <td>Bed &amp; Breakfast</td>
                                  <td>1,854.00 &euro;</td>
                                  <td>1,670.00 &euro;</td>
                                  <td>EBD AVL</td>
                                  <td><b-btn class="btn-sm float-right ld-btn-sm">Booking</b-btn></td>
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
    }
  }
}
</script>
