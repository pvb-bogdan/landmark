<template>
  <b-modal :title="'modal'" :visible="true" no-close-on-backdrop size="lg">
    <div slot="modal-header" class="container">
      <b-row>
        <div class="col-sm-6">
          <div class="ld-card-header">
            <img src="@/assets/images/logo-ld.png" alt="">
            <span class="ld-landmark">LANDMARK</span>
            <span class="ld-holidays">HOLIDAYS</span>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="float-right">
            <button class="btn btn-outline-secondary btn-sm ld-btn-sm" v-b-tooltip.hover title="Print">
              <span class="fa fa-print text-danger"></span>
            </button>
            <button class="btn btn-outline-secondary btn-sm ld-btn-sm" v-b-tooltip.hover title="PDF">
              <span class="fa fa-file-pdf-o text-info"></span>
            </button>
            <button class="btn btn-outline-secondary btn-sm ld-btn-sm" @click="submit" v-b-tooltip.hover title="Close">
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>
      </b-row>
    </div>
    <b-row>
      <b-col sm="12" class="mb-4">
        <div class="bg-dark text-white rounded shadow clearfix px-3 py-1">
          <ul class="list-inline mb-0" style="font-size:.8rem;">
            <li class="list-inline-item"><b>Departure:</b>  <i>London</i>  </li>
            <li class="list-inline-item"><b>Transport:</b><i>  Flight  </i></li>
            <li class="list-inline-item"><b>Destination:</b><i>  Larnaca</i></li>
            <li class="list-inline-item"><b>Date:</b><i>  25-07-2019</i></li>
            <li class="list-inline-item"><b>No. nights:</b><i>  7</i></li>
            <li class="list-inline-item"><b>Room 1:</b><i>  2 - adults</i></li>
          </ul>
          <!-- <span><b>Plecare:</b>  Bucuresti   <b>Transport:</b>  Avion  <b>Destinatie:</b>  Larnaca</span> -->
          <hr style="border-bottom:1px solid #ccc; margin:5px 0px;">
          <small class="float-right" style="font-size:.7rem;"> - oferta generta de <b>trip</b> - <b>12/01/2019 12:00</b></small>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-card no-body>
            <img src="@/assets/images/hotel-placeholder2.jpg" alt="" class="img-thumbnail shadow">
          </b-card>
      </b-col>
      <b-col md="8 pt-4">
        <h4 class="modal-hotel-name text-center">HOTEL ARMADA
            <sup>
              <small>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </small>
            </sup>
        </h4>
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
      <b-col sm="12 mt-4">
        <h6 class="modal-title"><b>DESCRIPTION</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
        <h6 class="modal-title"><b>ZONE</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
        <h6 class="modal-title"><b>HOTEL AMENITIES</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
        <h6 class="modal-title"><b>ROOM AMENITIES</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
        <h6 class="modal-title"><b>SPORT &amp; ENTERTAINEMENT</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
        <h6 class="modal-title"><b>DRINKS &amp; FOOD</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
        <h6 class="modal-title"><b>SPA &amp; WELLNES</b></h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nam culpa aperiam dolorum sint laborum id distinctio accusantium doloribus et sed odio cupiditate earum libero repellat autem dolorem placeat. Deserunt!</p>
      </b-col>
      <b-col sm="12" class="my-4">
        <div class="bg-dark text-white rounded shadow clearfix p-3">
          <ul class="list-inline mb-0" style="font-size:.9rem;">
            <li class="list-inline-item"><b>PACKAGE:</b>  <i>HOTEL ARMADA</i> Summer 2019, departure from London, flight KZM </li>
          </ul>
        </div>
      </b-col>
      <b-col md="6">
        <h6 class="modal-title">INCLUDED SERVICES</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.<br>Incidunt quas dignissimos neque vel voluptatum deleniti deserunt reiciendis.<br> Provident autem sed dolorum ipsam molestiae.<br>Possimus, quidem at lerm tare</p>
      </b-col>
      <b-col md="6">
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
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-sm table-hover">
            <caption class="caption">Price details</caption>
            <thead class="bg-dark text-white">
              <tr>
                <td colspan="2">Room</td>
                <td>Meal</td>
                <td>Price</td>
                <td>Sale</td>
                <td>Offer</td>
              </tr>
            </thead>
            <tbody style="font-weight: 500;">
              <tr>
                <td>Classic Twin Side Sea View</td>
                <td><a href="#" ><i class=""></i></a></td>
                <td>Bed &amp; Breakfast</td>
                <td class="text-secondary">1,274.00 &euro;</td>
                <td class="text-danger">1,172.00 &euro;</td>
                <td>
                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                </td>
              </tr>
              <tr>
                <td>Superior Side Sea View</td>
                <td><a ><i class=""></i></a></td>
                <td>Bed &amp; Breakfast</td>
                <td class="text-secondary">1,999.00 &euro;</td>
                <td class="text-danger">1,802.00 &euro;</td>
                <td>
                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                </td>
              </tr>
              <tr>
                <td>Premium Superior Side Sea View</td>
                <td><a href="#"><i class=""></i></a></td>
                <td>Bed &amp; Breakfast</td>
                <td class="text-secondary">2,059.00 &euro;</td>
                <td class="text-danger">1,850.00 &euro;</td>
                <td>
                  <span v-b-tooltip.hover title="available!"><i class="fa fa-check-circle-o"></i></span>
                  <span v-b-tooltip.hover title="early booking!"><i class="fa fa-clock-o"></i></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
      <b-col md="12">
        <h6 class="modal-title">Included &amp; Optional elements</h6>
        <ul class="list-group">
          <li class="list-group-item"> <i class="fa fa-check mr-2 text-success"></i>Morbi leo risus</li>
          <li class="list-group-item"> <i class="fa fa-times mr-2 text-danger"></i>Porta ac consectetur ac</li>
        </ul>
      </b-col>
      <b-col md="12">
        <h6 class="modal-title">Notes:</h6>
        <ul class="list-group">
          <li class="list-group-item list-group-item-secondary"><b>NOTE: </b> leo risus orta ac consectetur ac</li>
        </ul>
      </b-col>
    </b-row>
    <div slot="modal-footer">
      <b-btn variant="primary" size="sm" @click="submit">Close</b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  methods: {
    submit () {
      this.$modal.close()
    }
  }
}
</script>
