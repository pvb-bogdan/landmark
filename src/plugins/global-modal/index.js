import GlobalModal from './GlobalModal'

const Plugin = {
  install (Vue, options) {
    this.event = new Vue()
    this.resolve = null

    Vue.prototype.$modal = {
      open (options) {
        Plugin.event.$emit('toggle-modal', true, options)
        return new Promise(resolve => {
          this.resolve = resolve // HACK
        })
      },
      close (result) {
        this.resolve(result)

        Plugin.event.$emit('toggle-modal', false)
      }
    }
    Vue.component('global-modal', GlobalModal)
  }
}

export default Plugin
