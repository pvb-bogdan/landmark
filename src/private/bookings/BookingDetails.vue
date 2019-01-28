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
            <b-col>
              <hr>
              <ul class="list-inline text-center"  style="font-size:.8rem;">
                <li class="list-inline-item">
                  <span><span class="text-primary"> <i class="fa fa-thumbs-up mr-2"></i></span>Foarte bine - 8.5 Booking.com</span><br>
                </li>
                <li class="list-inline-item   "> | </li>
                <li class="list-inline-item">
                  <span><span class="text-success"><i class="fa fa-tripadvisor mr-2"></i></span>Certificat de excelenta pe Trip Advisor</span>
                </li>
              </ul>
              <hr>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
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
          <b-row>
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
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'bookingDetails'
}
</script>
