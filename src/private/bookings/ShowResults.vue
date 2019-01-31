<template>
  <b-container class="mt-1">
    <div class="bg-filters shadow px-3 py-1 rounded">
      <b-row>
        <b-col md="7" class="pt-1">
          <strong>CORFU</strong>
          <span>
            <i>19-09-2019 /
              <b>7</b> nights
            </i>
          </span>&nbsp;&nbsp;:&nbsp;&nbsp;
          <span>9 results</span>
        </b-col>
        <b-col md="5">
          <b-row>
            <b-col sm="6">
              <b-form-group class="mb-0">
                <select name="resort" id="resort" class="form-control form-control-sm">
                  <option value="1">Best deal</option>
                  <option value="2">Price down</option>
                  <option value="3">Price up</option>
                </select>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group class="mb-0">
                <select name="resort" id="resort" class="form-control form-control-sm">
                  <option value="1">20 / page</option>
                  <option value="2">50 / page</option>
                  <option value="3">Show  all</option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {

}
</script>
