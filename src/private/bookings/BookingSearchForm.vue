<template>
  <div>
    <b-container class="pt-5">
      <div class="bg-filters shadow p-3 rounded">
        <b-row>
          <b-col><h4>BOOKINGS</h4><hr></b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <b-form-group label="Transportation">
              <select name="transport" id="transport" class="form-control form-control-sm">
                <option value="1">Avion</option>
                <option value="2">Autoturism</option>
                <option value="3">Autocar</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Departure*">
              <select name="departure" id="departure" class="form-control form-control-sm">
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Arrival*">
              <select name="arrival" id="arrival" class="form-control form-control-sm">
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Zone*">
              <select name="zone" id="zone" class="form-control form-control-sm">
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="2">
            <b-form-group label="Resort">
              <select name="resort" id="resort" class="form-control form-control-sm">
                <option value="1">-- option --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Departure date*">
              <select
                name="departure-date"
                id="departure-date"
                class="form-control form-control-sm"
              >
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Days*">
              <select name="days" id="days" class="form-control form-control-sm">
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Hotel">
              <select name="hotel" id="hotel" class="form-control form-control-sm">
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Hotel catg.">
              <select name="hotel-catg" id="hotel-catg" class="form-control form-control-sm">
                <option value="1">-- select --</option>
                <option value="2">option</option>
                <option value="3">option</option>
              </select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <label for="input-group">Room 1</label>
            <b-input-group>
              <b-form-input class="form-control form-control-sm" placeholder="2 Adults + 0 children"></b-form-input>
              <b-input-group-append>
                <b-btn variant="primary" size="sm">
                  <i class="fa fa-plus"></i>
                </b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12">
            <hr>
            <b-btn variant="primary" size="sm" class="float-right" @click="showResults">
              <i class="fa fa-search mr-2"></i>SEARCH
            </b-btn>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <show-results v-show="ShowResults"/>
    <booking-search-results  v-show="ShowResults"/>
  </div>
</template>

<script>
import BookingSearchResults from './BookingSearchResults'
import ShowResults from './ShowResults'

export default {
  name: 'BookingSearchForm',
  components: {
    'booking-search-results': BookingSearchResults,
    'show-results': ShowResults
  },
  data () {
    return {
      ShowResults: false,
      BookingSearchResults: false
    }
  },
  methods: {
    showResults () {
      this.ShowResults = true
      this.BookingSearchResults = true
    }
  }
}
</script>
