<template>
  <div>
    <b-container class="mt-5 bg-filters shadow rounded">
      <div class="py-4">
        <b-container>
          <b-row>
            <b-col sm="12">
              <div class="bg-dark text-white rounded shadow clearfix p-3">
                <ul class="list-inline mb-0" style="font-size:.9rem;">
                  <li class="list-inline-item"><b>PACKAGE:</b>  <i>HOTEL ARMADA</i> Summer 2019, departure from London, flight KZM </li>
                </ul>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <hr>
              <p style="font-size:.9rem;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore est corporis. Reiciendis facere dicta inventore! Eius similique cupiditate expedita consequatur ut pariatur odio suscipit eaque eum voluptas, aspernatur placeat.</p>
              <hr>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col md="4">
              <div class="card">
                <img src="/static/img/hotel-placeholder2.5d559ec.jpg" alt="" class="img-thumbnail shadow">
              </div>
            </b-col>
            <b-col md="4 pt-3">
              <h6 class="modal-title">INCLUDED SERVICES</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.<br>Incidunt quas dignissimos neque vel voluptatum deleniti deserunt reiciendis.<br> Provident autem sed dolorum ipsam molestiae.<br>Possimus, quidem at lerm tare</p>
            </b-col>
            <b-col md="4 pt-3">
              <h6 class="modal-title">PAY FOR</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.<br>Incidunt quas dignissimos neque vel voluptatum deleniti deserunt reiciendis.<br> Provident autem sed dolorum ipsam molestiae.</p>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col md="12">
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <caption class="caption">Fligth details</caption>
                  <thead class="bg-dark text-white">
                    <tr>
                      <td>Flight</td>
                      <td>No.</td>
                      <td>Date</td>
                      <td>Departure</td>
                      <td>Hour</td>
                      <td>Arrival</td>
                      <td>Hour</td>
                      <td>Flight Duration</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dus</td>
                      <td>KZ252</td>
                      <td>22-07-2019</td>
                      <td>Heatrow</td>
                      <td>12:00</td>
                      <td>Larnaca Intl</td>
                      <td>14:30</td>
                      <td>02:30</td>
                    </tr>
                    <tr>
                      <td>Intors</td>
                      <td>KZ253</td>
                      <td>29-07-2019</td>
                      <td>Larnaca Intl</td>
                      <td>10:00</td>
                      <td>Heatrow</td>
                      <td>12:30</td>
                      <td>02:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <div class="table-responsive">
                <table class="table table-sm text-center">
                  <caption class="caption">Passenger details</caption>
                  <thead class="bg-dark text-white">
                    <tr>
                      <td>Room</td>
                      <td></td>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td> Age</td>
                      <td>Birth date</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Room 1</td>
                      <td>
                        <b-form-group>
                          <select class="form-control form-control-sm">
                            <option value="1">Mr</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Miss</option>
                          </select>
                        </b-form-group>
                      </td>
                      <td>
                        <b-form-input
                          type="text"
                          placeholder=" First Name"
                          size="sm"
                        ></b-form-input>
                      </td>
                      <td>
                        <b-form-input
                          type="text"
                          placeholder="Last Name"
                          size="sm"
                        ></b-form-input>
                      </td>
                      <td>ADT</td>
                      <td>
                        <b-input-group
                        size="sm"
                        slot="prepend"
                        >
                          <b-form-input
                          type="date"
                          ></b-form-input>
                        </b-input-group>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <h6 class="modal-title">INCLUDED &amp; OPTIONAL ELEMENTS</h6>
              <ul class="list-group">
                <li class="list-group-item"> <i class="fa fa-check mr-2 text-success"></i>Morbi leo risus</li>
                <li class="list-group-item"> <i class="fa fa-times mr-2 text-danger"></i>Porta ac consectetur ac</li>
              </ul>
            </b-col>
            <b-col md="12">
              <h6 class="modal-title">NOTES:</h6>
              <ul class="list-group">
                <li class="list-group-item list-group-item-secondary"><b>NOTE: </b> leo risus orta ac consectetur ac</li>
              </ul>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col sm="6">
              <div class="terms">
                <b-form-checkbox>
                  <span>I read and I agree whit <span class="text-danger">Terms and Conditions</span></span>
                </b-form-checkbox>
              </div>
            </b-col>
            <b-col sm="6">
              <div class="terms bg-warning">
                <b>PRICE: </b> <span class="text-danger price">1,800.00 &euro;</span>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <hr>
            </b-col>
            <b-col sm="6">
              <b-button  variant="primary" size="sm" @click="showResults">
                <i class="fa fa-caret-left mr-2"></i> BACK TO RESULTS
              </b-button>
            </b-col>
            <b-col sm="6">
              <b-button  variant="warning"  size="sm" class="float-right">
                <i class="fa fa-check mr-2"></i> BOOK
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<style>
  .terms{
    padding:13px;
    text-align: center;
    border:1px solid #ccc;
    border-radius:4px;
    font-size: .9rem;
  }
  .price {
    font-size:1.1rem;
    font-weight: 700;
  }
</style>

<script>
export default {
  name: 'bookingDetails',
  methods: {
    showResults () {
      this.$router.push({ name: 'bookings' })
    }
  }
}
</script>
