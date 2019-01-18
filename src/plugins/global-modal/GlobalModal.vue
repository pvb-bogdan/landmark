<template>
  <component :is="component" v-bind="params"></component>
</template>

<script>
import GlobalModal from './index'

export default {
  name: 'GlobalModal',
  data () {
    return {
      component: null,
      params: null
    }
  },
  beforeMount () {
    GlobalModal.event.$on('toggle-modal', (isOpening, params) => {
      if (isOpening) {
        let promises = []
        let keys = []

        // Resolve function props
        for (let key in params.props) {
          if (params.props.hasOwnProperty(key)) {
            const value = params.props[key]

            if (typeof value === 'function') {
              const functionResult = value()

              // Check for promises
              if (functionResult && functionResult['then']) {
                promises.push(functionResult)
                keys.push(key)
              } else {
                params.props[key] = functionResult
              }
            }
          }
        }

        Promise.all(promises).then(results => {
          for (let i = 0; i < results.length; i++) {
            const result = results[i]

            params.props[keys[i]] = result
          }

          this.component = params.component
          this.params = params.props
        })
      } else {
        this.component = null
        this.params = null
      }
    })
  }
}
</script>
