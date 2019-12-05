<template lang="pug">
  a-modal(title="Upload Recipe file" v-model="opened")
    input.file-uploader(
      type="file" @change="onFileChange"
      v-if="value"
      v-show="false" ref="fileUploader" multiple accept=".json"
    )
    a-button(@click="$refs.fileUploader.click()" type="primary" block) Browse File

    a-card(v-show="hasContent" title="Content:")
      div.uploader-content
        | {{content}}
    template(slot="footer")
      a-button(key="back" @click="close") Cancel
      a-button(key="submit" @click="submit" type="primary" :disabled="!hasContent") Submit

</template>

<script>
  import recipeApi from '@/api/recipe'

  export default {
    name: 'RecipeUpload',
    data() {
      return {
        content: null
      }
    },
    props: {
      value: {
        type: Boolean,
        required: true,
        event: 'input'
      }
    },
    computed: {
      hasContent() {
        return this.content != null && this.content.length > 0
      },
      opened: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    watch: {
      opened(val) {
        if (!val) {
          this.content = null
        }
      }
    },
    methods: {
      submit() {
        recipeApi.addAll(this.content)
          .then(() => {
            this.close()
          })
          .catch((err) => {
            console.log(err)
          })
      },
      close() {
        this.opened = false
      },
      onFileChange(e) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return
        }

        const reader = new FileReader()
        reader.onload = (e1) => {
          const data = JSON.parse(e1.target.result)
          this.content = data.recipes
        }
        reader.readAsText(files[0])
      }
    }
  }
</script>

<style scoped lang="stylus">
  .uploader-content
    max-width 100%
    max-height 500px
    overflow-y auto
</style>
