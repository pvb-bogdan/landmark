<template>
    <b-modal :title="'modal'" :visible="true" no-close-on-backdrop @hide="submit">
        <div>
            <h1>modal</h1>
        </div>
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
